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

The pilot stores stable IDs and display numbers in frontmatter, validated against the single ordered `handbook-data/toc.json` registry. Navigation and export order derive from that registry. Authored headings still carry numbers; full automatic numbering is pending. Canonical named blocks now resolve in HTML and Markdown exports. Resource/citation/glossary generation and old-path migration remain later units.

The style guide's SVG decision is an editorial/technical choice within the user's request, not a new organizational policy. Imported diagram palettes are retained pending visual review. Diagram validation checks XML and asset conventions; human review still checks legibility and meaning.

## Helpful October 2 inputs

- `10-2 content additions/Tech Team Notes.md`: Q4 priorities, tech principles, big-organizing and company-brain ideas. Current assignments belong in live records; dated priorities are planning context.
- `10-2 content additions/10-2.txt`: guiding performance beliefs, complete IC/DRI/Player-Coach score tables, proposed weights, and role overlap. This resolves missing drafting inputs; it does not settle review procedures or pay.
- `10-2 content additions/company-brain.svg` and `movement-flywheel.svg`: reusable source diagrams. Published copies add accessible descriptions if missing.

## Remaining decisions

Organizational adoption of the performance framework, evaluation owners/cadence/appeals, role mix and pay calculations, tech meeting ownership/cadence, data-access boundaries, governance adoption, and current priority records remain unresolved. Do not infer those decisions from permission to edit the handbook.

## Structural pilot — 2026-10-02

The ordered JSON TOC supplies numbered navigation and export ordering; validators enforce coverage and metadata agreement. Explicit Markdown comment directives select named bodies from canonical Appendix A pages. The same synchronous resolver runs before HTML parsing and in exports/validation. Source status/date remain independent of the host date. Nested includes/blocks are rejected rather than recursively expanded, preventing circular inclusion. Source markers are authoring metadata, not separately maintained policy copies.

IC criteria appear in both expectations and tech guidance; DRI/PC criteria appear beside their role explanations. Raw Markdown twins now carry source/status/date. These are provisional technical implementations, not policy adoption. Resource/citation/glossary generation, full numbering generation and canonical-only search indexing remain pending. Existing local search may index both sources and receiving explanations.

## File-structure decisions — 2026-10-02

The user delegated these choices (“make decisions that seem best according to first principles”). Principle: the repo root holds only entry points; `docs/` holds only published handbook content; everything about *making* the handbook lives in `maintenance/`; nothing published or externally linkable breaks.

1. **Root contents:** keep `README.md`, `CONTRIBUTING.md`, `STYLE-GUIDE.md` (conventional contributor entry points) and `archive/`. Move `HANDBOOK-OUTLINE.md` and `HANDBOOK-IMPLEMENTATION-PLAN.md` to `maintenance/`, rewriting inbound links; they are planning artifacts, not entry points.
2. **Old URLs:** assume external inbound links exist (the site is public). Every retired legacy route gets a redirect. GitHub Pages has no server redirects, so use generated static stub pages (meta refresh + canonical link + visible link) from a single `handbook-data/redirects.json`. Build this in the same batch as the first route retirement, not before; no route is retired yet.
3. **`archive/sources/`:** stays at its current path. It is not served by the site, but GitHub URLs may be cited elsewhere, and moving it buys nothing.
4. **`scripts/check-rewrite.py`:** delete. Nothing runs it; git history preserves it.
5. **Root history docs** (`PROGRESS.md`, `AI-READABILITY-PLAN.md`, `REWRITE-PLAN.md`, `HANDBOOK-REVIEW.md`, `DESIGN-REVIEW.md`): move to `maintenance/history/` unchanged, for cheap provenance. Unique still-live decisions get summarized into this file first.
6. **Pointer stubs** (`docs.md`, `Fellowship Handbook [shared].md`): delete after their pointers are in README; originals remain in `archive/sources/`.
7. **`.aws/`, `.agents/`, `.codex/`:** add to `.gitignore` (local tool state; `.aws` may hold credentials).
8. **`10-2 content additions/`:** stays until DNA, Leadership and Staff ledger rows are reconciled; then move to `archive/sources/2026-10-02/`. Published SVG copies in `docs/public/diagrams/` are the live versions.
9. **`values-standards.md`** is numbered handbook content (A.1.1), not legacy.

### Carried forward from the 2026-09 consolidation log

Summarized from `maintenance/history/PROGRESS.md` before it moved. Atlas remains the source of truth for current governance, assignments, projects, and priorities; the handbook explains stable concepts and practices, documents existing practice, and labels proposals explicitly. Still open from that log: the `::: tip` and `::: info` containers used in some Grow-era pages are not in CONTRIBUTING's block list (convert them or add them); the "5-step hypothesis framework" from the source is not yet written into the strategic-hypotheses page; the external resource library has not had a full factual or link audit.
