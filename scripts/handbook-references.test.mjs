import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { resolveReferences } from './handbook-references.mjs';

function fixture(t, body) {
  const root = mkdtempSync(path.join(tmpdir(), 'handbook-reference-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(path.join(root, 'reference'));
  const source = path.join(root, 'reference', 'source.md');
  const write = value => writeFileSync(source, `---\ntitle: "Canonical source"\nstatus: draft\nlast_updated: 2026-10-02\ncanonical: /reference/source\n---\n${value}`);
  write(body);
  return { root, write };
}
const directive = '<!-- handbook:include reference/source.md#pilot -->';

test('source edits propagate to two hosts, with attribution and source-relative URLs', t => {
  const { root, write } = fixture(t, '<!-- handbook:block pilot -->\n## Shared\n[Link](../guide/page.md#section) ![Image](./asset.png)\n<!-- /handbook:block -->\nExcluded');
  for (const host of ['dna/page.md', 'work/nested/page.md']) {
    const result = resolveReferences(directive, host, root);
    assert.match(result, /Canonical source.*\/reference\/source/);
    assert.match(result, /Status: draft · Updated: 2026-10-02/);
    assert.ok(!result.includes('Excluded'));
    assert.ok(result.includes(host === 'dna/page.md' ? '../guide/page.md#section' : '../../guide/page.md#section'));
    assert.ok(result.includes(host === 'dna/page.md' ? '../reference/asset.png' : '../../reference/asset.png'));
  }
  write('<!-- handbook:block pilot -->\nChanged source\n<!-- /handbook:block -->');
  for (const host of ['dna/page.md', 'work/page.md']) assert.match(resolveReferences(directive, host, root), /Changed source/);
});

test('headings and local links are namespaced per inclusion, fences stay literal', t => {
  const { root } = fixture(t, '<!-- handbook:block pilot -->\n## Shared\n## Shared\n## Explicit {#custom}\n[Jump](#custom)\n```md\n## Literal\n<!-- handbook:include missing.md#bad -->\n```\n<!-- /handbook:block -->');
  const result = resolveReferences(`${directive}\n${directive}`, 'host.md', root);
  const ids = [...result.matchAll(/\{#([^}]+)\}/g)].map(match => match[1]);
  assert.equal(ids.length, 6);
  assert.equal(new Set(ids).size, 6);
  assert.match(result, /\[Jump\]\(#ref-reference-source-md-pilot-1-custom\)/);
  assert.match(result, /```md\n## Literal\n<!-- handbook:include missing.md#bad -->\n```/);
  assert.equal(resolveReferences(`~~~md\n${directive}\n~~~`, 'host.md', root), `~~~md\n${directive}\n~~~`);
});

test('missing, ambiguous and nested blocks or includes fail clearly', t => {
  const { root, write } = fixture(t, 'No blocks');
  assert.throws(() => resolveReferences(directive, 'host.md', root), /Missing block/);
  write('<!-- handbook:block pilot -->\na\n<!-- /handbook:block -->\n<!-- handbook:block pilot -->\nb\n<!-- /handbook:block -->');
  assert.throws(() => resolveReferences(directive, 'host.md', root), /Duplicate block/);
  write(`<!-- handbook:block pilot -->\n${directive}\n<!-- /handbook:block -->`);
  assert.throws(() => resolveReferences(directive, 'host.md', root), /Nested include/);
  write('<!-- handbook:block pilot -->\n<!-- handbook:block inner -->\n<!-- /handbook:block -->');
  assert.throws(() => resolveReferences(directive, 'host.md', root), /Nested block/);
  assert.throws(() => resolveReferences('<!-- handbook:include ../outside.md#pilot -->', 'host.md', root), /outside docs/);
});

test('similar headings and host IDs cannot collide with included anchors', t => {
  const { root } = fixture(t, '<!-- handbook:block pilot -->\n## Shared\n## Shared\n## Shared-1\n[Second](#shared-1) [Third](#shared-1-1)\n<!-- /handbook:block -->');
  const host = `## Existing {#ref-reference-source-md-pilot-1-shared}\n${directive}\n${directive}`;
  const result = resolveReferences(host, 'host.md', root);
  const ids = [...result.matchAll(/\{#([^}]+)\}/g)].map(match => match[1]);
  assert.equal(ids.length, 7);
  assert.equal(new Set(ids).size, 7);
  assert.ok(result.includes(`[Second](#${ids[2]}) [Third](#${ids[3]})`));
});
