#!/usr/bin/env python3
"""Guardrails for the handbook readability rewrite (see REWRITE-PLAN.md).

    python3 scripts/check-rewrite.py            # compare against HEAD
    python3 scripts/check-rewrite.py main       # compare against another git ref
    python3 scripts/check-rewrite.py --lint docs/work/projects.md

Checks:
  1. Protected text is unchanged: every ::: proposal and ::: clarify block, the
     whole Fellowship agreement, and the template tables and code blocks.
  2. Every `page.md#fragment` link points at a heading that exists.
  3. In list-style links (`- [Text](page.md) — description`, as in Related
     blocks and overviews), Text is the target page's H1 or sidebar label.
  4. (--lint) Style hints: long sentences and phrases from the style guide's
     cut list. These are prompts to look, not errors.
Exits 1 if check 1, 2 or 3 fails.
"""
import re
import subprocess
import sys
import unicodedata
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / 'docs'
PROTECTED_BLOCK = re.compile(r'^::: ?(proposal|clarify)\b')
WHOLE_FILES = {'docs/guide/agreement.md'}
TEMPLATE_FILE = 'docs/work/templates.md'
CUT_LIST = [
    'in order to', 'it is important to', 'important to note', 'make a decision',
    'provide support', 'is able to', 'has the ability to', 'at this point in time',
    'utilize', 'facilitate', 'a number of', 'basically', 'really', 'very ', 'just ',
]


def git_show(ref, rel):
    r = subprocess.run(['git', 'show', f'{ref}:{rel}'], cwd=ROOT, capture_output=True, text=True)
    return r.stdout if r.returncode == 0 else None


def protected_blocks(text):
    blocks, cur = [], None
    for line in text.splitlines():
        if cur is None and PROTECTED_BLOCK.match(line):
            cur = [line]
        elif cur is not None:
            cur.append(line)
            if line.strip() == ':::':
                blocks.append('\n'.join(cur))
                cur = None
    return blocks


def template_lines(text):
    out, fence = [], False
    for line in text.splitlines():
        if line.startswith('```'):
            fence = not fence
            continue
        if fence or line.startswith('|'):
            out.append(line)
    return out


def slugify(s):
    # VitePress's default heading slug
    s = unicodedata.normalize('NFKD', s)
    s = re.sub(r'[̀-ͯ]', '', s)
    s = re.sub(r'[\s~`!@#$%^&*()\-_+=\[\]{}|\\;:"\'“”‘’<>,.?/]+', '-', s)
    s = re.sub(r'-{2,}', '-', s).strip('-')
    s = re.sub(r'^(\d)', r'_\1', s)
    return s.lower()


def anchors(path):
    ids = set()
    for line in path.read_text().splitlines():
        m = re.match(r'^#{1,6}\s+(.*?)\s*$', line)
        if not m:
            continue
        title = m.group(1)
        custom = re.search(r'\{#([\w-]+)\}\s*$', title)
        if custom:
            ids.add(custom.group(1))
            title = title[:custom.start()]
        title = re.sub(r'[*_`]|\[([^\]]*)\]\([^)]*\)', lambda x: x.group(1) or '', title)
        ids.add(slugify(title))
    return ids


def check_protected(ref):
    errors = []
    for path in sorted(DOCS.rglob('*.md')):
        rel = str(path.relative_to(ROOT))
        old = git_show(ref, rel)
        if old is None:
            continue
        new = path.read_text()
        if rel in WHOLE_FILES and old != new:
            errors.append(f'{rel}: this file must not change')
        if Counter(protected_blocks(old)) != Counter(protected_blocks(new)):
            gone = set(protected_blocks(old)) - set(protected_blocks(new))
            for b in gone:
                errors.append(f'{rel}: Proposal/To clarify block changed or removed: "{b.splitlines()[0]}"')
        if rel == TEMPLATE_FILE and template_lines(old) != template_lines(new):
            errors.append(f'{rel}: template tables or code blocks changed')
    return errors


def check_fragments():
    errors = []
    for path in sorted(DOCS.rglob('*.md')):
        text = re.sub(r'```.*?```', '', path.read_text(), flags=re.S)
        for target, frag in re.findall(r'\]\(([^)#\s]*\.md)?#([^)\s]+)\)', text):
            dest = (path.parent / target).resolve() if target else path
            if not dest.exists():
                continue  # the VitePress build reports missing pages
            if frag not in anchors(dest):
                errors.append(f'{path.relative_to(ROOT)}: broken link to {target or "this page"}#{frag}')
    return errors


def page_titles(path):
    titles = set()
    m = re.search(r'^# (.+)$', path.read_text(), flags=re.M)
    if m:
        titles.add(m.group(1).strip())
    rel = '/' + str(path.relative_to(DOCS)).replace('index.md', '').removesuffix('.md')
    config = (DOCS / '.vitepress' / 'config.mts').read_text()
    for text, link in re.findall(r"text: '([^']+)', link: '([^']+)'", config):
        if link == rel and text != 'Overview':
            titles.add(text)
    return titles


def check_link_text():
    errors = []
    for path in sorted(DOCS.rglob('*.md')):
        if str(path.relative_to(ROOT)) in WHOLE_FILES:
            continue  # protected; its old link text is accepted
        for text, target in re.findall(r'^- \[([^\]]+)\]\(([^)#\s]+\.md)\) — ', path.read_text(), flags=re.M):
            dest = (path.parent / target).resolve()
            if dest.exists() and text not in page_titles(dest):
                want = ' or '.join(sorted(page_titles(dest)))
                errors.append(f'{path.relative_to(ROOT)}: link text "{text}" should be "{want}"')
    return errors


def lint(files):
    for f in files:
        text = Path(f).read_text()
        body = re.sub(r'^---.*?---', '', text, flags=re.S)
        body = re.sub(r'```.*?```', '', body, flags=re.S)
        print(f'\n== {f} ({len(body.split())} words)')
        for n, line in enumerate(text.splitlines(), 1):
            if line.startswith(('|', '#', ':::', '```')):
                continue
            plain = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', line)
            for sent in re.split(r'(?<=[.!?])\s+', plain):
                if len(sent.split()) > 25:
                    print(f'  line {n}: {len(sent.split())}-word sentence: {sent[:80]}…')
            for phrase in CUT_LIST:
                if phrase in plain.lower():
                    print(f'  line {n}: cut-list phrase "{phrase.strip()}"')


def main():
    args = sys.argv[1:]
    if args[:1] == ['--lint']:
        lint(args[1:] or sorted(str(p) for p in DOCS.rglob('*.md')))
        return
    ref = args[0] if args else 'HEAD'
    errors = check_protected(ref) + check_fragments() + check_link_text()
    for e in errors:
        print('FAIL', e)
    print(f'{len(errors)} problem(s) found (protected text compared with {ref}).')
    sys.exit(1 if errors else 0)


if __name__ == '__main__':
    main()
