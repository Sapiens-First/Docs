import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const toc = JSON.parse(readFileSync(join(ROOT, 'handbook-data/toc.json'), 'utf8'))

export function getHandbookItems(entries = toc) {
  return entries.map(({ title, path }) => ({
    text: title,
    link: `/${path.replace(/index\.md$/, '').replace(/\.md$/, '')}`,
  }))
}

function markdownFiles(root, prefix = '') {
  return readdirSync(join(root, prefix), { withFileTypes: true }).flatMap(entry => {
    if (entry.name.startsWith('.')) return []
    const path = prefix ? `${prefix}/${entry.name}` : entry.name
    return entry.isDirectory() ? markdownFiles(root, path) : path.endsWith('.md') ? [path] : []
  })
}

function metadata(source) {
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1] ?? ''
  return Object.fromEntries(frontmatter.split(/\r?\n/).flatMap(line => {
    const match = line.match(/^([\w_]+):\s*(.*?)\s*$/)
    return match ? [[match[1], match[2].replace(/^(["'])(.*)\1$/, '$2')]] : []
  }))
}

export function validateHandbookToc(docsRoot = join(ROOT, 'docs'), entries = toc) {
  const errors = []
  const seen = { id: new Set(), number: new Set(), path: new Set() }
  const pages = new Map(markdownFiles(docsRoot).map(path => {
    const source = readFileSync(join(docsRoot, path), 'utf8')
    return [path, { source, meta: metadata(source) }]
  }))
  for (const entry of entries) {
    for (const field of ['id', 'number', 'title', 'path', 'section']) {
      if (typeof entry[field] !== 'string' || !entry[field].trim()) errors.push(`TOC entry missing ${field}`)
    }
    for (const field of Object.keys(seen)) {
      if (seen[field].has(entry[field])) errors.push(`Duplicate TOC ${field}: ${entry[field]}`)
      seen[field].add(entry[field])
    }
    const page = pages.get(entry.path)
    if (!page) {
      errors.push(`TOC page missing: ${entry.path}`)
      continue
    }
    for (const [field, key] of [['id', 'handbook_id'], ['number', 'handbook_number'], ['title', 'title'], ['section', 'section']]) {
      if (entry[field] !== page.meta[key]) errors.push(`${entry.path}: TOC ${field} differs from ${key}`)
    }
    const heading = page.source.match(/^#\s+(.+?)\s*$/m)?.[1]
    if (heading !== entry.title) errors.push(`${entry.path}: TOC title differs from H1`)
    if (!entry.title?.startsWith(`${entry.number} `)) errors.push(`${entry.path}: title must begin with number ${entry.number}`)
  }
  for (const [path, { meta }] of pages) {
    if (meta.handbook_number !== undefined && !seen.path.has(path)) errors.push(`Numbered page absent from TOC: ${path}`)
  }
  return errors
}

/** Sidebar groups in TOC order: one { text: section, items } per `section` value. */
export function getHandbookSections(entries = toc) {
  const groups = new Map()
  for (const entry of entries) {
    if (!groups.has(entry.section)) groups.set(entry.section, [])
    groups.get(entry.section).push(entry)
  }
  return [...groups].map(([text, items]) => ({ text, items: getHandbookItems(items) }))
}
