# Handbook implementation decisions

Last updated: 2026-10-02

## Authorization and scope

The user requested: “start directing agents to implement the handbook incrementally,” identified the 10-2 content additions as helpful, and authorized an SVG standard if appropriate. The subsequent instruction “publish” authorizes committing and deploying these completed increments. Publication preserves the pages' draft status; it does not adopt unresolved organizational policies.

## First increments

1. Inventory legacy content against the new outline, keeping proposed dispositions reviewable.
2. Introduce numbered Staff and Appendix A pages alongside existing routes, rather than prematurely removing the old handbook.
3. Draft the tech strategy primer from the supplied notes and one canonical proposed tech meeting agenda. The notes contain no actual agenda.
4. Draft Staff expectations and the three canonical supplied role rubrics. Preserve suggested weightings as suggestions, with review administration and compensation unresolved.
5. Standardize new published diagrams as self-contained SVG assets with text equivalents. Preserve existing Mermaid support during migration; preserve supplied originals untouched.

## Provisional technical choices

The pilot stores stable IDs and display numbers in frontmatter and checks title/number consistency and uniqueness. A single ordered TOC registry is still pending; this pilot does not claim that registry or generated numbering is complete. Canonical references are linked until build-time inclusion and export parity are verified. Resource/citation/glossary generation and old-path migration remain later units.

The style guide's SVG decision is an editorial/technical choice within the user's request, not a new organizational policy. Imported diagram palettes are retained pending visual review. Diagram validation checks XML and asset conventions; human review still checks legibility and meaning.

## Helpful October 2 inputs

- `10-2 content additions/Tech Team Notes.md`: Q4 priorities, tech principles, big-organizing and company-brain ideas. Current assignments belong in live records; dated priorities are planning context.
- `10-2 content additions/10-2.txt`: guiding performance beliefs, complete IC/DRI/Player-Coach score tables, proposed weights, and role overlap. This resolves missing drafting inputs; it does not settle review procedures or pay.
- `10-2 content additions/company-brain.svg` and `movement-flywheel.svg`: reusable source diagrams. Published copies add accessible descriptions if missing.

## Remaining decisions

Organizational adoption of the performance framework, evaluation owners/cadence/appeals, role mix and pay calculations, tech meeting ownership/cadence, data-access boundaries, governance adoption, and current priority records remain unresolved. Do not infer those decisions from permission to edit the handbook.
