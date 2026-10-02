# Handbook content migration ledger

Inventory date: 2026-10-02. Status: first implementation increment; **all destination mappings below are proposed** until migrated and reviewed. The user's instruction to begin incremental agent implementation authorizes local work; it does not make inherited notes, suggested weights, external frameworks, or unresolved organizational policies adopted.

Scope: every current published Markdown page in `docs/` outside theme/generated dependencies, root Markdown governance/source pointers, original archive sources, and the newly supplied `10-2 content additions/` inputs. This ledger records source state before agents add new chapter pages. No files are moved or retired by this ledger. The outline controls placement; the implementation plan controls sequencing. The live deployed handbook was not compared during this increment.

## How to use this ledger

Section numbers below refer to [the outline](../HANDBOOK-OUTLINE.md). Suggested stable IDs are descriptive identifiers independent of future numbering/URLs; they are not registered IDs or implemented destinations. Each source row is `inventoried / proposed`; completion requires the actual new path and anchor, compatibility mapping, verified content, and editorial date to be added. Dispositions are `retain`, `rewrite`, `merge`, `split`, `archive`, or `remove`; `archive` is a proposed future disposition, not a deletion instruction.

Date provenance is the source's authored `last_updated`, not a policy effective date or verification date. Preserve source dates for unchanged copies; new editorial work receives its actual edit date. Sources without an authored date are explicitly unknown; neither filesystem timestamps nor a filename establish publication/adoption dates.

## Published pages — baseline

