# Incremental handbook implementation

Last updated: 2026-10-02

## Completed locally

| Increment | Deliverable | State |
| --- | --- | --- |
| Inventory | `maintenance/content-map.md`: 38 legacy pages, movable blocks, root documents, archives, all four 10-2 inputs | Inventoried; dispositions proposed |
| Tech pilot | 3.4 Department-specific guidance; A.2.5 canonical tech agenda | Draft primer; agenda explicitly proposed |
| Staff expectations | 3.1 Expectations; A.1.2 IC, A.1.3 DRI, A.1.4 PC canonical rubrics | Draft; all 45 evaluative cells preserved from supplied source |
| Diagram standard | SVG assets, style/contributor rules, responsive frame, accessible descriptions and text equivalents | Implemented; existing Mermaid support retained |
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

1. Pilot an ordered TOC registry and canonical reference inclusion, including failure cases, status/date attribution, stable anchors, and identical Markdown exports. Current references are links, not duplicated tables.
2. Migrate Introduction and one DNA section using the content ledger, preserving source dates for unchanged passages and recording actual old-path/fragment mappings.
3. Add resource/citation records and glossary generation after the pilot; verify named external influences before using them as evidence.
4. Resolve staff review administration, compensation, governance, and tech meeting ownership through user-supplied organizational decisions. Keep independent drafting moving while particular inputs remain open.

Continue recording actual destinations and reconciled blocks in the ledger. Retire old pages only once their complete dispositions and compatibility paths are verified.
