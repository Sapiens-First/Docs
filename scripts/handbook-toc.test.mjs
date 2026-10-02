import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { getHandbookItems, validateHandbookToc } from './handbook-toc.mjs'

const first = { id: 'intro', number: '0', title: '0 Introduction', path: 'introduction/index.md', section: 'Introduction' }
const second = { id: 'welcome', number: '0.1', title: '0.1 Welcome', path: 'introduction/welcome.md', section: 'Introduction' }

function fixture(t, entries = [first, second]) {
  const root = mkdtempSync(join(tmpdir(), 'handbook-toc-'))
  t.after(() => rmSync(root, { recursive: true, force: true }))
  for (const entry of entries) {
    const path = join(root, entry.path)
    mkdirSync(dirname(path), { recursive: true })
    writeFileSync(path, `---\ntitle: "${entry.title}"\nsection: ${entry.section}\nhandbook_id: ${entry.id}\nhandbook_number: "${entry.number}"\n---\n\n# ${entry.title}\n`)
  }
  return root
}

test('current handbook registry matches all numbered pages', () => {
  assert.deepEqual(validateHandbookToc(), [])
  assert.equal(getHandbookItems().length, 20)
})

test('navigation follows registry order and handles landing paths', () => {
  assert.deepEqual(getHandbookItems([second, first]), [
    { text: second.title, link: '/introduction/welcome' },
    { text: first.title, link: '/introduction/' },
  ])
})

test('complete fixture validates and omitted numbered pages fail', t => {
  const root = fixture(t)
  assert.deepEqual(validateHandbookToc(root, [first, second]), [])
  assert.match(validateHandbookToc(root, [first]).join('\n'), /Numbered page absent from TOC: introduction\/welcome.md/)
})

test('duplicate identities, numbers and paths fail', t => {
  const errors = validateHandbookToc(fixture(t), [first, first, second]).join('\n')
  for (const field of ['id', 'number', 'path']) assert.match(errors, new RegExp(`Duplicate TOC ${field}:`))
})

test('missing file and required fields fail', t => {
  const errors = validateHandbookToc(fixture(t), [first, { ...second, path: 'missing.md', section: '' }]).join('\n')
  assert.match(errors, /TOC page missing: missing.md/)
  assert.match(errors, /TOC entry missing section/)
})

test('metadata and heading mismatches fail', t => {
  const root = fixture(t)
  const changed = { ...second, id: 'wrong', number: '7', title: '7 Wrong', section: 'DNA' }
  const errors = validateHandbookToc(root, [first, changed]).join('\n')
  for (const field of ['id', 'number', 'title', 'section']) assert.match(errors, new RegExp(`TOC ${field} differs`))
  assert.match(errors, /TOC title differs from H1/)
})

test('heading drift fails even when frontmatter matches', t => {
  const root = fixture(t, [first])
  const path = join(root, first.path)
  writeFileSync(path, `---\ntitle: "${first.title}"\nsection: ${first.section}\nhandbook_id: ${first.id}\nhandbook_number: "${first.number}"\n---\n# Wrong\n`)
  assert.match(validateHandbookToc(root, [first]).join('\n'), /TOC title differs from H1/)
})
