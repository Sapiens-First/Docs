#!/usr/bin/env node
/**
 * Validates handbook frontmatter and internal links against the schema in
 * AI-READABILITY-PLAN.md.
 *
 *   node scripts/validate-docs.mjs               # strict: exits 1 on ERROR
 *   node scripts/validate-docs.mjs --warn-only    # prints everything, always exits 0
 *
 * Checks docs/**\/*.md, excluding docs/index.md (home page: a different
 * frontmatter shape) and docs/.vitepress (site source, not content).
 *
 * ERROR (fails the build in strict mode):
 *   - missing title / description / section / status / last_updated
 *   - status not in the controlled vocabulary
 *   - section not in the three allowed sections
 *   - last_updated not YYYY-MM-DD
 *   - duplicate canonical path across pages
 *   - canonical not matching the file's own path
 *   - frontmatter title text differs from the page's H1 text
 *   - more than one H1
 *   - relative .md links or #fragments that don't resolve
 *
 * WARN (never fails the build):
 *   - no `::: related` block
 *   - no `## In brief` section
 *   - no one-sentence `>` summary directly under the H1
 *
 * This is a companion to scripts/check-rewrite.py, which guards protected
 * wording and link text rather than frontmatter/schema.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, dirname, relative, resolve, posix } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DOCS = join(ROOT, 'docs')
const warnOnly = process.argv.includes('--warn-only')

const ALLOWED_STATUS = ['adopted', 'proposal', 'draft', 'experimental', 'reference']
const ALLOWED_SECTIONS = ['For Supporters', 'For Members', 'For Organizers']

/** Same slug algorithm as VitePress / scripts/check-rewrite.py's `slugify`. */
function slugify(s) {
  s = s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
  s = s.replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g, '-')
  s = s.replace(/-{2,}/g, '-').replace(/^-+|-+$/g, '')
  s = s.replace(/^(\d)/, '_$1')
  return s.toLowerCase()
}

function listMarkdownFiles(dir) {
  const out = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const st = statSync(full)
    if (st.isDirectory()) {
      if (entry === '.vitepress' || entry === 'public') continue
      out.push(...listMarkdownFiles(full))
    } else if (entry.endsWith('.md')) {
      out.push(full)
    }
  }
  return out
}

function readFrontmatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (!m) return { data: {}, body: src, raw: '' }
  const data = {}
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/)
    if (!kv) continue
    const key = kv[1]
    let value = kv[2].trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    if (value === '' || value.startsWith('[') || value.startsWith('{')) continue
    data[key] = value
  }
  return { data, body: src.slice(m[0].length), raw: m[1] }
}

function toCanonicalPath(relMdPath) {
  let p = relMdPath.replace(/\\/g, '/').replace(/\.md$/, '')
  if (p === 'index') return '/'
  if (p.endsWith('/index')) return '/' + p.slice(0, -'/index'.length) + '/'
  return '/' + p
}

function headings(body) {
  const out = []
  let inFence = false
  for (const line of body.split(/\r?\n/)) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence
      continue
    }
    if (inFence) continue
    const m = line.match(/^(#{1,6})\s+(.*)$/)
    if (m) out.push({ level: m[1].length, text: m[2].trim() })
  }
  return out
}

