import { readFileSync, realpathSync } from 'node:fs';
import path from 'node:path';

const include = /^\s*<!-- handbook:include ([^\s#]+\.md)#([\w-]+) -->\s*$/;
const start = /^\s*<!-- handbook:block ([\w-]+) -->\s*$/;
const end = /^\s*<!-- \/handbook:block -->\s*$/;

// Directives and Markdown examples inside fenced code remain literal.
function mapLines(markdown, visit, literal = line => line) {
  let fence;
  return markdown.split('\n').map(line => {
    const marker = line.match(/^\s{0,3}(`{3,}|~{3,})/);
    if (marker) {
      if (!fence) fence = marker[1];
      else if (marker[1][0] === fence[0] && marker[1].length >= fence.length && /^\s*$/.test(line.slice(marker[0].length))) fence = undefined;
      return literal(line);
    }
    return fence ? literal(line) : visit(line);
  }).join('\n');
}

function slug(text) {
  return text.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g, '-')
    .replace(/-{2,}/g, '-').replace(/^-+|-+$/g, '').replace(/^(\d)/, '_$1').toLowerCase();
}

function metadata(markdown) {
  const frontmatter = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  const values = {};
  for (const line of (frontmatter?.[1] ?? '').split('\n')) {
    const field = line.match(/^([\w_]+):\s*(.*?)\s*$/);
    if (field) values[field[1]] = field[2].replace(/^(['"])(.*)\1$/, '$2');
  }
  return values;
}

/** Expand explicit canonical blocks; hostRelPath and include paths are docs-relative. */
export function resolveReferences(markdown, hostRelPath, docsRoot) {
  const root = realpathSync(docsRoot);
  let occurrence = 0;
  const occupied = new Set();
  mapLines(markdown, line => {
    const heading = line.match(/^#{1,6}\s+(.+?)\s*#*\s*$/);
    if (heading) occupied.add(heading[1].match(/\{#([^}]+)\}\s*$/)?.[1] ?? slug(heading[1]));
    return line;
  });
  return mapLines(markdown, line => {
    const directive = line.match(include);
    if (!directive) return line;
    const [, sourceRel, blockId] = directive;
    const candidate = path.resolve(root, sourceRel);
    if (!candidate.startsWith(root + path.sep)) throw new Error(`Reference outside docs: ${sourceRel}`);
    const sourcePath = realpathSync(candidate);
    if (!sourcePath.startsWith(root + path.sep)) throw new Error(`Reference outside docs: ${sourceRel}`);
    const source = readFileSync(sourcePath, 'utf8');
    const blocks = new Map();
    let active;
    mapLines(source, sourceLine => {
      const opening = sourceLine.match(start);
      if (opening) {
        if (active) throw new Error(`Nested block in ${sourceRel}`);
        if (blocks.has(opening[1])) throw new Error(`Duplicate block ${opening[1]} in ${sourceRel}`);
        active = { id: opening[1], lines: [] };
        return sourceLine;
      }
      if (end.test(sourceLine)) {
        if (!active) throw new Error(`Unmatched block end in ${sourceRel}`);
        blocks.set(active.id, active.lines.join('\n'));
        active = undefined;
      } else if (active) {
        if (include.test(sourceLine)) throw new Error(`Nested include in ${sourceRel}`);
        active.lines.push(sourceLine);
      }
      return sourceLine;
    }, sourceLine => {
      if (active) active.lines.push(sourceLine);
      return sourceLine;
    });
    if (active) throw new Error(`Unclosed block ${active.id} in ${sourceRel}`);
    if (!blocks.has(blockId)) throw new Error(`Missing block ${blockId} in ${sourceRel}`);
    const namespace = `ref-${slug(sourceRel)}-${blockId}-${++occurrence}`;
    const sourceAnchors = new Set();
    const anchors = new Map();
    let body = mapLines(blocks.get(blockId), bodyLine => {
      const heading = bodyLine.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
      if (!heading) return bodyLine;
      const explicit = heading[2].match(/\s*\{#([^}]+)\}\s*$/);
      const title = explicit ? heading[2].slice(0, explicit.index) : heading[2];
      const original = explicit?.[1] ?? slug(title);
      let sourceAnchor = original;
      let sourceSuffix = 0;
      while (sourceAnchors.has(sourceAnchor)) sourceAnchor = `${original}-${++sourceSuffix}`;
      sourceAnchors.add(sourceAnchor);
      const base = `${namespace}-${sourceAnchor}`;
      let anchor = base;
      let hostSuffix = 0;
      while (occupied.has(anchor)) anchor = `${base}-${++hostSuffix}`;
      occupied.add(anchor);
      if (!anchors.has(sourceAnchor)) anchors.set(sourceAnchor, anchor);
      return `${heading[1]} ${title} {#${anchor}}`;
    });
    const rewrite = target => {
      if (target.startsWith('#')) return anchors.has(target.slice(1)) ? `#${anchors.get(target.slice(1))}` : `/${sourceRel.replace(/\.md$/, '')}${target}`;
      if (/^(?:[a-z][\w+.-]*:|\/)/i.test(target)) return target;
      const [, file, suffix] = target.match(/^([^?#]*)(.*)$/s);
      const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(sourceRel), file));
      if (resolved === '..' || resolved.startsWith('../')) throw new Error(`Reference link outside docs: ${target}`);
      let relative = path.posix.relative(path.posix.dirname(hostRelPath), resolved);
      if (!relative.startsWith('.')) relative = `./${relative}`;
      return relative + suffix;
    };
    body = mapLines(body, bodyLine => bodyLine
      .replace(/(!?\[[^\]\n]*\]\()([^\s)]+)([^)]*\))/g, (_, before, target, after) => before + rewrite(target) + after)
      .replace(/^(\s{0,3}\[[^\]]+\]:\s*)(\S+)/, (_, before, target) => before + rewrite(target)));
    const meta = metadata(source);
    const title = (meta.title || sourceRel).replace(/[\[\]]/g, '\\$&');
    const canonical = meta.canonical || `/${sourceRel.replace(/\.md$/, '')}`;
    return `${body}\n\n> Source: [${title}](${canonical}) · Status: ${meta.status || 'unspecified'} · Updated: ${meta.last_updated || 'unspecified'}`;
  });
}