| Old path | Topic / proposed rationale | Proposed units | Suggested stable ID | Disposition | Status / unresolved issue | Source editorial date |
| --- | --- | --- | --- | --- | --- | --- |
| `docs/find.md` | Search-oriented routing; update routes after migration | 0.2.1; 0.3.3 | `handbook-navigation` | rewrite | Inventoried / proposed. Preserve useful old question anchors; links must reach canonical units. | 2026-09-29 |
| `docs/guide/agreement.md` | Canonical volunteer agreement | A.1.6 | `fellowship-agreement` | retain | Inventoried / proposed. Preserve exact agreement text; migration is not employment-policy adoption. | 2026-09-27 |
| `docs/guide/fellowship.md` | Volunteer Fellowship introduction | 0.3.2 | `fellowship-pathway` | rewrite | Inventoried / proposed. Confirm whether program and commitments remain current. | 2026-09-27 |
| `docs/guide/getting-started.md` | First steps and finding people/work | 0.3.1; 0.3.3 | `getting-involved` | rewrite | Inventoried / proposed. Current contacts and assignments stay in Atlas. | 2026-09-28 |
| `docs/guide/glossary.md` | Human-authored definitions become structured records at canonical owners | D | `glossary` | split | Inventoried / proposed. Resolve Staff/Lead/Steward terms; generate D only after records work. | 2026-09-29 |
| `docs/guide/index.md` | Welcome, audience paths, status labels and Atlas boundary | 0.1; 0.2 | `handbook-use` | split | Inventoried / proposed. Confirm editorial owner and audience terms. | 2026-09-29 |
| `docs/index.md` | Handbook entry and complete chapter contents | 0 | `intro` | rewrite | Inventoried / proposed. Homepage has no authored date; establish date on actual rewrite. | Not recorded |
| `docs/learning/atlas-and-ai.md` | Proposed shared data/intelligence model | 1.4.6; 3.4.1 | `atlas-and-ai` | split | Inventoried / proposed. 10-2 tech notes corroborate intent; actual deployed capabilities not verified. | 2026-09-27 |
| `docs/learning/feedback.md` | Feedback, growth and historical rubric proposal | 2.1.1; 2.3.4; 3.3.3; 3.1 | `feedback-and-development` | split | Inventoried / proposed. 10-2 supplies actual draft rubrics; distinguish supplied content from adopted evaluation policy. | 2026-09-27 |
| `docs/learning/index.md` | Measure, reflect and improve routing | 2.2.3; 2.2.4; 2.2.7 | `learning-cycle` | merge | Inventoried / proposed. Replace old landing with strategic-planning routing. | 2026-09-27 |
| `docs/learning/metrics.md` | Objectives, paired measures and definitions | 2.2.2; 2.2.3 | `metrics` | rewrite | Inventoried / proposed. Verify citations and local OKR cadence; distinguish measurement from personnel evaluation. | 2026-09-28 |
| `docs/learning/reviewing-metrics.md` | Review, bottlenecks, allocation and measurement limits | 2.2.7 | `strategy-review` | rewrite | Inventoried / proposed. Confirm review authority/cadence; preserve Metrics and people distinction. | 2026-09-27 |
| `docs/learning/strategic-hypotheses.md` | Strategic assumptions and backward planning | 1.2.6; 2.2.4 | `strategic-hypotheses` | split | Inventoried / proposed. Organizational assumptions need owner endorsement. | 2026-09-27 |
| `docs/members/index.md` | Story, values and next steps | 0.1; 1.1; 1.3; 0.3 | `member-reading-path` | merge | Inventoried / proposed. Confirm membership definition without copying live terms. | 2026-09-29 |
| `docs/organization/decisions.md` | Decide/Consult/Approve and current Fellowship practice | 1.4.3; 2.1.3; 2.4.3; A.2.1 | `decision-rights` | split | Inventoried / proposed. Proposed role-change process is not adopted Holacracy governance. | 2026-09-28 |
| `docs/organization/index.md` | Organization routing | 1.4 | `structure` | merge | Inventoried / proposed. Replace old landing with chapter section after migration. | 2026-09-29 |
| `docs/organization/participation.md` | Participation definitions and growth architecture | 0.1.2; 0.3; 1.4.4; 1.4.5 | `participation` | split | Inventoried / proposed. Reconcile dues, course eligibility, staff/Lead and Steward progression against current owner input. | 2026-09-29 |
| `docs/organization/roles-and-circles.md` | Stable role concepts and Atlas records | 1.4.1; 1.4.2; 1.4.6; 2.3.3 | `roles-and-circles` | rewrite | Inventoried / proposed. Confirm constitution/version and role rights; keep live assignments external. | 2026-09-27 |
| `docs/organization/values.md` | Values explanation and canonical standards | 1.3; 2.1.4; A.1.1 | `culture-and-standards` | split | Inventoried / proposed. Preserve current reporting route; missing alternative contact, appeal and process. | 2026-09-27 |
| `docs/organizers/compensation.md` | Draft placeholder only | 3.2; A.1.5 | `compensation` | rewrite | Inventoried / proposed. No formula, amounts or policy supplied; keep gap visible. | 2026-09-29 |
| `docs/organizers/fellows.md` | Volunteer work and strategy routing | 0.3.2; 1.2; 2.2 | `fellow-reading-path` | merge | Inventoried / proposed. Separate Fellowship from staff employment. | 2026-09-29 |
| `docs/organizers/index.md` | Organizer audience navigation | 0.1.2; 0.3 | `organizer-reading-path` | merge | Inventoried / proposed. Old Fellows/Stewards/Leads navigation is not the new chapter structure. | 2026-09-29 |
| `docs/organizers/leads.md` | Strategic direction, learning and staff routes | 2.2; 3.0; 3.1 | `lead-reading-path` | split | Inventoried / proposed. Do not carry staff-are-Leads assertion forward without confirmation. | 2026-09-29 |
| `docs/organizers/stewards.md` | Distributed authority, circle support, feedback and meetings | 1.4; 2.1; 2.4 | `steward-reading-path` | split | Inventoried / proposed. Steward engagement and role meanings differ; verify local governance adoption. | 2026-09-29 |
| `docs/practices/actions.md` | Purpose, planning and peaceful action examples | 1.2.2; A.2.6 | `peaceful-action-guide` | split | Inventoried / proposed. Examples are not adopted safety procedures; source action lists remain historical. | 2026-09-27 |
| `docs/practices/gatherings.md` | Strategic purpose and reusable gathering guidance | 1.2.2; A.2.6 | `gathering-guide` | split | Inventoried / proposed. Keep procedural detail once in Appendix A. | 2026-09-27 |
| `docs/practices/index.md` | Act/recruit/train routing | 1.2.2–1.2.4; A.2.6 | `organizing-guides` | merge | Inventoried / proposed. Keep one canonical practical guide per tactic. | 2026-09-27 |
| `docs/practices/organizing-conversations.md` | Relationship conversation and door-knocking aids | 2.3.1; A.2.2 | `organizer-conversation` | split | Inventoried / proposed. Confirm broader Organizer Conversation scope and approved outreach copy. | 2026-09-27 |
| `docs/practices/starting-a-circle.md` | Structure explanation and startup guide | 1.4.5; A.2.6 | `local-circle-guide` | split | Inventoried / proposed. Do not adopt historical size/recognition thresholds. | 2026-09-28 |
| `docs/practices/training.md` | Practice, feedback and training guidance | 1.2.4; 2.3.4; 2.3.5; A.2.6 | `training-guide` | split | Inventoried / proposed. Flipped classroom remains proposed where source labels it so. | 2026-09-27 |
| `docs/strategy/index.md` | AI concerns, desired future, theory of change and organizing cycle | 1.1; 1.2; 2.2.1 | `story-and-strategy` | split | Inventoried / proposed. Verify empirical claims; keep current work outside durable strategy. | 2026-09-29 |
| `docs/strategy/resources.md` | Shared bibliographic records, recommendation associations and prompts | B; C; A.3.2 | `resource-catalog` | split | Inventoried / proposed. Links/claims not reverified in this inventory; Netflix/Amazon performance uses citation-only pending choice. | 2026-09-29 |
| `docs/supporters/index.md` | Welcome, AI concerns and participation routes | 0.1; 1.1; 0.3 | `supporter-reading-path` | merge | Inventoried / proposed. Retain optional link-only audience path if useful; avoid duplicated story. | 2026-09-29 |
| `docs/work/index.md` | Mission-to-work concepts | 2.2.1; 2.2.5 | `work-planning` | rewrite | Inventoried / proposed. Proposed hierarchy differs from Atlas; reconcile before declaring a schema. | 2026-09-28 |
| `docs/work/meetings-and-updates.md` | Project check-ins, written updates and general meetings | 2.4.1; 2.4.4; 2.4.5 | `meetings-and-updates` | split | Inventoried / proposed. Existing general meetings are not automatically tactical/governance meetings. | 2026-09-27 |
| `docs/work/projects.md` | Scope, approach, plans, testing, completion and handoff | 2.2.5; 2.2.6; 3.3.6 | `project-execution` | rewrite | Inventoried / proposed. Portfolio authority and selection criteria still missing. | 2026-09-28 |
| `docs/work/templates.md` | Scope, plan, update, weekly plan, handoff and optional prompt | A.2.1; A.3.1 | `planning-templates` | split | Inventoried / proposed. Compare fuller archived prompt; preserve decision-right boundaries. | 2026-09-27 |
| `docs/work/weekly-work.md` | Review rhythm and actionable tasks | 2.2.6 | `weekly-planning` | rewrite | Inventoried / proposed. Confirm cadence; no invented automated task system. | 2026-09-27 |

