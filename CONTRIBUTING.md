# Editing the handbook

The handbook explains how Sapiens First works. Write for someone who wants to participate and may be encountering the organization for the first time.

## Put information in the right place

| Information | Home |
| --- | --- |
| Shared definitions, protocols, expectations, and repeatable guides | Handbook under `docs/` |
| Current roles, owners, governance, priorities, and work | Atlas or the live records linked from it |
| Current policy recommendations and campaign materials | Relevant Sapiens First website pages, linked from the handbook |
| Historical source material and original meeting notes | `archive/sources/`, outside the published site |
| Repository setup and contributor guidance | Root README and this file |

A handbook page may explain what a project record contains. It should link to the current records rather than maintaining a second project register. Examples should be clearly illustrative.

## Organize pages by topic

Use the existing six folders: `guide`, `strategy`, `organization`, `work`, `learning`, and `practices`. Put a section overview in `index.md`. Use short, lowercase, hyphenated filenames for individual topics.

Create a page when a reader would reasonably look for that topic on its own. Keep related details together; avoid a deep folder tree or a separate file for every paragraph. Store shared images in `docs/public/`.

Add each new page to the sidebar in `docs/.vitepress/config.mts` and link it from the relevant overview or reading path. Use relative `.md` links in Markdown so readers can navigate the repository as well as the site. Keep the `/Handbook/` base path in the site configuration rather than hard-coding it into content links.

## Write with cascading detail

Start with a short explanation and the action or idea the reader needs. Put essential expectations in ordinary text. Use expandable sections for optional detail, worked examples, and explanations for people holding responsibilities.

```md
# Topic

A short introduction that explains why this matters.

## Get started

The practical steps or shared expectations.

::: details For fellows and role holders

Additional context for people doing the work.
:::

**Read more:** [Relevant guide](relative-page.md)
```

Use direct, welcoming language and concrete examples. Define unfamiliar terms where they first appear. Prefer a visible definition or an expandable section to hover-only explanations. Keep links next to the topic they support.

## Distinguish practice from proposals

Preserve established expectations from the source material. Label new governance rules, schemas, evaluation processes, and other unapproved organizational requirements as proposals.

```md
::: info Proposal
Explain the proposed practice and what still needs to be settled.
:::
```

Use **To clarify** for a specific unresolved decision. Explain what people should do in the meantime. An editorial rewrite does not itself adopt a policy or change decision rights.

Once a proposal is adopted, update its wording and the relevant Atlas records through the organization's agreed decision process. Keep actual assignments and targets in the live records.

## Preserve useful context

Check the [source map](archive/README.md) before removing a topic. Historical schedules and meeting notes belong in the source archive, not the general onboarding path. Do not silently edit the Fellowship agreement while editing adjacent prose.

When adding a factual claim or external resource, verify it and link to the relevant source. Distinguish organizational beliefs, strategic assumptions, and research findings.

## Check before publishing

Run `npm run docs:build`. VitePress checks Markdown compilation and internal page links. Also check new fragment links, navigation entries, expandable sections, and the page at narrow widths when browser testing is available.

Do not commit `node_modules`, `.vitepress/cache`, or `.vitepress/dist`. A push to `main` triggers the existing GitHub Pages workflow; a local build does not publish anything.
