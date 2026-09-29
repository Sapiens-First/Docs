# Handbook design review — working notes

Started 2026-09-27. Scope: design, layout, navigation, information presentation (not content — another agent owns content).
Not built into the site (lives at repo root, outside `docs/`).

## Progress log

- [x] Read config.mts, theme/style.css, theme/index.ts, README, CONTRIBUTING, PROGRESS
- [x] Read homepage + section index pages
- [x] Sample long content pages (structure, heading depth, details blocks, tables)
- [x] Analyse link structure (inbound/outbound per page, orphans, "read more")
- [x] Build + render check (Playwright screenshots at 1440 / 390 px)
- [x] Write prioritized list (bottom of file). Review complete; nothing in docs/ was changed.

## Raw observations

### Theme / chrome (from style.css)
- H1 uppercase Barlow Condensed at up to 3.6rem, line-height 0.95; H2 uppercase 2.1rem with 2px ink rule above; H3 1.6rem. All-caps display headings on every reading page — long all-caps titles are slower to read and scan.
- Body 17.5px / 1.75 leading. Default VitePress content width (~688px) → ok measure.
- Sidebar: 6 groups, 5 collapsed by default. Group labels uppercase 12px.
- Callouts get 2px border + hard shadow; details blocks share the same heavy treatment → many heavy boxes per page compete.
- Tables: black header row, zebra; overflow-x on mobile only < 640px.
- Dark mode exists; main site is light-only.

### IA / navigation (from reading pages + config)
- Homepage has 3 cards (Learn→strategy, Organize→organization, Act→work) but sidebar has 6 sections; Learning and Practical guides unreachable from home. "Learn" card ≠ "How we learn and improve" section → naming collision.
- The best wayfinding device (role-based "If you are… / Start here" table) is buried on /guide/, not on home.
- Sidebar item labels ≠ page H1s: "Mission and approach"→"How we make change", "Work and objectives"→"How we get things done", "Overview"→"How we organize"/"Practical guides", "Welcome"→"Welcome to Sapiens First". Work group lacks "Overview" item unlike others.
- "Learning resources" lives in strategy/ but is listed under learning index → cross-filed.
- 5 of 6 sidebar groups collapsed by default → hides the shape of a small (27-page) site.
- Nav: "Handbook" nav item points to /guide/ — redundant with sidebar; Atlas/Website are external but not marked.
- No glossary although many coined terms (circle, role, Fellow, Atlas, pillar, program, objective, key result, decision rights, red lines).

### Link graph (script over md)
- guide/index 0 inbound md links (only sidebar/home button). getting-started, learning/index, organization/index, practices/index, actions, agreement: 1 inbound each.
- Every content page ends with a bold "**Read more:** a · b" line of middot-separated inline links → low visual weight, easy to miss; pager already shows next/prev.
- Hubs: metrics (8 inbound), roles-and-circles (7), templates (7).

