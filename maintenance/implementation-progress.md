# Incremental handbook implementation

Last updated: 2026-10-02

## Completed locally

| Increment | Deliverable | State |
| --- | --- | --- |
| Inventory | `maintenance/content-map.md`: 38 legacy pages, movable blocks, root documents, archives, all four 10-2 inputs | Inventoried; dispositions proposed |
| Tech pilot | 3.4 Department-specific guidance; A.2.5 canonical tech agenda | Draft primer; agenda explicitly proposed |
| Staff expectations | 3.1 Expectations; A.1.2 IC, A.1.3 DRI, A.1.4 PC canonical rubrics | Draft; all 45 evaluative cells preserved from supplied source |
| Diagram standard | SVG assets, style/contributor rules, responsive frame, accessible descriptions and text equivalents | Implemented; existing Mermaid support retained |
| Introduction | 0 landing, 0.1 Welcome, 0.2 How the handbook works; navigation and retained-fragment mappings | Draft; audience/Fellowship and reviewer questions visible |
| DNA Strategy | 1 chapter landing; 1.2 Strategy and six subsections; shared flywheel and retained-fragment mappings | Draft; strategic targets and review decisions open |
| Structural pilot | Ordered 11-page TOC; named-block rubric inclusion; shared HTML/export resolver; raw page metadata | Implemented; full numbering, catalogs/glossary and search deduplication pending |
| Transitional tooling | New navigation, numbered metadata validation, section support in HTML/LLM indexes, exported diagram URLs | Implemented alongside legacy pages |

The 10-2 material is helpful implementation input. Original source files remain intact. The handbook outline remains authoritative for placement; the implemented expectations subsections align with its IC/DRI/PC/mixed-role/evaluation order.

## Verification

- `npm run docs:check`: 43 pages, zero errors or warnings; 2 published SVGs, zero errors.
- `npm run docs:build`: VitePress 1.6.4 production build passes.
- Validator fixtures cover numbered page metadata, duplicate IDs/numbers, title prefix mismatch, invalid/leap dates, and Summary warnings.
- SVG fixtures cover a valid asset, missing description, bad viewBox, scripts, and external resources.
- Rubric table comparisons confirm all source headers/rows/cells preserved; IC and PC weightings remain suggested, and no DRI weighting was supplied or added.
- Built-output checks cover all six HTML/Markdown pages, diagram copying and `/docs/` asset URLs, Staff/Reference materials LLM sections, dates/status, and diagram text equivalents.
- `git diff --check` passes.

Browser-based desktop/mobile visual inspection remains pending. XML and build checks do not establish visual legibility. The user subsequently authorized publication of these increments. Policy adoption and full migration completion remain pending; the published pages retain draft status.

## Next bounded increments

1. Pilot an ordered TOC registry and canonical reference inclusion, including failure cases, status/date attribution, stable anchors, and identical Markdown exports. Rubric bodies now resolve from canonical blocks; remaining agenda/reference conversions are pending.
2. Continue DNA/Leadership migration using the ledger; Introduction and DNA Strategy drafts are already published. Preserve source dates for unchanged passages and retain old routes until complete reconciliation.
3. Add resource/citation records and glossary generation after the pilot; verify named external influences before using them as evidence.
4. Resolve staff review administration, compensation, governance, and tech meeting ownership through user-supplied organizational decisions. Keep independent drafting moving while particular inputs remain open.

Continue recording actual destinations and reconciled blocks in the ledger. Retire old pages only once their complete dispositions and compatibility paths are verified.

## October 2 continuation — Introduction batch

Added three orientation drafts with stable anchors and source provenance; recorded source-to-destination block mappings without retiring legacy routes. Content-only authoring and static navigation additions use the existing validator/build as replacement verification; no new runtime feature or prose-mirroring tests. Ordered TOC, reference embeds, catalogs and generated glossary remain pending.

Batch checks: `npm run docs:check` passed (46 pages, zero errors/warnings; 2 SVGs valid); `npm run docs:build` passed. Built HTML anchors, dates/status and raw/combined prose exports checked. Raw twins omit frontmatter under existing exporter behavior; metadata parity remains part of the pending structural pilot. Browser visual inspection remains pending.

## October 2 continuation — DNA Strategy batch

Added a chapter landing and strategy draft from existing movement guidance and October 2 tech notes. Kept strategy as belief, growth as ambition, and tool labels as conceptual. Practical guides stay linked at their existing routes. No new runtime logic; existing validation/build and generated-output inspection provide verification. Structural TOC/embed pilot remains the next technical increment.

DNA batch verification: `npm run docs:check` passed (48 pages, zero errors/warnings; 2 SVGs valid); production build passed. Checked all five new pages’ anchors, linked fragments, HTML date/status, Markdown prose exports and flywheel `/docs/` URL. Code review: lite correctness review completed without actionable findings for both batches. User edits to `10-2 content additions/10-2.txt` during this run are excluded from commits.

## October 2 continuation — site cleanup

User authorized including the pre-existing site changes: shared pilot navigation, compact More menu, homepage reading cards, consolidated status badge, dark-mode card colors and responsive typography. Removed HomePaths component and its matching configuration/styles. Local docs checks (48 pages) and production build pass; independent correctness review found no actionable regressions. Browser checks remain pending. The cleanup hides the metadata date on narrow screens; the structural pilot will restore date visibility to meet the handbook date requirement. Source-note edits remain excluded.

## October 2 continuation — TOC and canonical references

Added an ordered registry for all 11 numbered pages, shared navigation/export ordering and coverage checks. Three rubric tables remain authored only in Appendix A; Expectations resolves each beside its role explanation, and tech guidance resolves the same IC source. Embeds display canonical source title/link, status and date. Relative links and headings adapt to each host; nested inclusion is rejected. Raw Markdown twins now include source/status/date.

Independent review found two anchor issues, both fixed: validation now expands anchors before checking links; emitted IDs remain unique even when natural suffixes and host IDs collide. All 12 actual test cases pass with subprocess execution enabled, including validator integration. Initial sandboxed `node --test` output listed test files without running their cases; those counts are not used as evidence. Mobile/desktop preview at 390, 960 and 1440px passed after restarting a stale preview; dates remain visible and tables scroll within the page. Further output/parity and final build checks are recorded below before publication.

The user’s continuing site additions (number styling, search button/search relevance, not-found navigation, clipboard link feedback and responsive styles) are integrated with the authorized site changes. Supplied source-note edits remain excluded. No policy adoption is implied.

Final output checks confirm unchanged canonical table text in host raw Markdown and combined exports, correctly based source links, visible draft attribution and registry export order. Homepage now links to Introduction, displays its editorial date and avoids defining staff by a legacy Lead reading path. Existing VitePress 1.6.4 home-content hydration logs a viewport-offset style warning; it originates in `VPHomeContent.vue`, and the default CSS fallback remains in use. This does not block page rendering or search. Resource/citation/glossary pilot and canonical-only search deduplication remain later work.

The fixture test command is `node --test scripts/handbook-*.test.mjs`, wired directly into Pages CI. New unrelated package/dependency edits appeared during integration; `package.json` and `package-lock.json` are left uncommitted together, along with the source-note edits.
