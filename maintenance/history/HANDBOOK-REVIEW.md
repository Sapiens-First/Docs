# Sapiens First handbook: management-coaching assessment

Reviewed 2026-09-27. Complete assessment; recommendations are proposals, not organizational decisions.

## Overall judgment

**Keep the handbook's direction. Its next revision should make the operating system usable from end to end.** It is already a welcoming introduction and a thoughtful collection of working practices. It is less complete as a system through which someone can choose worthwhile work, exercise authority, resolve competing priorities, and learn whether the work advanced the mission without relying on founder interpretation.

The highest-value change is to connect the pieces already present. More framework terminology, a larger dashboard, or a new Atlas feature would not resolve the underlying decisions.

| Purpose | Assessment | Main reason |
| --- | --- | --- |
| Introduce the mission | Strong opening; incomplete strategic explanation | Democracy, prosperity, and security are clear. The route from participation to political results needs more explanation. |
| Welcome new participants | Strong | Different starting points, plain language, manageable commitments, and permission to learn. |
| Support individual project work | Strong foundation | Scoping, early useful versions, capacity, feedback, and handoff are practical. |
| Coordinate across roles | Developing | Authority, competing priorities, dependencies, and exceptions still depend on conversations whose resolution is underspecified. |
| Learn from results | Promising, with substantive corrections needed | Good measurement principles; examples need stronger definitions and more cautious inference. |
| Scale beyond the founder | An explicit aspiration, not yet a complete mechanism | Delegation and governance are appropriately marked unresolved, but interim routes need to be more usable. |

These are judgments about the documentation, not performance ratings of the organization or its people.

## Scope, evidence, and limits

Read all 28 current handbook Markdown pages, including the uncommitted metrics and AI additions, plus README, CONTRIBUTING, PROGRESS, and the archive content map. Checked selected historical passages for provenance. The archived Fellowship material mentions Horizons of Focus; the current handbook does not explain it. No separate solutions or ADR collection was found in the documentation scan; the consolidation progress and archive map provide the relevant prior decisions.

Checked primary framework sources and the public policy page. The Atlas page did not load through the web reader, but its HTML and public `atlas-data.js` were fetched directly. They provide evidence about the public representation, not private tooling or day-to-day use. The public Advocacy record already describes converting public pressure into binding policy: useful strategic material exists to bring into the introductory explanation. Its current wording and assignments should remain in the live record.

Confidence is high in the textual inconsistencies and missing instructions identified below; moderate in their likely operational cost. There were no participant interviews or observations of meetings. Full books, every external reading, and all live Atlas records were not audited. The review does not assess the scientific merits of the entire AI policy agenda or provide a legal review of the Fellowship agreement.

## Strengths worth protecting

1. **The invitation is clear and human.** [Welcome](</home/rohan/Desktop/Coding/S1 - Docs/docs/guide/index.md>) and [getting started](</home/rohan/Desktop/Coding/S1 - Docs/docs/guide/getting-started.md>) let people find an appropriate entry point without mastering the organizational vocabulary. Preserve this when adding operational detail.
2. **The mission is memorable.** [Strategy](</home/rohan/Desktop/Coding/S1 - Docs/docs/strategy/index.md>) connects AI to democracy, prosperity, and security, then gives participants the simple act–recruit–train model. That is a good introduction to participation.
3. **The handbook/Atlas distinction is sound.** Stable definitions belong in a handbook; assignments and live work belong in maintained records. This reduces the risk of two conflicting project registers.
4. **The document is honest about maturity.** [Roles](</home/rohan/Desktop/Coding/S1 - Docs/docs/organization/roles-and-circles.md>), [decisions](</home/rohan/Desktop/Coding/S1 - Docs/docs/organization/decisions.md>), and [the archive map](</home/rohan/Desktop/Coding/S1 - Docs/archive/README.md>) resist turning rough source notes into adopted policy. The 3.5% and R0 qualifications are particularly valuable corrections to overly simple growth narratives.
5. **Several important distinctions are already right.** People are different from roles; participation levels are different from authority; circles are different from programs; outputs are different from outcomes; consultation is different from approval. These distinctions make a mixed framework system possible.
6. **Project guidance is proportionate.** [Projects](</home/rohan/Desktop/Coding/S1 - Docs/docs/work/projects.md>) emphasizes useful early work, actual capacity, feedback, and handoff. It explicitly discourages unnecessary reporting. The templates are usable starting points rather than bureaucratic forms.
7. **Measurement has a humane purpose.** [Metrics](</home/rohan/Desktop/Coding/S1 - Docs/docs/learning/metrics.md>) and [feedback](</home/rohan/Desktop/Coding/S1 - Docs/docs/learning/feedback.md>) reject reducing people to scores, encourage paired measures, and acknowledge circumstances outside someone's control.
8. **Organizing is relational.** [Conversations](</home/rohan/Desktop/Coding/S1 - Docs/docs/practices/organizing-conversations.md>), gatherings, and training emphasize listening, meaningful invitations, practice, and follow-up. Those are useful counterweights to an overly numerical model of movement building.
9. **Handoffs and ongoing ownership receive real attention.** Finishing a project is explicitly distinguished from maintaining its result. Keep this distinction visible when introducing OKRs.

