# Editing the handbook

The handbook explains how Sapiens First works. Write for someone who wants to participate and may be encountering the organization for the first time.

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

Use the existing six folders: `guide`, `strategy`, `organization`, `work`, `learning`, and `practices`. Put a section overview in `index.md`. Use short, lowercase, hyphenated filenames for individual topics.

Create a page when a reader would reasonably look for that topic on its own. Keep related details together; avoid a deep folder tree or a separate file for every paragraph. Store shared images in `docs/public/`.

Add each new page to the sidebar in `docs/.vitepress/config.mts` and link it from the relevant overview or reading path. Use the page's H1 as its sidebar label, and use the same words wherever you link to it; a section's own overview page is listed as **Overview**. If you add or rename a section, update its card on the homepage too (`docs/index.md`). Use relative `.md` links in Markdown so readers can navigate the repository as well as the site. Keep the `/Handbook/` base path in the site configuration rather than hard-coding it into content links.

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

## Check before publishing

Run `npm run docs:build`. VitePress checks Markdown compilation and internal page links. Also check new fragment links, navigation entries, expandable sections, and the page at narrow widths when browser testing is available.

Do not commit `node_modules`, `.vitepress/cache`, or `.vitepress/dist`. A push to `main` triggers the existing GitHub Pages workflow; a local build does not publish anything.