## Independently movable blocks

These block rows supplement the page-level mapping; they identify canonical boundaries that must not disappear in a page rewrite. Anchors are current source anchors, not approved replacement anchors.

| Old path / anchor | Proposed unit / stable ID | Disposition | Rationale / unresolved issue | Date provenance |
| --- | --- | --- | --- | --- |
| `docs/organization/values.md#our-core-values`; `#operating-principles` | 1.3.1–1.3.2 / `culture-principles` | rewrite | Explain values; keep enforceable policy separate. | 2026-09-27 |
| `docs/organization/values.md#standards-for-leadership`; `#red-lines`; `#political-activity-and-representation` | A.1.1 / `values-standards`; explain from 1.3.3 and 2.1.4 | split | One canonical standards source; retain reporting gap and distinguish prospective endorsements from current policy. | 2026-09-27 |
| `docs/organization/participation.md#movement-architecture` | 1.4.4–1.4.5; 3.4.1 / `movement-architecture` | rewrite | Useful growth-system context; listed recruitment systems and thresholds are not automatically endorsed practices. | 2026-09-29 |
| `docs/organization/decisions.md#follow-current-fellowship-practice` | 0.3.2; A.2.1 / `fellowship-decision-practice` | retain | Keep current Fellowship approval boundaries distinct from general staff authority. | 2026-09-28 |
| `docs/organization/decisions.md#when-responsibility-is-unclear` proposal callout | 1.4.3; 2.4.3 / `governance-proposal` | rewrite | Explicitly proposed role-change process; does not prove local Holacracy adoption. | 2026-09-28 |
| `docs/strategy/index.md#the-moment`; `#what-we-stand-for` | 1.1.1; 1.1.3 / `movement-story` | rewrite | Separate organizational beliefs from empirical claims requiring research. | 2026-09-29 |
| `docs/strategy/index.md#act-recruit-train`; `#our-theory-of-change` | 1.2.1–1.2.5 / `organizing-cycle` | merge | Combine with useful 10-2 flywheel context without promising exponential growth. | 2026-09-29 |
| `docs/work/templates.md#project-scope`; `#project-plan`; `#project-update`; `#weekly-plan`; `#handoff` | A.2.1 / `planning-templates` | retain | Canonical copyable templates; main chapters link/embed rather than duplicate. | 2026-09-27 |
| `docs/work/templates.md` optional project-planning prompt; `archive/sources/Fellowship Handbook [shared].md` “Project Plan LLM Prompt” | A.3.1 / `project-planning-prompt` | merge | Select one reusable version after substantive comparison; retain historical original unchanged. | Current page 2026-09-27; original editorial date unknown |
| `docs/strategy/resources.md#explore-with-an-llm` | A.3.2 / `critical-reading-prompts` | split | Separate reusable prompts from bibliographic catalog. | 2026-09-29 |
| `docs/strategy/resources.md` all resource entries and background reading callout | B/C / `resource-catalog` | split | One record per resource; explicit recommendation and citation associations; incomplete sources need verification. | 2026-09-29 |
| `docs/learning/reviewing-metrics.md#metrics-and-people` | 2.2.7; 3.1.5 / `measurement-and-evaluation` | retain | Preserve limits of metrics; compare new performance framework rather than silently replacing. | 2026-09-27 |
| `docs/guide/glossary.md` each named term and status definition | D and canonical owning subsection / term-specific IDs | split | Review individual definitions and aliases before generating index; do not maintain second authored glossary. | 2026-09-29 |

