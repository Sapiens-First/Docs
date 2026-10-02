# Sapiens First Handbook

The shared handbook for members, organizers, Fellows, staff, and people curious about the movement. Start with [Intro for Supporters](docs/supporters/index.md), [Intro for Members](docs/members/index.md), or [For Organizers](docs/organizers/index.md).

Built with [VitePress](https://vitepress.dev) for [GitHub Pages](https://sapiens-first.github.io/docs/). [Atlas](https://sapiensfirst.org/atlas) holds current governance, projects, priorities, and owners; the handbook explains the concepts and practices behind them.

## Incremental handbook implementation

The new structure follows [HANDBOOK-OUTLINE.md](HANDBOOK-OUTLINE.md). See [implementation progress](maintenance/implementation-progress.md), [decisions](maintenance/decisions.md), and [content map](maintenance/content-map.md). Existing pages remain available while numbered Introduction, Staff, and Appendix A drafts are introduced. Start with the [new Introduction](docs/introduction/index.md). The `10-2 content additions/` directory supplies helpful role rubrics, tech notes, and source diagrams.

Published diagrams use SVG under `docs/public/diagrams/`; [STYLE-GUIDE.md](STYLE-GUIDE.md#diagrams-and-visuals) defines the standard. Run `npm run diagrams:check` for asset checks; `npm run docs:check` includes them.

## Repository layout

```text
docs/                     Published handbook
  index.md                Site home
  find.md                 "Find anything" — common questions routed to their answer
  introduction/           Numbered orientation drafts
  staff/                  Numbered expectations and department guidance drafts
  appendices/reference/   Canonical draft rubrics and agenda
  guide/                  Legacy onboarding, Fellowship, agreement
  strategy/               Mission, theory of change, learning resources
  organization/           Values, participation, roles, decisions
  work/                   Work structure, project practices, templates
  learning/               Metrics, feedback, development
  practices/              Repeatable organizing and training guides
  public/                 Shared images and icons
  .vitepress/             Navigation, theme, generated build output
archive/sources/          Unchanged input documents; not built into the site
.github/workflows/        Existing GitHub Pages deployment
CONTRIBUTING.md           Writing conventions and maintenance guidance
```

The two original root-level filenames now point to the consolidated handbook. Their complete contents are preserved in the archive, including embedded images and dated material. See [the content map](archive/README.md) for where material moved and what still needs clarification.

## Local development

Use Node.js and Python 3 (for SVG validation).

```sh
npm ci
npm run docs:dev
npm run docs:build
npm run docs:preview
npm run docs:check   # validate frontmatter and links; add --warn-only locally
```

The production build is written to `docs/.vitepress/dist`. The site uses the `/docs/` base path. Do not commit generated build files.

The build also writes `llms.txt`, `llms-full.md`, `llms-full.txt`, a `sitemap.xml`, and a raw-Markdown twin of every page (for example `learning/metrics.md` next to `learning/metrics.html`), for LLMs and other tools that read the site directly. See "Metadata and machine-readable files" in [CONTRIBUTING.md](CONTRIBUTING.md).

## Editing

Edit Markdown under `docs/`. Use lowercase, hyphenated filenames and relative `.md` links so content is navigable in both GitHub and VitePress. Add new pages to `docs/.vitepress/config.mts`, in the sidebar group matching the page's frontmatter `section` (the sidebar groups by audience, with Fellows, Stewards, and Leads nested under Organizers — see [CONTRIBUTING.md](CONTRIBUTING.md)), and link them from the relevant overview or from `docs/find.md`.

## Deployment

Every push to `main` builds and deploys through `.github/workflows/deploy.yml`. Local edits and builds do not publish the site.
