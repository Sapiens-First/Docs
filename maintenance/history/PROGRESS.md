# Handbook consolidation progress

Updated: 2026-09-27. Branch: `docs/unified-handbook`.

## Goal and agreed decisions

Combine `docs.md` and `Fellowship Handbook [shared].md` into a clear Markdown handbook for members, organizers, Fellows, staff, and operators. Preserve the welcoming, direct source tone and use basic introductions with expandable detail.

Atlas (`https://sapiensfirst.org/atlas`) is the source of truth for current governance, assignments, projects, and priorities. The handbook explains stable concepts, schemas, protocols, and practices. Document existing practices and label future proposals explicitly. Do not silently turn exploratory notes into policy.

## Saved work

- 25 handbook content pages under `docs/guide`, `strategy`, `organization`, `work`, `learning`, and `practices`.
- Homepage and VitePress sidebar updated to match the six sections; Atlas linked in navigation.
- Original input files preserved byte-for-byte under `archive/sources/`. Root filenames now provide pointers to the merged content.
- Fellowship agreement copied without changing its wording.
- Existing theme, assets, GitHub Pages workflow, and `/Handbook/` base path preserved.
- README updated with repository structure and local build instructions.

## Completed verification

- `npm run docs:build` passed after the final navigation and responsive adjustment.
- Checked 920 generated local links across 27 HTML pages, including fragment targets and the `/Handbook/` base path.
- All 25 handbook content pages are in the sidebar; 26 published Markdown pages include the homepage.
- Checked 39 repository documentation links outside illustrative code examples.
- Verified both archived input files byte-for-byte against the originals and confirmed the agreement wording is unchanged.
- Confirmed 20 expandable sections render; browser interaction verified that a section opens and closes.
- Inspected desktop and narrow-screen rendering. Browser measurements on the templates page found no horizontal page overflow at 320, 390, 768, 960, 1024, and 1440 pixels after a small header correction.
- `git diff --check` passed. Generated VitePress `.temp` output is now ignored alongside build/cache output.
- `CONTRIBUTING.md` documents writing and folder conventions; `archive/README.md` maps the source topics and records unresolved decisions.

## Final state and next work

The requested consolidation is complete. Publication was authorized on 2026-09-27; this version is being committed for the GitHub Pages publishing branch. Check the repository and live site for the deployment result. Existing visual styling is retained, with the decorative header badge hidden below desktop widths and the website navigation label shortened so navigation fits.

Future editorial work can start with the decisions listed in `archive/README.md`: objective and metric schemas, formal governance, participation definitions, local group recognition, and development rubrics. These are explicitly marked proposals or open questions, not missing implementation steps.

The build and internal links are verified; the external resource library has not undergone a full factual or link audit. Historical references remain distinguishable from adopted policy. No live Atlas records were changed.

## Recovery notes

Shell commands require escalation because the sandbox fails with `mountinfo path is not absolute`. The patch helper fails for the same reason. Writes have used Python/heredocs through the shell.

An initial overwrite was rejected because starter pages already had uncommitted changes. Exact copies of every existing file to be changed were then saved and verified under `/tmp/s1-handbook-before-merge/`; subsequent guarded writes were approved. Permanent source archives also preserve both original input documents.

Pre-existing changes included the VitePress config, homepage, guide index, theme entry point, and public assets. Do not discard those changes. The current files retain the theme and publishing configuration.

## Readability pass (style guide rollout)

Started 2026-09-27. The approach is in `STYLE-GUIDE.md`: hook, three things, next step, applied top-down. The step-by-step plan for stages 2 and 3 is `REWRITE-PLAN.md`; `scripts/check-rewrite.py` guards protected text and heading links.

- **Stage 1, done:** the style guide; Mermaid diagrams in the site palette; the homepage, Welcome page, and six section overviews rewritten. Proposal and background blocks keep their wording.
- **Stage 2a, done:** section verbs Join · Learn · Organize · Build · Act · Grow; noun page titles; URLs unchanged.
- **Stage 2b, done:** openings, headings, and bold lead-ins on all topic pages; diagrams on Decisions, Projects, Atlas and AI, and Conversations.
- **Stage 3, done:** prose tightened on every topic page. Cuts were modest because stage 2b had already tightened most pages.
- **Added:** Grow → Strategic hypotheses (working backwards; the planning habit is a proposal). Its source's "5-step hypothesis framework" was missing and is not yet written.
- **Open decisions:** the `::: tip` and `::: info` blocks in the Grow pages aren't in CONTRIBUTING's block list; decide whether to convert them.
- **Verified 2026-09-27:** build passes; `scripts/check-rewrite.py db22c61` reports 0 problems; all 29 pages load at 390 and 1440 px with no errors or horizontal overflow; all 8 diagrams render.