## Root and historical Markdown classification

Every root Markdown file is classified here. Repository operations and historical assessments are not public numbered handbook sections.

| Source | Classification / proposed home | Disposition | Rationale / unresolved issue | Date provenance |
| --- | --- | --- | --- | --- |
| `README.md` | Repository entry; root | rewrite | Update folder/command map as increments become real. | No explicit date |
| `CONTRIBUTING.md` | Contributor mechanics; root | rewrite | Align with actual pilot/schema and SVG authoring rules; retain one authoritative rule per topic. | No explicit date |
| `STYLE-GUIDE.md` | Handbook editorial/visual conventions; root; reference from A.4.2–A.4.3 | rewrite | SVG diagram standard belongs here. This does not supply a complete approved organization-wide brand guide. | No explicit date before current increment |
| `HANDBOOK-OUTLINE.md` | Editorial source of truth; root | retain | New hierarchy and missing-input markers; incorporate 10-2 provenance without treating policy as adopted. | Created/updated 2026-10-02 |
| `HANDBOOK-IMPLEMENTATION-PLAN.md` | Execution sequence; root | rewrite | Record authorization for incremental local implementation and concrete first increments. | Created/updated 2026-10-02 |
| `HANDBOOK-REVIEW.md` | Historical management-coaching assessment; proposed `archive/previous-plans/` | archive | Recommendations are proposals; preserve useful unresolved questions. | Reviewed 2026-09-27 |
| `DESIGN-REVIEW.md` | Historical design review; proposed `archive/previous-plans/` | archive | Retain evidence of prior review; reassess after new hierarchy. | Started 2026-09-27 |
| `REWRITE-PLAN.md` | Superseded readability execution plan; proposed `archive/previous-plans/` | archive | Naming/page anatomy must defer to new outline, not older verb navigation. | No explicit calendar date |
| `AI-READABILITY-PLAN.md` | Prior implementation history; proposed `archive/previous-plans/` | archive | Preserve export/search rationale; old page anatomy is not the new schema. | Started 2026-09-27 |
| `PROGRESS.md` | Prior consolidation record; proposed `archive/previous-plans/` | archive | Preserve original authority boundaries and decisions as history; new progress belongs in current plan/log. | Updated 2026-09-27 |
| `docs.md` | Root pointer to consolidated guide and archive | retain | Not original full source. Update links after migration; remove only if all inbound references are reconciled. | No explicit date |
| `Fellowship Handbook [shared].md` | Root pointer to consolidated Fellowship and archive | retain | Not original full source; must not overwrite archived agreement/history. | No explicit date |
| `archive/README.md` | Historical archive index | rewrite | Keep previous consolidation map and explain new archived files if moved. | Atlas inspection recorded 2026-09-27; no separate editorial date |
| `archive/sources/docs.md` | Immutable original movement guide | retain | Evidence for 1.1–1.4, A.1.1, A.2.6 and B/C. Preserve license/name-logo restrictions; dated claims need research. | Original authored date not established |
| `archive/sources/Fellowship Handbook [shared].md` | Immutable original Fellowship source | retain | Evidence for 0.3.2, 1.1–1.2, 2.2, 2.4, A.1.6 and A.3.1; cohort schedules, past priorities and meeting logs stay historical. | Includes dated cohort/meeting records; these are not a document update date |