## Priority order

**P0** means resolve before treating the handbook as a reliable shared operating system or expanding the relevant practice. It does not mean all participation must stop. **P1** means improve in the next operating cycle. **P2** means useful refinement after the main loop works.

Rank reflects the likely cost of ambiguity, how many activities depend on the fix, and the effort required. Items 1–8 receive most of the analysis. The larger backlog is a menu, not a demand to adopt fifty changes at once.

| Rank | Improvement | Priority | Effort and dependency |
| --- | --- | --- | --- |
| 1 | Explain how organizing produces mission outcomes | P0 | Medium; requires a real strategic choice |
| 2 | Make authority and representation rules consistent | P0 | Medium; requires an authorized governance decision |
| 3 | Establish an interim operating loop and record locations | P0 | Small–medium; can pilot with existing tools |
| 4 | Define how responsibilities, objectives, metrics, and projects connect | P0 | Medium; definitions before software |
| 5 | Correct measurement definitions and inference | P0 | Small editorial fixes; medium data design |
| 6 | Resolve individual measurement and reporting boundaries | P0 | Medium; explicit people/data decision |
| 7 | Make capacity and stopping work part of prioritization | P1 | Small pilot; depends on priority authority |
| 8 | Provide conflict, absence, and escalation routes | P0 | Medium; requires actual people and authority |

### 1. Connect growth to political change

**Evidence.** The strategy page explains participation and the three movement functions. The metrics chain culminates in sustainable chapters; movement-level measures emphasize members, organizers, chapters, retention, and objectives on track. Those measure capacity better than mission accomplishment. “Advocacy turns that capacity toward political change” leaves the hardest causal step largely unexplained.

**Why it matters.** A chapter could meet every example target while failing to influence any relevant institution. Volunteers need a credible explanation of why this campaign, in this place, with this constituency, is worth their scarce time. Political outcomes can take time, so the answer cannot simply be “count policy wins.”

**Specific proposal.** Add a one-page theory of change and one worked campaign example covering: desired institutional change; decision maker; constituency or coalition with influence; organizing approach; intermediate signs of influence; final result; assumptions; and reasons to stop or change course. Use the current policy page's distinction between feasible campaigns and broader public awareness as a starting question, not a substitute for choosing a strategy. That page explicitly calls its policy platform an early draft; the handbook should preserve that status. [Public policy page](https://sapiensfirst.org/policy).

Use an illustrative chain such as:

> Useful conversations → sustained participation → organizers able to lead collective work → a credible constituency and allies → changed institutional incentives or commitments → policy adoption and implementation → benefits relevant to democracy, prosperity, or security.

Each arrow is a hypothesis. Add evidence that would weaken it. A meeting with a decision maker is evidence of access, not automatically influence; adoption is not automatically implementation. Keep a small set of capacity measures beside evidence of mission progress and qualitative accounts from the people affected.

**Completion test.** A new Fellow can explain how their project contributes, name the uncertain link, and describe evidence that would justify changing the project.

### 2. Resolve the permission-to-act contradiction

**Evidence.** [Values](</home/rohan/Desktop/Coding/S1 - Docs/docs/organization/values.md>) opens with permission for anyone to act in Sapiens First's name if they follow its values. [The agreement](</home/rohan/Desktop/Coding/S1 - Docs/docs/guide/agreement.md>) requires approval for significant commitments or public statements. Decisions and actions also require checking decision rights. These can coexist, but the opening sentence does not state their boundary.

**Why it matters.** Readers can reasonably reach opposite conclusions about posting, speaking to media, spending, promising a partnership, or holding a branded event. Values alone do not identify who can commit shared resources.

**Specific proposal.** Replace the blanket invitation with an invitation bounded by documented authority. Add a decision table with concrete examples: ordinary outreach using approved materials, independently arranging a gathering, spending, new public positions, partnerships, and changes to roles. For each, say who decides, who must be consulted, which approvals are reserved, and where the current holder is found.

Specify what happens when the holder is unavailable, consultation receives no response, or two roles disagree. Do not assume silence grants approval unless an authorized policy explicitly establishes that rule. Distinguish personal advocacy from official representation.