### Page-level presentation
- Pages are short (avg ~400 words, 3–6 H2s) — outline aside + full-width H2 rules are heavy for this length.
- details-block labels are an uncontrolled vocabulary: "For fellows and role holders", "For fellows:", "For organizers:", "Read more:", "Proposal:", "Suggested practice:", "Example:", "Optional:". Mixes audience, depth and status in one visual form.
- Proposal status rendered two ways: `::: info Proposal` (visible) and `::: details Proposal: …` (collapsed). "To clarify" as `::: info`. Status is not scannable at page/sidebar level.
- Blockquote styled as serif pull-quote (1.2em Georgia) but used for worked examples (metrics.md ×7) → examples look like testimonials.
- Templates: some as tables (not copyable), some as ```text blocks (copyable) → inconsistent.
- agreement.md headings wrapped in ** → double bold in H1/H2; uses `*` bullets with trailing double spaces (source copy).
- Index pages mix list styles ("[x](..): desc" vs "[x](..) explains …").

### Render check (screenshots at 1440 / 390 px)
- Home at 1440: the right half of the hero is empty, and nothing follows the three cards. From the homepage there's no path to three of the six sections.
- Sidebar group labels ("HOW WE GET THINGS DONE", "HOW WE LEARN AND IMPROVE") wrap to two lines of 12px tracked caps.
- Blockquote examples render in Georgia serif on an otherwise sans-serif page, so they read as quotations rather than worked examples.
- The outline aside appears even when it has only one entry (agreement: "Acceptance").
- Mobile reading is good: line length, type size and line spacing all work.
- Every H2 gets a full-width 2px rule and a 56px top margin, which breaks 400-word pages into separate blocks.

---

# Prioritized improvements

Ordered by how much each change helps a new reader find and understand the right page, relative to the effort. P1 = do first.

## P1 — Wayfinding and structure

1. **Make the homepage a real router.** Replace the Learn/Organize/Act cards with the role-based "If you are… → Start here" paths (currently on /guide/) and cards for all six sections. People arrive with a goal and a role, not a section name (Krug, *Don't Make Me Think*; Redish, *Letting Go of the Words*: organize by what the reader is trying to do). Keep Learn · Organize · Act as a brand slogan, not the site structure.
2. **One name per thing.** The sidebar label, page H1, home card and index link text should match. Mismatches: Mission and approach vs. How we make change; Work and objectives vs. How we get things done; generic "Overview"; Welcome vs. Welcome to Sapiens First. The "Learn" card also collides with "How we learn and improve." Consistent labels are the strongest cue that a link leads where the reader wants (information scent: Pirolli & Card; NN/g).
3. **Expand the sidebar by default and shorten group labels.** 27 pages fit on one screen, and collapsed groups hide the site's shape. Five labels start with "How we…", so their first words don't help readers tell them apart (readers scan the start of lines). Try Strategy / Organization / Work / Learning / Guides, or keep the phrases without uppercase tracking so they fit on one line.
4. **Consistent section scaffolding.** Every group should start with "Overview" (Work doesn't). File "Learning resources" in one place (it's in strategy/ but listed under Learning).
5. **Add a glossary** and link each term's first use on a page: circle, role, Fellow, Atlas, pillar, program, product/service, objective, key result, metric, decision rights, red lines. Unfamiliar terms are the biggest barrier for newcomers, and CONTRIBUTING already asks for visible definitions.

## P2 — Consistent content components (show what kind of text a block is)

6. **A status system for Proposal / To clarify.** These currently appear as `::: info`, as `::: details Proposal:` blocks (collapsed, so the label hides them) and as bold inline text. Add dedicated containers (`::: proposal`, `::: clarify`) with one distinct style (e.g. a dashed border and a status chip). Optionally add frontmatter `status:` to show a badge by the H1 and in the sidebar. Readers must never mistake a proposal for policy, so this affects trust, not just looks.
7. **A controlled vocabulary for expandable sections.** Eight different openers are in use (For fellows and role holders / For fellows / For organizers / Read more / Proposal / Suggested practice / Example / Optional). They mix audience, depth and status. Pick about three, e.g. *For role holders*, *Example* and *Background*, each with its own label style. Progressive disclosure only works when the label predicts what's inside (NN/g).
8. **An example container instead of blockquotes.** Add `::: example` with sans-serif text, a light tint and an "EXAMPLE" label. Keep the serif blockquote for real quotes. Affects metrics.md (7) and atlas-and-ai.md (1).
9. **Replace the trailing "**Read more:** a · b · c" line** (on 22 pages) with a styled "Related" block: a vertical list with one-line descriptions. Inline middot-separated lists are the hardest link format to scan. Keep the prev/next pager for linear reading.
10. **Standardize section index pages.** Use the same pattern everywhere: a short intro, then a list of links with one-line descriptions. They currently differ. work/index is also a full concept page, so consider moving that material to its own page so every index works the same way.

## P3 — Visual rhythm and typography

11. **Calm the reading-page headings.** Keep uppercase Barlow for the H1. Set H2 in sentence case, and drop or lighten the full-width 2px rule and 56px top gap. All caps slow the reading of multi-word headings (Butterick, *Practical Typography*: use caps for short labels only). The theme's own comment says "reading pages stay calm," and the H2 treatment works against that.
12. **Use less box weight.** Callouts, details blocks, code, tables and the pager all get a 2px ink border and a hard shadow, so nothing stands out (Tufte: cut non-data ink). Keep the hard shadow for interactive or high-priority elements (buttons, pager, proposal box) and make tip/info/details flat tinted panels.
13. **Hide the outline aside on pages with fewer than 3 H2s** (frontmatter `outline: false`, or a small layout rule). Consider showing H2s only, since the pages are short.
14. **Balance the home hero.** At desktop the right half is empty. Add the logo or an illustration as the hero image, or place the role paths beside the title.
15. **Mark external links** (Atlas, Website and sapiensfirst.org in body text) with ↗ so readers know they are leaving the handbook. Atlas is linked from almost every page.

## P4 — Utility and polish

16. **Make every template copyable.** Show all templates as code blocks with the copy button, or add "Copy as Markdown" / "Open as Google Doc" links. The table-based templates (Project scope) don't paste cleanly. Add a print stylesheet for templates and the agreement.
17. **A metadata line under each H1** set by frontmatter: who it's for (everyone / Fellows / organizers), reading time and status. Telling people up front who a page is for helps them decide whether to read it (Redish).
18. **Tidy agreement.md's Markdown** (`**` inside headings, `*` bullets with trailing double spaces) without changing any wording. Add a print or download option.
19. **Accessibility pass.** Check contrast for `--vp-c-text-2`/`-3` on the `--sf-soft` sidebar and for the coral hover states. Check keyboard focus on the collapsible details blocks.
20. **Search and metadata.** Add a frontmatter `description:` to every page, for search results, link previews, and the index and "Related" descriptions in items 9–10. Consider `search.options.detailedView`.

## Coordination with the content agent
Items 2, 4, 5, 7–10, 17 and 18 edit Markdown under docs/, so coordinate to avoid conflicting edits. Items 3, 6 (the containers), 11–16, 19 and 20 are mostly config and theme changes (`config.mts`, `.vitepress/theme/`) and can go ahead independently.

---

# Implementation log

Started 2026-09-27 15:31. Content agent idle since 15:23; Markdown edits use exact-match edits, so any concurrent change makes the edit fail instead of being overwritten.

Naming decision for #2/#3: keep the "How we…" section names (they are the H1s and the house voice), but make them the single name everywhere: sidebar group = index H1 = home card. Group labels switch to sentence case bold (fits one line), first item in each group = "Overview".

- [x] Theme CSS: H2 sentence case, no rule; flat callouts; code blocks no shadow; sidebar group labels sentence-case Barlow 19px; text-3 raised to AA; header-anchor red-dark; chip/block/related/eyebrow/home-panel styles (#3, #11, #12, #19)
- [x] Custom containers: `docs/.vitepress/containers.ts` — proposal, clarify, example, roles, background, related (styling pending in CSS step) (#6, #7, #8)
- [x] Config: containers wired, reading time + auto outline:false (<3 H2s) in transformPageData, sidebar all expanded, Overview first in every group, Glossary in sidebar + nav, detailed search, externalLinkIcon (#2, #3, #4, #13, #15, #20). Added devDependency markdown-it-container.
- [x] Layout: `theme/components/PageMeta.vue` (section · N min read · For <audience>) in doc-before; `HomePaths.vue` in home-hero-image slot, fed by `paths:` frontmatter (#1, #14, #17). Related = `::: related` container, not frontmatter, so links stay relative .md (#9)
- [x] Homepage: `paths:` role panel beside hero (below title on mobile), 6 feature cards = 6 sidebar sections with identical names (#1, #2, #14). Verified desktop + 390px.
- [x] Glossary page `docs/guide/glossary.md` (definitions taken from existing pages, each links back); in sidebar + nav. First-use links: pending, see content step (#5)
- [x] Markdown (scripted, exact-match, 27 pages; backup at scratchpad/docs-before-migration.tgz): all `::: details` → proposal/roles/background/example/optional; `::: info Proposal`/`To clarify` → proposal/clarify; blockquote examples in metrics + atlas-and-ai → `::: example`; agreement heading bold + trailing spaces removed, wording untouched (#6, #7, #8, #18). Added `optional` kind for the AI prompt.
- [x] Every `**Read more:**` line → `::: related` list with canonical titles + one-line descriptions; `description:` frontmatter on every page; `audience: Fellows` on fellowship + agreement (#2, #9, #17, #20)
- [x] Index pages (organization, practices, learning) → `- [Title](x.md) — Description.` same as Related; welcome page explains new labels + links glossary (#10). work/index left as a concept page (split = content decision).
- [x] Project scope: copyable ```text outline under the table (others were already code blocks) (#16); agreement done in migration (#18). Glossary first-use links added on getting-started (#5).
- [x] CONTRIBUTING.md documents blocks, related lists, descriptions, naming rule
- [x] Verified: `npm run docs:build` clean; 937 built internal links + #anchors resolve; container counts match source (6 proposal, 1 clarify, 4 example, 8 roles, 6 background, 1 optional, 22 related, eyebrow on 28 pages); no horizontal overflow on any page at 320/390/768 px; screenshots checked light + dark, desktop + mobile.
- Fixes found during verification: block text inherited grey → forced text-1; mailto links lost the external arrow; **Glossary removed from top nav** (it overflowed the nav by 29px at 768 px; it's still in the sidebar, homepage card and welcome page).

## Not done / left for a decision
- #10 partial: work/index.md is still a concept page doubling as section overview (splitting it is a content decision).
- #5 partial: glossary first-use links only added on getting-started; other pages could link terms as the content agent edits them.
- "Learning resources" stays filed under strategy/ (moving the file would collide with the content agent's edits); learning/index notes where it lives.
- Nothing committed. Backup of pre-migration docs/ in the session scratchpad (docs-before-migration.tgz).