## Helpful 10-2 additions — new source inputs

The supplied additions materially reduce the missing-content list. Preserve their originals, use them to draft the first Staff/tech increment, and track new canonical pages separately. The folder label indicates input batch provenance; it does not establish policy adoption or source publication dates.

| Source / block | Proposed units / stable ID | Disposition | Useful content / unresolved issue | Date provenance |
| --- | --- | --- | --- | --- |
| `10-2 content additions/10-2.txt` “Guiding beliefs” | 3.1.4–3.1.5 / `performance-framework` | rewrite | Expectations before evaluation; outcomes/behaviors; 3 means success; ongoing feedback; performance vs promotion; overlapping roles. Quarterly cadence and independent assessments are supplied suggestions requiring policy review. | Supplied 2026-10-02; no authored `last_updated` |
| Same source “Individual Contributor” | A.1.2; 3.1.1 / `ic-rubric` | split | Complete supplied 1–5 Output/Communication/Judgment rubric. Suggested 50/25/25 weights remain suggested. | Same batch provenance |
| Same source “Directly Responsible Individual” | A.1.3; 3.1.2 / `dri-rubric` | split | Complete supplied 1–5 Outcome/Ownership/Judgment rubric; purpose, domain, accountabilities and authority. No weighting supplied: do not invent one. | Same batch provenance |
| Same source “Player-Coach” | A.1.4; 3.1.3 / `player-coach-rubric` | split | Complete supplied 1–5 Direction/Enablement/Systems rubric; suggested 35/35/30 weights. Not a conventional promotion ladder. | Same batch provenance |
| Same source “Putting the roles together” | 3.1.4; 1.4.4 / `overlapping-performance-roles` | rewrite | Evaluate actual role mix; predominant role determination and compensation relationship remain missing. | Same batch provenance |
| Same source “Main references” and empirical attributions | C; relevant B associations only after review / `performance-sources` | split | Block/Dorsey/Botha, Locke/Latham, Grove and Holacracy attributions need precise primary-source verification; bibliography alone does not verify claims. | Same batch provenance; link verification not performed |
| `10-2 content additions/Tech Team Notes.md` “Current Focus” | Historical/live Q4 context; explain from 3.4.1 / `tech-q4-context` | archive | Named builders, Q4 goals and two-week deployment rhythm are useful context; current priorities/owners belong in live records. Confirm whether cadence is durable practice. | Explicitly 2026Q4; supplied 2026-10-02 |
| Same source “Strategic Principles” | 3.4.1 / `tech-strategy-principles` | rewrite | Scalability, AI legibility and rapid prototyping provide supplied tech primer material. Clarify how scalability and prototypes trade off; do not invent infrastructure prescriptions. | Supplied 2026-10-02; no authored date |
| Same source “Strategy: Big Organizing” | 1.2.5; 3.4.1 / `tech-organizing-strategy` | rewrite | Volunteer recruiting and conversion-focused tech; exponential growth is an ambition/model, not established empirical growth. | Same batch provenance |
| Same source “From Hierarchy to Intelligence” | 1.4.6; 3.4.1 / `company-brain-model` | rewrite | Machine-readable world model and suggested next steps; proposed data architecture, not verified implemented capability. “Capture as much information as possible” requires explicit data-purpose/access/retention boundaries. | Same batch provenance |
| Same source `![][image1]`; `![][image2]` | Asset references in 3.4.1 / `tech-diagram-links` | rewrite | Unresolved reference-style image placeholders: pair supplied SVGs explicitly and provide adjacent prose/alt text. | Same batch provenance |
| `10-2 content additions/movement-flywheel.svg` | A.4.1 asset; use in 1.2.5 and 3.4.1 / `movement-flywheel` | retain | Editable vector diagram of Act → Recruit → Train plus data/insight loop. Source has viewBox and text; add accessible title/description to published derivative. Illustrated products/participation terms are conceptual, not proof they exist. | Supplied 2026-10-02; no authored date |
| `10-2 content additions/company-brain.svg` | A.4.1 asset; use in 1.4.6 and 3.4.1 / `company-brain` | retain | Editable vector model Activity → Metrics → Insights → Strategy. Preserve source; accessible derivative plus explanatory prose. Do not present listed signals as approved collection or staff performance metrics. | Same batch provenance |