The current founder-centered model is not inherently a mistake for an early organization. An honest, bounded delegation model is preferable to implying distributed authority that has not actually been granted. Do not edit the preserved Fellowship agreement as a side effect of a prose cleanup.

**Completion test.** Two members independently route five realistic decisions to the same decision holder without asking the founder what the handbook means.

### 3. Make the operating loop work before Atlas automation

**Evidence.** The welcome page calls Atlas the source of truth for current work and priorities. The learning pages explicitly say it does not yet store metric definitions or history; weekly task support is also unresolved. “Atlas or the live records linked from it” is a sensible architecture but an incomplete instruction when a record or link is missing.

**Specific proposal.** Publish an interim record-location table covering priorities, active projects, accepted commitments, metric observations, decisions, and unresolved tensions. Name the current tool or linked document, its maintainer, and the fallback when unavailable. Select locations deliberately; do not create a second competing register.

Pilot one repeatable loop using an existing check-in:

1. Review available capacity and the current priority.
2. Confirm the next useful result and who owns it.
3. Surface waiting items and decisions needed.
4. Review a few relevant measures and participant observations.
5. Record what changes, the owner, and the next check date.

End-of-cycle reflection should decide what to continue, stop, or change. Governance changes need their own authorized route; people support should not become a public metric discussion. These functions can share calendar time without being confused with one another.

**Completion test.** A Fellow can find the current priority, their next commitment, the decision they await, and the previous review's outcome in a few minutes. The process still works if AI suggestions are unavailable.

### 4. Give each framework a distinct job

**Evidence.** [Work](</home/rohan/Desktop/Coding/S1 - Docs/docs/work/index.md>) sensibly declines to force Atlas's hierarchy and proposed objective/task structure into one model. However, “key result or success criterion” blurs two useful concepts. The metric template puts baseline and target into the metric definition, while objectives are still unresolved as records. The AI page then presents a more definite relationship among key results, metrics, and circles.

**Specific proposal.** Agree a small shared vocabulary before building more software:

| Concept | Proposed use here |
| --- | --- |
| Purpose and values | Why the organization exists and the constraints it chooses to honor |
| Vision and strategy | Desired future, major choices, and assumptions about how to reach it |
| Role/accountability | Continuing responsibility and the authority needed to discharge it |
| Objective | A selected improvement or change over a stated period |
| Key result | Evidence of achieving that objective, with baseline, target, date, and owner |
| Metric | A reusable definition and observation history; it may also monitor ongoing health |
| Project | A bounded effort undertaken because it is expected to help |
| Success/acceptance criterion | Evidence that a particular deliverable or project is acceptable |
| Next action | A concrete action someone can take now, or an explicit waiting condition |

Keep metric definitions separate from period-specific targets, while allowing normal operating ranges. A metric can serve multiple objectives over time. A project can contribute to several outcomes. Some essential maintenance serves an ongoing responsibility without needing a new improvement objective.

This is an editorial and operating proposal, not a requirement for eight new Atlas entity types. Start with links and fields in existing records. Add a single end-to-end example before extending schemas.

**Completion test.** People can distinguish a role, an objective, a project, and a next action in the same real example, and know where maintenance belongs.

### 5. Repair examples before expanding measurement

The principles are stronger than the examples. These are specific repairs:

- **OKR example lacks its own required fields.** The Berkeley example supplies targets but no baseline or overall deadline. “Run four public actions a month” measures activity; it does not demonstrate a strong chapter. Put it among initiatives or operating inputs unless a clear rationale makes it an appropriate key result.
- **Retention is underspecified.** “Still active 30 days after joining” needs a joining event, an active definition, a cohort window, a measurement date, and rules for unknown observations. Unmatured cohorts are not failures. Display numerator and denominator with the percentage.
- **Weekly series can conceal cohort lag.** The sign-up, attendance, and 30-day retention table does not establish whether the rows refer to the same cohorts. Label them. Four recent signup weeks cannot all have mature 30-day outcomes at the end of week four.
- **A plausible cause is presented as a conclusion.** “A second orientation session or faster scheduling will” help goes beyond the evidence in the table. Scheduling, audience mix, event suitability, contact quality, and recording changes are competing explanations. Present the proposed intervention as a test with a review date.
- **Input failure is too categorical.** “If an input rises and the outcome doesn't follow” does not by itself invalidate the metric. Check time lag, sample size, other constraints, data quality, and whether the assumed mechanism actually operated.
- **Example thresholds look like policy.** Explicitly label 75% and 60% as fictional teaching values, explain who sets real thresholds, and avoid interpreting tiny denominators as stable signals.
- **Roll-ups need rules.** Do not average chapter retention percentages without weighting eligible cohort sizes. Define whether movement counts are unique people or memberships; overlapping chapter participation otherwise inflates totals.