function anchorsFor(cache, absPath) {
  if (cache.has(absPath)) return cache.get(absPath)
  let set = new Set()
  try {
    const { body } = readFrontmatter(readFileSync(absPath, 'utf8'))
    for (const h of headings(body)) {
      const custom = h.text.match(/\{#([\w-]+)\}\s*$/)
      let text = custom ? h.text.slice(0, custom.index).trim() : h.text
      text = text.replace(/[*_`]|\[([^\]]*)\]\([^)]*\)/g, (whole, g1) => g1 ?? '')
      set.add(custom ? custom[1] : slugify(text))
    }
  } catch {
    set = null
  }
  cache.set(absPath, set)
  return set
}

function checkLinks(errors, file, body, anchorCache) {
  const stripped = body.replace(/```[\s\S]*?```/g, '')
  const linkRe = /\]\(([^)\s]+)\)/g
  let match
  while ((match = linkRe.exec(stripped))) {
    const target = match[1]
    if (/^https?:\/\//.test(target) || target.startsWith('mailto:')) continue
    const [pathPart, hash] = target.split('#')
    if (!pathPart) {
      // pure #fragment link: must resolve on this same page
      const anchors = anchorsFor(anchorCache, file)
      if (anchors && hash && !anchors.has(hash)) {
        errors.push(`${relative(ROOT, file)}: broken link to #${hash} (no matching heading on this page)`)
      }
      continue
    }
    if (!pathPart.endsWith('.md')) continue
    const destPath = pathPart.startsWith('/')
      ? join(DOCS, pathPart.slice(1))
      : resolve(dirname(file), pathPart)
    if (!existsSync(destPath)) {
      errors.push(`${relative(ROOT, file)}: broken link to ${pathPart}`)
      continue
    }
    if (hash) {
      const anchors = anchorsFor(anchorCache, destPath)
      if (anchors && !anchors.has(hash)) {
        errors.push(`${relative(ROOT, file)}: broken link to ${pathPart}#${hash}`)
      }
    }
  }
}

function main() {
  const files = listMarkdownFiles(DOCS).filter((f) => f !== join(DOCS, 'index.md'))
  const errors = []
  const warnings = []
  const canonicalOwners = new Map() // canonical path -> [files]
  const anchorCache = new Map()

  for (const file of files) {
    const relPath = relative(ROOT, file)
    const relToDocs = posix.normalize(relative(DOCS, file).split('\\').join('/'))
    const src = readFileSync(file, 'utf8')
    const { data, body } = readFrontmatter(src)

    for (const key of ['title', 'description', 'section', 'status', 'last_updated']) {
      if (!data[key]) errors.push(`${relPath}: missing frontmatter \`${key}\``)
    }

    if (data.status && !ALLOWED_STATUS.includes(data.status)) {
      errors.push(`${relPath}: status "${data.status}" not in [${ALLOWED_STATUS.join(', ')}]`)
    }
    if (data.section && !ALLOWED_SECTIONS.includes(data.section)) {
      errors.push(`${relPath}: section "${data.section}" not one of the three allowed sections`)
    }
    if (data.last_updated && !/^\d{4}-\d{2}-\d{2}$/.test(data.last_updated)) {
      errors.push(`${relPath}: last_updated "${data.last_updated}" is not YYYY-MM-DD`)
    }

    const expectedCanonical = toCanonicalPath(relToDocs)
    if (data.canonical) {
      if (data.canonical !== expectedCanonical) {
        errors.push(
          `${relPath}: canonical "${data.canonical}" does not match the file's path (expected "${expectedCanonical}")`
        )
      }
      if (!canonicalOwners.has(data.canonical)) canonicalOwners.set(data.canonical, [])
      canonicalOwners.get(data.canonical).push(relPath)
    }

    const h1s = headings(body).filter((h) => h.level === 1)
    if (h1s.length > 1) errors.push(`${relPath}: more than one H1 (${h1s.length})`)
    if (data.title && h1s.length >= 1 && data.title.trim() !== h1s[0].text.trim()) {
      errors.push(`${relPath}: frontmatter title "${data.title}" does not match the H1 "${h1s[0].text}"`)
    }

    checkLinks(errors, file, body, anchorCache)

    if (!/^::: ?related\b/m.test(body)) warnings.push(`${relPath}: no ::: related block`)
    if (!/^## In brief\s*$/m.test(body)) warnings.push(`${relPath}: no "## In brief" section`)
    const afterH1 = body.replace(/^[\s\S]*?^# .+$/m, '').trimStart()
    if (h1s.length && !/^>\s+\S/.test(afterH1)) {
      warnings.push(`${relPath}: no one-sentence "> summary" directly under the H1`)
    }
  }

  for (const [canonical, owners] of canonicalOwners) {
    if (owners.length > 1) {
      errors.push(`Duplicate canonical "${canonical}" used by: ${owners.join(', ')}`)
    }
  }

  for (const w of warnings) console.log('WARN ', w)
  for (const e of errors) console.log(warnOnly ? 'WARN* ' : 'ERROR', e)

  console.log(
    `\n${files.length} page(s) checked. ${errors.length} error(s), ${warnings.length} warning(s).` +
      (warnOnly ? ' (--warn-only: not failing the build)' : '')
  )

  if (errors.length && !warnOnly) process.exit(1)
}

main()