No root `10-2.txt` exists in this checkout at inventory time; the IDE tab may refer to an unsaved or moved file. The on-disk source inventoried above is `10-2 content additions/10-2.txt`.

## Duplicate sources and unresolved disagreements

- Archived originals are historical evidence; current `docs/` is the present consolidated wording, not an authority to silently override source agreement text. Root source filenames are navigation pointers only.
- New 10-2 rubrics supersede the assumption that no complete rubric source exists. Their supplied text can be canonicalized as **draft**, with existing `feedback.md` proposal language reconciled after policy review. Suggested weightings are not silently adopted; DRI weighting is absent.
- Old “staff are Leads”/Fellow–Steward progression differs from the new IC/DRI/PC roles model. Preserve participation, governance, employment and performance as different concepts pending confirmation.
- Current Atlas is authoritative for current assignments and work. Old work hierarchy, thresholds, cohort dates, Q4 focus and diagram product labels are not independently authoritative live records.
- Archived cohort material mentions December 1 versus December 4 and differing planning schedules (recorded in `archive/README.md`). Keep this history rather than choosing a date by inference.
- An external citation can support explanation without becoming a recommended reading or locally adopted policy. AI-2040 remains unidentified; do not substitute AI 2027.

## Unresolved inputs by destination

| Unit | Needed before final authoritative content |
| --- | --- |
| 0.1–0.3 | Audience/Fellowship definitions; editorial review owner; retained onboarding paths and current contacts. |
| 1.1 | Approved founding narrative and technology-power argument; evidence for selected AI, surveillance and security claims. |
| 1.2–1.3 | Endorsed strategic assumptions, distinctive cultural priorities and boundaries of behavioral policy. |
| 1.4; 2.4 | Adopted Holacracy constitution/version and adaptations; change authority; meeting formats; circles/chapters recognition and participation distinctions. |
| 2.1.2–2.1.3; A.1.1 | Conflict process; alternative reporting contact, escalation/review; radical ownership within actual authority. |
| 2.2 | Work/Atlas schema; OKR and metric review cadence/ownership; portfolio allocation/stop criteria and decision authority. |
| 2.3 | Organizer Conversation scope; people philosophy, empirical support and role-fit examples. |
| 3.0 | Why paid staff, staff arrangements and proactive hiring rationale/source. |
| 3.1; A.1.2–A.1.4 | Supplied draft rubrics now available. Confirm weights, evidence/reviewer/cadence/appeal, mixed-role scoring and predominant role determination. |
| 3.2; A.1.5 | Compensation benchmark, currency, geography, role bands/formula, score-to-pay relationship, administration and example inputs. |
| 3.3 | Development commitments, outside interviewing wording and keeper-test application/retention process. |
| 3.4; A.2.5 | Tech primer source now available. No existing tech meeting agenda was supplied. A.2.5 now contains an explicitly proposed editorial agenda; participants, owner and adopted cadence remain unresolved. |
| A.2–A.4 | Approved outreach copy, tactical/governance agendas, selected prompt versions; visual-brand/verbal-guide scope and asset provenance. |
| B/C | AI-2040 identity; verified primary references; explicit recommended-versus-citation associations. |
| D | Reviewed definitions and canonical owners; ambiguous aliases/meanings and staff terminology reconciled. |