**Completion test.** A second person can reproduce a number from its source records, identify the relevant cohort, and separate observation from a proposed explanation.

### 6. Make the boundary around personal measurement truthful

**Evidence.** Metrics says data comes from organizational records, “not from monitoring what individuals do.” Yet the review page illustrates someone's weekly outreach falling from 24 to 6. The metrics chain includes organizer hours; the AI proposal includes signups and attendance records. Avoiding surveillance, retaining participant records, and discussing a person's agreed work are distinct questions.

**Specific proposal.** State separately what organizational participation is recorded, what role-level commitments are visible, what personal behavior is not collected, and who can view each category. Decide whether individual outreach counts are actually intended. If not, change the example to a team's aggregate workload. If so, describe the agreed purpose and access boundary instead of claiming individual activity is never recorded.

Add a process for correcting inaccurate records, identifying stale observations, and limiting retention and access. Small groups can make people identifiable even in aggregates. These are proposed operating boundaries grounded in this handbook's own promises, not a claim about legal compliance.

Keep developmental conversations separate from automatic judgments. Routine follow-up automation should have a named owner, an approved scope, and a way to stop it. Data availability does not itself establish permission to use it for a new purpose.

**Completion test.** A member can explain what is recorded about participation, who sees it, and how to correct it; a role holder knows whether their activity is being counted.

### 7. Put capacity and stopping work into the system

**Evidence.** Weekly work asks people to surface competing priorities, and projects says to plan around real capacity. Neither gives a repeatable way to decide what comes off the list. Fellows offer only 5–10 hours a week, some already committed to check-ins and meetings.

**Specific proposal.** During the pilot, ask each person to name one primary near-term result plus essential maintenance, account for meetings and support work, and explicitly defer something when a new commitment arrives. Treat this as a capacity experiment, not a universal permanent work-in-progress limit.

Choose work by expected mission contribution, urgency, learning value, dependencies, and effort. Keep the tradeoff visible in ordinary language rather than inventing precise scores for uncertain political outcomes. Make start, continue, reduce, pause, and stop legitimate review decisions.

Define the role that resolves cross-role priority conflicts. A request is not automatically an accepted deadline, and changing a plan is not necessarily breaking a promise. Track accepted commitments and renegotiate them early.

**Completion test.** Adding an urgent project produces an explicit capacity tradeoff rather than an invisible increase in expected hours.

### 8. Close the conflict and escalation gaps

**Evidence.** Values already identifies the missing alternative route when the reporting contact is involved. Decisions sends unclear ownership back to a relevant role holder or onboarding contact. Those routes fail in predictable cases: the person is absent, is the subject of the concern, or disputes their authority.

**Specific proposal.** Name an authorized alternate for concerns involving the usual contact, explain handling and review responsibilities, and provide a clear route for disagreement about a decision. Separate interpersonal feedback, misconduct reports, and governance changes; they require different treatment. Do not require a complainant to resolve a serious concern directly with the person involved.

Add a decision/escalation record containing the issue, requested decision, current holder, next response date, and escalation route. Establish an interim fallback before designing a sophisticated governance process. This is an organizational decision, not something an editor can settle by naming a hypothetical role.

**Completion test.** A person with a concern involving their normal contact has an actual alternative they can use today.

## Framework and citation audit

Borrowing selectively is appropriate. Fidelity matters where a borrowed term changes expectations about authority, evidence, or required behavior. A deliberate adaptation should be labeled; a missing citation is not evidence that a claim is false.

