# Human- and AI-readable handbook: plan and progress

Started 2026-09-27 on branch `docs/unified-handbook`. Publishing = merge this branch into `main` and push (the Pages workflow deploys `main`). The source brief is the "Sapiens First Docs: Human-Readable + AI-Readable Implementation Plan", with 20 priorities. Its essentials are condensed below so a fresh session can resume from this file alone.

## The brief in one screen

1. Consistent page anatomy: H1, a one-sentence summary, `## In brief` (3–5 bullets), `## When to use this`, main content, `## Related`.
2. Globally meaningful titles (no "Overview", "Structure", "The work").
3. Sidebar grouped by literal subject categories; Join → Learn → Organize → Build → Act → Grow journey kept on the homepage only.
4. `/find` "Find anything in Sapiens First" page routing 15–30 common questions to their canonical page.
5. Frontmatter on every page: title, description, section, status, last_updated (+ optional owner, canonical, tags, related).
6. Status shown near the top of every page (badge, proposal warning).
7. "Last updated" rendered from frontmatter `last_updated`, not git.
8. Important facts as short declarative sentences (for example "Fellows normally commit 5–10 hours per week.").
9. Source-of-truth callouts: the handbook explains; Atlas holds current state.
10. `/llms.txt` index, generated at build.
11. `/llms-full.md` complete handbook in one file, generated at build. 12. `/llms-full.txt` optional.
13. `sitemap.xml` + `robots.txt`.
14. Canonical glossary.
15. Homepage: what is this, where to start, where to find things; Start here / Find anything / Open Atlas.
16. Related sections (2–5 links) and first-mention cross-links.
17. Validation script in CI (frontmatter, status vocabulary, duplicate canonicals, broken links; warn only on missing Related).
18. Essential content stays as plain Markdown text. 19. Semantic HTML, one H1, clean heading hierarchy. 20. No custom search or chatbot.

## Decisions (binding for all work)

**Frontmatter schema**

```yaml
---
title: How Sapiens First uses metrics   # same text as the H1
description: One sentence saying what the page covers.
section: Running the work                # controlled list below
status: adopted                          # controlled list below
last_updated: 2026-09-27
canonical: /learning/metrics             # URL path without base or .md; index pages end in /
tags: [metrics, planning]                # optional
owner: …                                 # optional; only if the source names one. Never invent.
---
```

Keep existing keys such as `audience`, `outline`, and `readingTime`.

**Sections:** `Start here` · `About Sapiens First` · `People and organization` · `Running the work` · `Field guides` · `Reference`

| Page | Section |
| --- | --- |
| guide/index, guide/getting-started, find | Start here |
| strategy/index, strategy/resources, organization/values | About Sapiens First |
| organization/index, participation, roles-and-circles, decisions, guide/fellowship, guide/agreement | People and organization |
| work/index, projects, weekly-work, meetings-and-updates, learning/index, metrics, strategic-hypotheses, reviewing-metrics, feedback | Running the work |
| practices/* | Field guides |
| guide/glossary, work/templates, learning/atlas-and-ai | Reference |

**Status:** `adopted` · `proposal` · `draft` · `experimental` · `reference`. A page that is mostly current practice but contains `::: proposal` blocks is `adopted`, and its In brief says which parts are proposals. Glossary, templates, reading list, and find are `reference`.

**URLs do not change.** Titles change in the H1 and the frontmatter; sidebar labels stay short.

**Page anatomy in Markdown:**

```markdown
# How Sapiens First uses metrics

> How Sapiens First defines, records, and uses organizational metrics.

## In brief
- …

## When to use this
Read this page when:
- …

…existing content…

::: related
- [Projects](../work/projects.md) — description
:::
```

The `>` line directly under the H1 is the summary and is styled as a lede; that is the only blockquote use besides real quotations. Related uses the existing `::: related` block (it renders as `<nav>`, and its heading is "Related").

**Source of truth:** use the `::: source` block (label "Source of truth"), for example: "Atlas holds current role holders. This page explains how roles work."

**Protected text:** `::: proposal` and `::: clarify` blocks, the whole Fellowship agreement, and the template tables and code blocks keep their exact wording (`scripts/check-rewrite.py` enforces this). Don't change policy meaning.

**STYLE-GUIDE.md conflicts:** its "H1 of three words or fewer" rule and "hook / three things / next step" anatomy are superseded by this plan for H1s and page tops. Keep its tone and wording guidance.

## Progress

Workstreams (update the status as each lands):

- [ ] A. Content, Start here + About + People (guide/*, strategy/*, organization/*), including glossary expansion
- [ ] B. Content, Running the work (work/*, learning/*)
- [ ] C. Content, Field guides (practices/*)
- [ ] D. Infrastructure: status badge, last-updated from frontmatter, lede style, llms.txt / llms-full.md / llms-full.txt, sitemap, robots.txt, validation script + CI
- [ ] E. Navigation: sidebar regrouped by section, `/find` page, homepage routing, STYLE-GUIDE / CONTRIBUTING updates
- [ ] F. QA: build, links, mobile/desktop check, llms-full review, LLM acceptance questions
- [ ] Published to main

Log:

- 2026-09-27: plan written; `::: source` container added.