## Increment verification and next ledger update

The baseline contains **38 current published Markdown pages**. Each has a proposed disposition, numbered destination, suggested stable ID, unresolved issue and source date provenance. Root Markdown files and all four 10-2 source files are classified. Newly created chapter/reference pages from concurrent implementation are additions, not old-page migrations; their creation does not retire any baseline source.

Next increments append actual destination paths/anchors, source-to-target fragment compatibility and status transitions as each package lands. Do not mark a row complete because its proposed unit exists: all separately movable blocks and policy gaps must be reconciled. No live-site comparison, link verification, organizational policy approval, migration or archive move is claimed by this inventory.

## Introduction increment — 2026-10-02

New editorial drafts: `docs/introduction/index.md` (0), `welcome.md` (0.1), and `how-the-handbook-works.md` (0.2). They combine orientation from the existing guide, audience indexes, and navigation page. Source dates remain unchanged; the new drafts carry their actual rewrite date, 2026-10-02. Audience definitions, Fellowship status, and editorial/policy review ownership remain open.

| Existing entry / block | New destination | Compatibility / disposition state |
| --- | --- | --- |
| `guide/index.md#find-your-starting-point` | `introduction/welcome.md#who-this-handbook-serves` | Draft explanation added; old page and fragment retained pending complete migration. |
| `guide/index.md#read-it-in-layers` | `introduction/welcome.md#how-to-read-it` | Draft explanation added; old fragment retained. |
| `guide/index.md#how-the-handbook-fits-together` | `introduction/how-the-handbook-works.md#chapters-sections-and-appendices` | New hierarchy explained; legacy routing retained. |
| `guide/index.md#the-handbook-and-atlas` | `introduction/how-the-handbook-works.md#where-authoritative-information-lives` | Durable/live boundary retained; old fragment retained. |
| `guide/index.md#a-handbook-that-grows-with-us` | `introduction/how-the-handbook-works.md#how-to-suggest-changes` | Contributor path linked; review owner explicitly unresolved. |

No source row is fully reconciled or retired by this batch. `find.md` and audience indexes retain their existing links and anchors until the remaining destinations exist.

## DNA Strategy increment — 2026-10-02

New drafts: `docs/dna/index.md` and `docs/dna/strategy.md`. Existing source editorial dates remain unchanged; these rewritten pages carry 2026-10-02.

| Existing source / fragment | Actual draft destination | Compatibility / disposition state |
| --- | --- | --- |
| `strategy/index.md#our-theory-of-change` | `dna/strategy.md#theory-of-change` | Rewritten as organizational belief; old fragment retained. |
| `strategy/index.md#act-recruit-train`; `practices/index.md#guides-by-stage` | `dna/strategy.md#act`, `#recruit`, `#train` | Explanation split; practical guides remain authoritative existing sources. |
| `strategy/index.md#how-the-work-fits-together`; tech notes' Big Organizing and flywheel | `dna/strategy.md#how-the-cycle-compounds` | Shared SVG reused; tool labels and growth remain conceptual. Old route retained. |
| `strategy/index.md` background assumptions; `learning/strategic-hypotheses.md` | `dna/strategy.md#assumptions-and-strategic-choices` | Targets and review decisions remain open; planning guide linked rather than duplicated. |

Story blocks in the old strategy page remain pending 1.1; no old page is retired or fully reconciled.

## DNA Culture increment — 2026-10-02

Added `docs/dna/culture.md` (1.3), retaining core values and operating principles from `organization/values.md` and adding draft daily-work examples. The distinctive-culture question remains open.

