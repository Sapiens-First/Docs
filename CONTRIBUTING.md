# Editing the handbook

The handbook explains how Sapiens First works. Write for someone who wants to participate and may be encountering the organization for the first time.

Read the [style guide](STYLE-GUIDE.md) before you write. It covers naming, framing, the rule of three, bold lead-ins, sentence rhythm, and diagrams. This file covers the mechanics.

## Put information in the right place

| Information | Home |
| --- | --- |
| Shared definitions, protocols, expectations, and repeatable guides | Handbook under `docs/` |
| Current roles, owners, governance, priorities, and work | Atlas or the live records linked from it |
| Current policy recommendations and campaign materials | Relevant Sapiens First website pages, linked from the handbook |
| Historical source material and original meeting notes | `archive/sources/`, outside the published site |
| Repository setup and contributor guidance | Root README and this file |

A handbook page may explain what a project record contains. It should link to the current records rather than maintaining a second project register. Examples should be clearly illustrative.

## Organize pages by topic

The handbook still lives in six folders — `guide`, `strategy`, `organization`, `work`, `practices`, `learning` — and their names and URLs don't change. But the **sidebar** no longer groups pages by folder or by the old six verbs (Join, Learn, Organize, Build, Act, Grow). It groups pages by each page's frontmatter `section` (Start here · About Sapiens First · People and organization · Running the work · Field guides · Reference), so a folder's pages can land in more than one sidebar group. See the folder-to-section mapping and the fixed section order in [AI-READABILITY-PLAN.md](AI-READABILITY-PLAN.md). The six verbs survive only as the conceptual journey on the homepage. Put a section overview in each folder's `index.md`. Use short, lowercase, hyphenated filenames for individual topics.

Create a page when a reader would reasonably look for that topic on its own. Keep related details together; avoid a deep folder tree or a separate file for every paragraph. Store shared images in `docs/public/`.

Add each new page to the sidebar in `docs/.vitepress/config.mts`, under the group matching its `section`, and link it from the relevant overview or from [`/find`](docs/find.md). A page's **H1 is a self-describing title** (meaningful with no other context, e.g. "How Sapiens First manages work"), while its **sidebar label stays short** (e.g. "How we manage work") — see [Names](STYLE-GUIDE.md#names) in the style guide. Use the H1 or the sidebar label consistently wherever you link to it; `scripts/check-rewrite.py` checks that list-style link text (as in Related blocks and overviews) matches one of the two. Never use "Overview" alone as a sidebar label. If you add or rename a section, update the homepage's routing too (`docs/index.md`). Use relative `.md` links in Markdown so readers can navigate the repository as well as the site. Keep the `/docs/` base path in the site configuration rather than hard-coding it into content links.

## Write with cascading detail

Start with a short explanation and the action or idea the reader needs. Put essential expectations in ordinary text. Use the handbook's labelled blocks for optional detail, worked examples, and explanations for people holding responsibilities.

```md
---
description: One sentence saying what the page helps with.
---

# Topic

A short introduction that explains why this matters.

## Get started

The practical steps or shared expectations.

::: roles Preparing for the first meeting
Additional context for people doing the work.
:::

::: related
- [Relevant guide](relative-page.md) — One line on what the reader will find there.
:::
```

Every page starts with a `description:` in its frontmatter. It feeds search results and link previews, and it is the line to reuse when you list the page in a section overview or a Related block. Add `audience: Fellows` (or similar) only when a whole page is for one group.

Each block gets a fixed label, so readers can tell what kind of text it holds. Use only these:

| Block | Label | Use for |
| --- | --- | --- |
| `::: roles` | For role holders | Extra detail for Fellows, organizers, staff, and other role holders |
| `::: example` | Example | A worked example. Don't use `>` blockquotes for examples; keep those for real quotations |
| `::: background` | Background | History, sources, and further reading |
| `::: optional` | Optional | An extra tool or technique the reader can skip |
| `::: proposal` | Proposal | See below |
| `::: clarify` | To clarify | See below |

Add a title after the block name (`::: background Holacracy and distributed authority`) to make it collapsible. Without a title, it stays open. Keep essential expectations out of collapsed blocks.

End a page with one `::: related` list rather than inline "Read more" links. Use each page's sidebar title as the link text, and follow it with a dash and the page's description.

Use direct, welcoming language and concrete examples. Define unfamiliar terms where they first appear, and add new organizational terms to the [glossary](docs/guide/glossary.md). Prefer a visible definition or a collapsible block to hover-only explanations. Keep links next to the topic they support.

## Distinguish practice from proposals

Preserve established expectations from the source material. Label new governance rules, schemas, evaluation processes, and other unapproved organizational requirements as proposals.