| Framework/source | What is sound | Weakness or inconsistency | Recommended treatment |
| --- | --- | --- | --- |
| Holacracy | Roles, accountabilities, tensions, and the warning against inferring formal authority | No adopted constitution is established; Atlas scope/privileges are not automatically formal domains/authority. Governance and operational problem-solving are not yet routed distinctly. | Describe the system as drawing on Holacracy unless formal adoption is established. Add a primary reference and a simple account of the actual local rules. |
| Getting Things Done | Concrete next actions, waiting items, regular review, tool freedom | The weekly review is mostly a prioritization routine; capture, processing inboxes, reviewing the complete project inventory, and deferred work are only partly covered. | Call it a lightweight adaptation. Add a short capture-to-action routine and a fuller optional review checklist. |
| Horizons of Focus | Mission, projects, and roles provide useful ingredients | The archived reference was not carried into an explicit current explanation. Atlas's work hierarchy is not a set of horizons. | Add an optional mapping from purpose through vision, goals, ongoing responsibilities, projects, and actions. Keep it a thinking aid. |
| OKRs | Desired change distinguished from deliverables; measurable success encouraged | Key results and project success criteria blur; example baselines/deadlines are absent; activity targets can substitute for outcomes. | Provide one complete objective with a small coherent set of KRs, linked initiatives, and a review decision. Define local expectations for commitments and aspirations. |
| Amazon/Working Backwards | Controllable inputs, trends, paired interpretation, and responsible owners | Early funnel stages are treated too generally as controllable inputs. A small top-level dashboard is a local simplification, not a full description of Amazon's review. | Prefer measures of participant experience that teams can change. Explain the scaled-down adaptation. |
| High Output Management | Plausible attribution for indicators, paired measures, and management practice | A book title alone gives readers no route to the relevant argument. No edition or chapter references are supplied. | Add edition and chapter references after checking the actual book. Do not invent quotations or page numbers. |
| From Hierarchy to Intelligence | Authorship and broad account of the argument check out | A company design argument is not evidence that AI will reduce this movement's coordination burden. The record-rich company setting differs materially. | Keep as a hypothesis and inspiration; evaluate a bounded pilot against actual time saved and errors. |
| 3.5% participation | Current strategy correctly rejects a guarantee | The historical statistic is uncited and easily conflated with membership or supporter totals. | Cite Chenoweth's cautions and define the original population/participation context if retaining the number. |
| Movement Action Plan / Spectrum of Allies | Presented as lenses rather than binding doctrine | Little explanation of when either changes a decision; Spectrum link could not be verified through the web reader. | Give one exercise, the decision it informs, and its limits; verify the link before relying on it in training. |
| Organizing books and AI readings | Resources are explicitly not wholesale endorsements | Several are title-only recommendations; scenarios, advocacy, and empirical evidence are not individually classified. | Annotate intended use, author/date, source type, limitations, and an accessible original link. |

### Primary-source checks and what they establish