| Existing source / fragment | Actual destination | Compatibility / disposition state |
| --- | --- | --- |
| `organization/values.md#our-core-values` | `dna/culture.md#core-values` | Wording retained; old route remains during migration. |
| `organization/values.md#operating-principles` | `dna/culture.md#operating-principles` | Wording retained; old route remains during migration. |
| `organization/values.md#standards-for-leadership` | `appendices/reference/values-standards.md#standards-for-leadership` | Body moved verbatim to canonical A.1.1; legacy heading embeds that body. |
| `organization/values.md#red-lines` | `appendices/reference/values-standards.md#red-lines` | Red lines, reporting route, and unresolved-process callout moved verbatim; legacy heading embeds them. |
| `organization/values.md#political-activity-and-representation` | `appendices/reference/values-standards.md#political-activity-and-representation` | Body moved verbatim; legacy heading embeds it. |

A.1.1 retains the existing adopted status and September 27 source content date; unresolved reporting additions remain explicitly unestablished. Culture carries draft status and its October 2 rewrite date. No legacy page retired, policy added, or reporting process adopted.

## DNA Story and Structure increment — 2026-10-02

Added `docs/dna/story.md` (1.1) and `docs/dna/structure.md` (1.4); both draft, October 2 rewrite date. Founding narrative, concentrated-power argument, claim evidence, Holacracy constitution/adaptations, participation categories and circle/chapter definitions remain open callouts.

| Existing source / fragment | Actual destination | Compatibility / disposition state |
| --- | --- | --- |
| `strategy/index.md#the-moment` | `dna/story.md#ai-crisis` | Three concerns retained; evidence open. Old fragment retained. |
| `strategy/index.md#what-we-stand-for`; mission blockquote | `dna/story.md#future-we-want` | Retained; links 1.2 and Atlas. Old fragment retained. |
| `supporters/index.md#why-this-matters` | `dna/story.md#why-sapiens-first-exists` | One sentence retained; founding narrative open. |
| none (new) | `dna/story.md#concentrated-power` | Placeholder callout only; no argument adopted. |
| `organization/roles-and-circles.md` (Holacracy background) | `dna/structure.md#why-holacracy` | Wording retained; old fragment retained. |
| `organization/roles-and-circles.md#reading-a-role-in-atlas`, `#see-how-circles-and-work-relate`; `organization/decisions.md#check-the-decision-rights` | `dna/structure.md#roles-circles-decision-rights` | Concepts summarized; tables and handover guidance stay in legacy pages (linked). |
| `organization/decisions.md` (governance proposal bullet) | `dna/structure.md#governance-and-change` | Proposal status retained; constitution, authority, meetings open. |
| `organization/participation.md#keep-role-and-participation-separate`, `#ways-to-participate` | `dna/structure.md#participation-responsibility-employment` | Linked; “staff are Leads” conflict flagged, not restated as settled. |
| `practices/starting-a-circle.md` in-brief bullets | `dna/structure.md#local-circles-and-growth` | Wording retained; guide stays authoritative. |
| `learning/atlas-and-ai.md` | `dna/structure.md#atlas-and-the-handbook` | Linked, labelled proposed. |

## Leadership landing and Culture in leadership increment — 2026-10-02

Added `docs/leadership/index.md` (2) and `docs/leadership/culture-in-leadership.md` (2.1). 2.2–2.4 are listed as forthcoming without links. Leadership definition, conflict process and radical-ownership limits remain open.

| Existing source / fragment | Actual destination | Compatibility / disposition state |
| --- | --- | --- |
| `learning/feedback.md#give-useful-feedback` | `leadership/culture-in-leadership.md#feedback-culture` | Wording retained; legacy guide linked. Development/rubric proposal not moved (2.3.4 / 3.1). |
| `appendices/reference/values-standards.md` block `leadership-standards` | embedded at `leadership/culture-in-leadership.md#modeling-the-culture` | Include directive; canonical home stays A.1.1. Verified in HTML and Markdown output. |
| `organization/decisions.md#when-responsibility-is-unclear` | linked from `#conflict-resolution`, `#radical-ownership` | Linked only. |
| none (new) | `#conflict-resolution`, `#radical-ownership` | Open callouts; no process adopted. |

No legacy page edited, retired or fully reconciled.