```md
::: proposal Role-specific development rubrics
Explain the proposed practice and what still needs to be settled.
:::
```

Proposal and To clarify blocks have a dashed border and a coloured label, so they can't be mistaken for adopted practice. A title makes a proposal collapsible; the label stays visible either way.

Use `::: clarify` for a specific unresolved decision. Explain what people should do in the meantime. An editorial rewrite does not itself adopt a policy or change decision rights.

Once a proposal is adopted, update its wording and the relevant Atlas records through the organization's agreed decision process. Keep actual assignments and targets in the live records.

## Preserve useful context

Check the [source map](archive/README.md) before removing a topic. Historical schedules and meeting notes belong in the source archive, not the general onboarding path. Do not silently edit the Fellowship agreement while editing adjacent prose.

When adding a factual claim or external resource, verify it and link to the relevant source. Distinguish organizational beliefs, strategic assumptions, and research findings.

## Metadata and machine-readable files

Every content page (everything under `docs/` except `docs/index.md`) carries frontmatter that both the site and outside tools read:

```yaml
---
title: How Sapiens First uses metrics   # identical to the page's H1 text
description: One sentence saying what the page covers.
section: Running the work                # one of the six sections below
status: adopted                          # one of the five statuses below
last_updated: 2026-09-27                 # YYYY-MM-DD; quote it if you want it to stay a plain string
canonical: /learning/metrics             # site path, no base, no .md; index pages end in /
tags: [metrics, planning]                # optional
owner: …                                 # optional; only if the source names one — never invent
---
```

**Sections** (fixed list, used to group the sidebar and the generated `llms.txt`): `Start here` · `About Sapiens First` · `People and organization` · `Running the work` · `Field guides` · `Reference`.

**Status** (fixed list, rendered as a badge near the top of the page): `adopted` · `proposal` · `draft` · `experimental` · `reference`. A page that's mostly current practice but contains `::: proposal` blocks is still `adopted`; say which parts are proposals in `## In brief`. Proposal, draft, and experimental pages also get a short callout under the eyebrow ("Proposal: this describes a possible future practice…"); adopted pages get a one-line note instead.

Note that YAML parses an unquoted `2026-09-27` as a date value, not a string — this handbook's build code accepts both forms, but if you want to be certain `last_updated` stays a plain string, quote it (`last_updated: "2026-09-27"`).

**The lede.** The `>` blockquote directly under the H1 is the page's one-sentence summary and is styled without a quote bar; every other blockquote is a real quotation and keeps the usual styling.

**`::: source`** is the "Source of truth" callout (label rendered automatically): use it wherever the handbook explains a concept but Atlas holds the current state, for example roles, projects, or metric values. It renders as a solid, calm block — deliberately distinct from the dashed `::: proposal` / `::: clarify` blocks, so a reader can't mistake an open question for settled fact.

**Generated files.** At build time (`npm run docs:build`), a `buildEnd` hook (`docs/.vitepress/llms.ts`) writes, into `docs/.vitepress/dist`:

- `llms.txt` — an index of every page, grouped by section, for LLMs and other tools that support the [llms.txt convention](https://llmstxt.org).
- `llms-full.md` / `llms-full.txt` — the entire handbook as one Markdown file, headings demoted so the whole document has one hierarchy, `::: kind` blocks spelled out as bold labels, and relative links rewritten to absolute URLs.
- A raw Markdown twin of every page next to its HTML (e.g. `dist/learning/metrics.md` beside `metrics.html`) — these don't conflict with VitePress's clean URLs, which serve `metrics.html` for `/learning/metrics`.

Don't hand-edit anything under `.vitepress/dist`; it's regenerated on every build.

## Check before publishing

Diagrams go in fenced `mermaid` blocks; see the style guide for when to use one.

Run `npm run docs:build`. VitePress checks Markdown compilation and internal page links. Also check new fragment links, navigation entries, expandable sections, and the page at narrow widths when browser testing is available.

Run `npm run docs:check` (or `node scripts/validate-docs.mjs --warn-only` while content is still mid-migration) to check frontmatter completeness, the status and section vocabularies, `last_updated` formatting, duplicate or mismatched `canonical` paths, a single matching H1, and broken relative `.md` links or `#fragments`. It also warns (without failing) when a page has no `::: related` block, no `## In brief`, or no one-sentence lede under the H1. CI runs this in strict mode before every build; the local run can use `--warn-only` since content may be in flux.

Do not commit `node_modules`, `.vitepress/cache`, or `.vitepress/dist`. A push to `main` triggers the existing GitHub Pages workflow; a local build does not publish anything.
