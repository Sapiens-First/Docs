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

- [x] A. Content, Start here + About + People — done 666f986. Glossary rebuilt alphabetically. agreement.md untouched because check-rewrite protects the whole file; wave E loosens it to protect the body only, then adds frontmatter. practices/index still links to the mission page as "The mission"; fix in wave E.
- [x] B. Content, Running the work (work/*, learning/*) — done 23922a8, 662cc38. Status calls: weekly-work = proposal, atlas-and-ai = proposal, reviewing-metrics = adopted (its cadence is only suggested). H1s left short: Weekly planning, Meetings and updates, Strategic hypotheses, Atlas and AI; wave E should make them self-describing. Link texts in guide/index and strategy/index still use the old H1s; fix after A finishes.
- [x] C. Content, Field guides (practices/*) — done f8958bb, all adopted
- [x] D. Infrastructure: status badge, last-updated from frontmatter, lede style, llms.txt / llms-full.md / llms-full.txt, sitemap, robots.txt, validation script + CI — done. Note: `last_updated` arrives as a JS `Date` server-side (YAML parses unquoted `YYYY-MM-DD`) and as an ISO string client-side; both `transformPageData` and `PageMeta.vue` handle either form.
- [x] E. Navigation: sidebar regrouped by section, `/find` page, homepage routing, STYLE-GUIDE / CONTRIBUTING updates — done 4a7950c, 4d0e3e3, bf127ef, 9e5b9f8, b0e3245
- [ ] F. QA: build, links, mobile/desktop check, llms-full review, LLM acceptance questions
- [~] Published to main: increment 1 (content A–C + infra D) pushed 106bddf on 2026-09-27

Log:

- 2026-09-27: plan written; `::: source` container added.
- 2026-09-27: wave 1 dispatched in parallel (Sonnet agents): A, B, C (content, disjoint files, no builds) and D (infra, sole builder). Wave 2 = E (navigation), after D finishes because it edits config.mts. Then F, then publish. If a session dies mid-wave, check `git log` for each workstream's commits and run `python3 scripts/check-rewrite.py d290205` and `npm run docs:check`.
- 2026-09-27/28: D landed. Status badge + callout and eyebrow section/last-updated in `PageMeta.vue`; `h1 + blockquote` lede style and `.sf-source` block in `theme/style.css`; `transformPageData`/`transformHead`/`sitemap`/`buildEnd` in `config.mts`; `docs/.vitepress/llms.ts` generates `llms.txt`, `llms-full.md`, `llms-full.txt`, and a raw-Markdown twin of every page; `docs/public/robots.txt` added; `scripts/validate-docs.mjs` (+ `npm run docs:check`, wired into `deploy.yml` before the build step, strict in CI, `--warn-only` for local mid-migration runs). `npm run docs:build` and `node scripts/validate-docs.mjs --warn-only` both run clean; strict `docs:check` currently fails only on pages content waves A/B/C haven't finished migrating (missing `title`, mostly `guide/*` and `organization/*` and `strategy/index.md`) — expected until those waves finish. Semantic HTML checked on a built page: one `<h1>`, one `<main>`, Related block renders as `<nav>`.
- 2026-09-27: after wave 1, added the missing `title:` fields, gave the agreement frontmatter and a summary (check-rewrite now protects only the agreement text), and fixed the validator's summary detection. docs:check 0 errors; build OK. Published increment 1. Wave 2 dispatched: E (navigation) and an acceptance-test agent reading llms-full.md.
- 2026-09-27: LLM acceptance test on llms-full.md: 11 pass, 4 weak, 1 fail. Queued fixes (wave F, after E):
  1. FAIL: no page says how a new project is proposed or approved. Add a `::: clarify` to work/projects (a policy decision is needed; don't invent one).
  2. Objective / key result vs input / output / outcome: reconcile work/index with learning/metrics in one sentence.
  3. Authority over a project: add a declarative default to organization/decisions, only from what's already stated (owner recorded in Atlas; Decide/Consult/Approve in the scope).
  4. "Chapter": on practices/starting-a-circle, say to start as a circle; chapter criteria are not adopted yet.
  5. strategy/index: add an explicit "Our theory of change" heading that states the causal chain already on the page.
  6. llms.ts: handle every `::: kind` (the Grow pages use `::: tip` and `::: info`, which were left unclosed); stop demoting headings (pages are `# Title`, their sections stay `##`).
  7. guide/index says collapsible sections exist; fine on the site, but add a note in llms-full that collapsibles are flattened.
- 2026-09-27/28: E (navigation) landed — 4a7950c, 4d0e3e3, bf127ef, 9e5b9f8, b0e3245. Sidebar in `config.mts` regrouped by frontmatter `section` (Start here / About Sapiens First / People and organization / Running the work / Field guides / Reference); Glossary deliberately listed under both Start here and Reference. Nav gets a "Find anything" item and `activeMatch` now covers `/find`. Added `docs/find.md` (~30 questions, each a single `→ [Page](...)` or `→ [Atlas](...)` line, verified against real headings). Homepage (`docs/index.md`): hero now Start here / Find anything / Open Atlas; the six verb feature cards replaced with subject routing (New here? / Doing the work? / Organizing locally? / Looking for current information? -> Atlas); the verb journey kept as a closing Markdown section with the required "navigation is organized by subject" sentence; HomePaths.vue untouched (still driven by `paths:` frontmatter). Renamed 8 more titles to be self-describing out of context (fellowship, roles-and-circles, glossary, resources, weekly-work, meetings-and-updates, strategic-hypotheses, atlas-and-ai) while keeping their sidebar labels short and unchanged, which meant no Related-link-text fixes were needed for those 8; separately fixed Related-link text in 5 files where the sidebar regroup itself renamed a label (Participation -> Ways to participate, Conversations -> Organizing conversations, Local circles -> Starting a local circle, Training -> Training organizers). Added glossary's missing `## In brief` and learning/index's missing `::: related`, and linked guide/index to /find in three places. Updated STYLE-GUIDE.md (Names section, fractal table) and CONTRIBUTING.md/README.md so they describe section-based sidebar grouping instead of the old six-verb one. `python3 scripts/check-rewrite.py d290205`: 0 problems. `npm run docs:check`: 30 pages, 0 errors, 0 warnings. `npm run docs:build`: succeeds; `dist/llms.txt` and `dist/sitemap.xml` both list `/find`; every sidebar link resolves to a built file.
- 2026-09-28: Wave F acceptance-test fixes 1–5 landed. (1) work/projects.md: new "Propose a new project" section (write a scope, check decision rights, discuss with the relevant circle/role holder, record in Atlas) plus a `::: clarify` that who approves a project and what a proposal must include isn't defined; linked from find.md. (2) Reconciled objective/output/key result (work/index.md) with input/output/outcome (learning/metrics.md) with a cross-referencing sentence on each page and matching In brief bullets; updated glossary entries for Objective, Key result, Metric, and Output and outcome to use consistent language. (3) organization/decisions.md and work/projects.md: added the declarative default that a project's owner (named in its scope, recorded in Atlas) holds authority, exercised via Decide/Consult/Approve. (4) practices/starting-a-circle.md: new In brief bullet — every local group starts as a circle, chapter is a later stage without adopted criteria; added a find.md entry routing "start a chapter" here. (5) strategy/index.md: new "## Our theory of change" section (act/recruit/train → community/empowerment/advocacy → policy change) since `#act-recruit-train` is linked from elsewhere and couldn't be renamed; find.md's theory-of-change question now points to it. `npm run docs:check`: 0 errors. `python3 scripts/check-rewrite.py d290205`: 0 problems.
- 2026-09-28: llms.ts fix (fix 6) done. Workstream E done. Increment 2 published (2c658b8: sidebar, /find, homepage, titles). Wave F dispatched: F1 = content fixes 1–5 (no build); F2 = read-only browser QA at 390/1440 px plus a live-deploy check. Next: apply F2's defects, rebuild, re-run the acceptance test, publish increment 3.
- 2026-09-28: F1 fixes reviewed; project-authority sentences reworded to state only what the scope template defines (no invented default). F2 browser QA: 62 loads at 390/1440 px, 0 errors, 0 overflow, badges/dates/diagrams OK, deploy confirmed live. Its one finding (5 of 10 key destinations were 2 clicks from home) fixed with a "Go straight to" link section on the homepage. Increment 3 published. Next: re-run the LLM acceptance test on the fresh llms-full.md.