- **Holacracy:** The [v5.0 Constitution](https://www.holacracy.org/constitution/5-0/) explicitly defines roles, domains, accountabilities, constrained authority, and separate tactical and governance processes. The handbook borrows useful concepts but does not establish adoption of that authority system. This is a gap in local operating rules, not a reason to require wholesale Holacracy adoption.
- **GTD:** David Allen's [Weekly Review](https://gettingthingsdone.com/2009/05/the-gtd-weekly-review/) includes clearing inputs, reviewing lists and commitments, and reconsidering deferred possibilities. The handbook's shorter routine is reasonable for volunteers if labeled as an adaptation rather than a complete implementation.
- **Horizons:** Allen distinguishes actions, projects, ongoing areas of responsibility, goals, vision, and purpose/principles. Those are levels of perspective, not equivalents of mission/pillar/program/product/project records. [The 6 Horizons of Focus](https://gettingthingsdone.com/2011/01/the-6-horizons-of-focus/).
- **OKRs:** [Google's OKR Playbook](https://www.whatmatters.com/resources/google-okr-playbook) emphasizes measurable results with evidence and distinguishes committed from aspirational goals. It also warns against successful scores that fail to achieve the objective. This supports repairing the handbook's examples; Google's scoring conventions need not become Sapiens First policy.
- **Amazon-style metrics:** The authors' [Input Metrics & Weekly Business Review](https://workingbackwards.com/concepts/input-metrics/) emphasizes controllable factors that improve customer experience and an iterative search for meaningful drivers. It describes a detailed review with more than 200 metrics, not just a few executive indicators. For Sapiens First, a smaller review is a sensible proposed adaptation; organizers' experience and beneficiary outcomes should determine what deserves measurement.
- **AI and organization:** [Dorsey and Botha's essay](https://block.xyz/inside/from-hierarchy-to-intelligence) does advance the information-routing argument attributed to it. Its case rests partly on abundant recorded work and transaction signals. It does not establish that a volunteer political movement has comparable data or that AI suggestions will be accurate. The handbook correctly calls this a direction, but some declarative passages make the benefits sound settled.
- **3.5%:** [Chenoweth's 2020 cautionary paper](https://www.hks.harvard.edu/sites/default/files/2024-05/Erica%20Chenoweth_2020-005.pdf) describes a historical pattern involving peak participation in campaigns seeking regime change or territorial self-determination, not a universal membership threshold. It notes an exception and successes below the threshold. The current qualification should remain and gain this citation.
- **Movement Action Plan:** The linked [Bill Moyer text](https://www.historyisaweapon.com/defcon1/moyermap.html) is accessible and explains a staged movement-development model. Use it to generate questions about a campaign's condition; the handbook has not supplied evidence assigning Sapiens First to a particular stage.
- **Grove:** The [publisher's page](https://www.penguinrandomhouse.com/books/72467/high-output-management-by-andrew-s-grove-former-chairman-and-ceo-of-intel/9781101972366/) confirms the book and broad management scope. This check does not verify every specific attribution about indicators; an edition-level citation remains an editorial task.

### Proposed division of labor among the frameworks

This synthesis is a recommendation for Sapiens First, not a claim that the source frameworks require this architecture.

| Question | Tool to use | What it should not decide by itself |
| --- | --- | --- |
| Why do we exist, and what future matters? | Mission, values, higher horizons | This week's task assignments |
| How might our work produce change? | Theory of change and campaign strategy | Whether a causal hypothesis has been proved |
| What changes deserve attention this cycle? | A few objectives and key results | Every ongoing duty or personal development need |
| Who can decide and who owns the work? | Explicit local governance and role agreements | Authority inferred from a metric or a software link |
| What must remain healthy? | Ongoing accountabilities and health measures | A demand to turn every measure into a stretch target |
| What should I do next? | Project plans and GTD-inspired action lists | Movement-wide strategic tradeoffs |
| What happened, and what changes next? | Metrics, conversations, experiments, and review decisions | Automatic judgments about people |

## Specific improvement backlog

Items 1–8 above are the first eight recommendations. Items 9–50 below complete the list. Suggested stewards describe responsibilities to assign, not claims that these roles currently exist. **E** means primarily editorial; **D** needs an organizational decision; **P** is best developed in a small pilot. Page names refer to the current handbook.

| # | Priority / type | Specific suggestion | Where / proposed steward | Observable result |
| --- | --- | --- | --- | --- |
| 9 | P1 / E | Add a 90-second mission explanation: stakes, desired future, distinctive approach, uncertainty, and invitation. | Strategy; mission editor | A newcomer can retell why the movement exists without adopting a precise AI timeline. |
| 10 | P1 / E+D | Add a short “why this organization?” explanation, grounded in actual choices about constituency, geography, and tactics. | Strategy; strategy decision holder | Readers can distinguish the movement's contribution from generic concern about AI. |
| 11 | P1 / E | Mark mission statements as values, strategic hypotheses, or empirical claims where the distinction matters. | Strategy/resources; editor | A reader can tell what is believed, what is predicted, and what is established. |
| 12 | P1 / D | Publish the current cycle's few priorities, non-priorities, decision holder, and next review date in a live record. | Atlas-linked priorities; strategy holder | People know what to decline as well as what to start. |
| 13 | P1 / E | Add an optional Horizons mapping using one real work example; explicitly separate time perspective from organizational hierarchy. | Work/weekly work; handbook editor | Maintenance, future vision, and immediate action all have a place. |
| 14 | P1 / E+P | Add a complete worked objective, KRs, initiative, owner, next action, and review outcome. | Work/templates/metrics; project lead | Readers can follow one chain without inventing missing fields. |
| 15 | P1 / D | Decide how to label firm commitments versus experiments or aspirations; explain renegotiation. | Work/decisions; coordination holder | Missing an experimental target is not confused with ignoring a promise. |
| 16 | P1 / D | Define how the handbook's adopted rules, current Atlas assignments, and project agreements interact when they conflict. | Welcome/decisions; governance holder | Readers know which authority resolves a conflict; software records do not silently change rules. |
| 17 | P1 / D | Define authority for assigning, vacating, and temporarily covering a role. | Roles/participation; assignment holder | Vacant roles and absences have an explicit fallback. |
| 18 | P1 / P | Introduce a short tension record: observation, effect, request, route, owner, and next check. Accept qualitative concerns as well as metrics. | Decisions/templates; facilitator | Issues become actionable without every issue becoming governance. |
| 19 | P1 / E+D | Label local community groups and formal governance circles consistently. | Starting a circle/roles; local-group contact | Founding a gathering does not imply new formal powers. |
| 20 | P1 / D | Define a minimal local-group affiliation agreement: contact, permitted representation, support, and review route. | Starting a circle; authorized movement contact | A group knows what affiliation actually means. |
| 21 | P1 / E+P | Add a capture routine for commitments arriving through Discord, email, meetings, and conversations. | Weekly work; each role holder | Agreed work reaches a trusted list rather than remaining only in chat. |
| 22 | P1 / E | Distinguish executable next actions from project plans, checklists, reference material, and deferred ideas. | Weekly work/templates; editor | An action list contains work someone can actually start. |
| 23 | P1 / P | Add owner, requested deliverable, and next follow-up date to waiting items. | Weekly template; project owner | Dependencies do not become silent indefinite waits. |
| 24 | P1 / D+P | Separate requested work from accepted commitments, including the agreed date when relevant. | Weekly work/meetings; coordination holder | Sending someone a task does not silently commit their time. |
| 25 | P1 / P | Use an end-of-cycle review of outcomes, assumptions, ongoing responsibilities, and stopped work. | Meetings/reviewing metrics; circle contact | Reviews change priorities and retire stale projects. |
| 26 | P1 / E+P | Extend metric definitions with cohort eligibility, counts, missing-data rules, freshness, version, and change notes. | Metrics; metric maintainer | Definition changes cannot masquerade as improvements. |
| 27 | P1 / E | Label all invented datasets, targets, named chapter examples, and AI narratives as illustrative. | Metrics/reviewing metrics/Atlas and AI; editor | Teaching examples are not mistaken for current observations or policy. |
| 28 | P1 / P | Pair quantities with experience or quality checks: welcome quality, organizer readiness, action purpose, or usable handoffs. | Metrics/training/gatherings; practice owners | More activity does not automatically count as better work. |
| 29 | P1 / P | In reviews, check data quality and cohort size before interpreting a trend. | Reviewing metrics; facilitator | Small or stale samples prompt questions rather than confident intervention. |
| 30 | P1 / E+P | Give “higher is better” an exception for target ranges, capacity limits, and saturation. | Metrics; metric maintainer | Growth beyond support capacity is visible as a tradeoff. |
| 31 | P1 / P | Record an intervention's hypothesis, expected lag, alternative explanations, and next evaluation date. | Reviewing metrics/templates; project lead | Teams can tell what was learned even when results disappoint. |
| 32 | P1 / P | Revisit previous decisions at the next review before opening new ones. | Meetings/reviewing metrics; facilitator | The feedback loop reaches a result rather than ending with an assigned action. |
| 33 | P1 / E+D | Separate observation, inference, suggestion, and approved action in AI examples. | Atlas and AI; automation owner | A generated explanation cannot be mistaken for a verified cause or instruction. |
| 34 | P1 / P | Pilot AI-generated review summaries against a manual baseline; record preparation time, corrections, omissions, and useful decisions. | Atlas and AI; pilot owner | Expansion depends on demonstrated value, not the attractiveness of the vision. |
| 35 | P1 / D | Define who can approve automation, change its scope, and stop it; preserve the decision trail. | Atlas and AI/decisions; authorized owner | “Once we trust it” becomes an explicit decision with boundaries. |
| 36 | P1 / P | Add a newcomer walkthrough with an actual project example and a first accepted commitment. | Getting started/Fellowship; onboarding contact | Onboarding ends with useful work and support, not only completed reading. |
| 37 | P1 / D+P | Make coaching coverage explicit: who helps whom, fallback during absence, and support capacity before accepting more Fellows. | Fellowship/feedback; program contact | The organization does not recruit beyond its ability to support people. |
| 38 | P1 / E+P | Add a worked feedback conversation covering missed commitments, context, a smaller agreement, and a follow-up. | Feedback; people-support contact | The humane principles become usable behavior. |
| 39 | P1 / D | Explain whether developmental feedback affects role assignment or Fellowship continuation, and who decides. | Feedback/participation; authorized people decision holder | Coaching and selection are not silently conflated. |
| 40 | P1 / P | Have participants demonstrate training outcomes: facilitate, scope a project, or conduct a listening conversation. | Training; facilitator | Completion of training means evidence of a skill, not attendance alone. |
| 41 | P1 / E+P | Add one completed organizing-conversation example, including a respectful refusal and an agreed follow-up. | Organizing conversations; organizing lead | New organizers can practice without improvising the whole interaction. |
| 42 | P1 / E+P | Add an event-to-follow-up checklist with a named welcome owner and handoff to the next activity. | Gatherings/starting a circle; organizer | Recruitment does not stop at collecting contact details. |
| 43 | P1 / E+D | Add a campaign brief for actions: purpose, audience, decision maker, intended effect, authority, owner, and follow-up. | Actions; campaign decision holder | A colorful action idea becomes a reasoned proposal tied to strategy. |
| 44 | P2 / E | Turn the reading list into short annotations: source type, question answered, selected section, limit, and verification date. | Resources; editor | Reading serves a decision or skill rather than becoming an entrance exam. |
| 45 | P2 / E+P | Add an optional Movement Action Plan or Spectrum of Allies exercise with a concrete decision afterward. | Training/resources; facilitator | Frameworks inform choices rather than serving as names to recognize. |
| 46 | P1 / D | Assign a steward, decision route, interim instruction, and next review date to each unresolved proposal. | Atlas-linked editorial backlog; handbook steward | “To clarify” items have owners without being mistaken for adopted policy. |
| 47 | P2 / E | Add a short glossary for domain, circle, Steward, objective, KR, metric, tension, and accountability. | Existing overview pages; editor | The same term means the same thing across sections. |
| 48 | P2 / E+P | Test the handbook with a curious reader, a new Fellow, and a local organizer using realistic tasks. | Getting started and relevant guides; onboarding contact | Revisions follow observed confusion and lookup failures. |
| 49 | P2 / D+P | Establish handbook maintenance: owner, change history for substantive rules, source checks, and adoption status. | CONTRIBUTING/live editorial record; steward | Edits remain distinguishable from organizational decisions. |
| 50 | P2 / P | Measure process burden occasionally through a short voluntary check-in and sampled preparation time. | Meetings/learning; facilitator | Unused reports and redundant meetings are removed before adding automation. |

## A worked example of the intended connection

**Illustrative only. All numbers below are invented for teaching; no target, role assignment, or campaign is being adopted.** This example demonstrates operational alignment, not proof of political impact.

| Element | Example |
| --- | --- |
| Strategic hypothesis | More organizers able to run useful gatherings will increase sustained participation needed for a chosen campaign. The campaign still needs its own account of political influence. |
| Ongoing responsibility | A named onboarding role maintains a welcoming, workable entry path. |
| Objective | By the end of a 12-week pilot, help new organizers lead useful first gatherings with less avoidable friction. |
| KR 1 | Increase the share of consenting pilot trainees who facilitate a first gathering within 30 days of training from a historical baseline of 4/10 to at least 7/10 in the pilot cohort. Enroll the cohort early enough for all ten observations to mature by the review date. |
| KR 2 | At least 6/10 pilot trainees meet the agreed facilitation rubric in an observed practice or gathering, compared with the historical baseline of 3/10. Publish the rubric and evidence rules before the pilot. |
| Quality guardrail | Review participant experience and organizer burden. Do not treat a higher completion rate as success if gatherings are unwelcoming or support work is unsustainable. |
| Project | Produce and test a first-meeting guide and a practice session. |
| Acceptance criterion | Another facilitator can run the practice session using the materials and identify remaining limitations. |
| Input to test | Time from a trainee's request for help to receiving useful support, paired with whether the support resolves the issue. |
| Next action | Ask three recent trainees where preparation stalled and record patterns without unnecessary personal detail. |
| Decision rights | The pilot owner can revise materials within the agreed scope; changes to expenditure or public commitments follow documented approvals. |
| Review | Compare results, counts, participant accounts, and support effort. Decide whether to improve, repeat, scale, or stop. Ten participants are too few to support broad causal claims. |

For a small team, these fields can live in one linked project document. A new database is unnecessary to test whether the logic helps.

## Recommended sequence

### First revision: repair contradictions and make a usable path

Address representation rules, metric examples, individual-data language, and the missing escalation route. Add the interim location table and a single worked example. Preserve existing practice/proposal labels. The prose repairs can be drafted immediately; authority, reporting, and data-use changes require actual organizational decisions before being presented as rules.

### Next operating cycle: test the smallest complete system

Use one existing project and its current check-in. Agree its strategic contribution, owner, decision rights, capacity, next actions, and a few meaningful measures. Record decisions and revisit them. Ask whether the process helped people decide and act, and what it cost them in time.

### After the pilot: standardize what proved useful

Update templates, definitions, record locations, and onboarding using the pilot's evidence. Expand across circles only when responsibilities and dependencies are clear. Automate stable, useful steps after their human process works. Revisit the strategic hypothesis when activity grows without corresponding influence or outcomes.

Defer full Holacracy adoption, organization-wide OKR cascading, extensive scoring rubrics, movement-growth simulation, and autonomous AI recommendations unless a concrete problem and capacity justify them. Any of those might eventually help; none is a prerequisite for resolving the current gaps.

## How to tell the revision worked

Use realistic scenarios rather than a survey asking whether the handbook feels clear:

- A newcomer explains the mission, a current campaign's logic, and one way to contribute.
- A Fellow finds an accepted next action and can explain its intended result.
- An organizer distinguishes ordinary initiative from a commitment requiring approval.
- A person assigned to two roles can resolve competing priorities without silently increasing hours.
- Two people calculate the same retention number from the same records.
- A review distinguishes a data problem, a strategic hypothesis, and an individual's support need.
- A concern involving the usual contact reaches an authorized alternative.
- A finished project has a receiving owner, access, and a maintenance decision.

The assessment would change if working teams already have clear, widely understood agreements for these cases. Then the main task would be to document and link those agreements rather than design new ones. On the evidence available, the highest return comes from making those connections explicit while preserving the handbook's welcoming tone and modest process burden.
