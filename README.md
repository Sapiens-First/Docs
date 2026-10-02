# Sapiens First Handbook

The shared handbook for members, organizers, Fellows, staff, and people curious about the movement. Start with the [Introduction](docs/introduction/index.md), [Getting involved](docs/introduction/getting-involved.md), or [Where to start as an organizer](docs/introduction/getting-involved.md#where-to-start-as-an-organizer).

Built with [VitePress](https://vitepress.dev) for [GitHub Pages](https://sapiens-first.github.io/docs/). [Atlas](https://sapiensfirst.org/atlas) holds current governance, projects, priorities, and owners; the handbook explains the concepts and practices behind them.

## Incremental handbook implementation

The new structure follows [HANDBOOK-OUTLINE.md](maintenance/HANDBOOK-OUTLINE.md). See [implementation progress](maintenance/implementation-progress.md), [decisions](maintenance/decisions.md), and [content map](maintenance/content-map.md). Legacy pages have been retired; their routes redirect to the new pages via `handbook-data/redirects.json`. Start with the [Introduction](docs/introduction/index.md). The `10-2 content additions/` directory supplies helpful role rubrics, tech notes, and source diagrams.

Published diagrams use SVG under `docs/public/diagrams/`; [STYLE-GUIDE.md](STYLE-GUIDE.md#diagrams-and-visuals) defines the standard. Run `npm run diagrams:check` for asset checks; `npm run docs:check` includes them. Run `node --test scripts/handbook-*.test.mjs` for TOC/reference fixtures; CI includes both checks. The ordered contents live in `handbook-data/toc.json`; canonical rubric blocks are included in HTML and Markdown exports. See CONTRIBUTING for the authoring syntax.

## Repository layout

```text
docs/                     Published handbook
  index.md                Site home
  introduction/           0 Introduction: welcome, how the handbook works, getting involved
  dna/                    1 DNA: story, strategy, culture, structure
  leadership/             2 Leadership: culture, planning, people, facilitation
  staff/                  3 Staff: expectations, compensation, development
  appendices/             A Reference materials (policies, templates, field guides) and D Glossary
  further-reading/        B Further Reading
  citations/              C Citations
  public/                 Shared images and icons
  .vitepress/             Navigation, theme, generated build output
archive/sources/          Unchanged input documents; not built into the site
.github/workflows/        Existing GitHub Pages deployment
CONTRIBUTING.md           Writing conventions and maintenance guidance
```

Top-level directories:

- Root: `README.md`, `CONTRIBUTING.md`, `STYLE-GUIDE.md` and build configuration only.
- `docs/`: published handbook content, and nothing else.
- `handbook-data/`: the ordered table of contents (`toc.json`) and other data the build reads.
- `scripts/`: validators, TOC/reference tooling and their tests, and the book builder.
- `maintenance/`: how the handbook is made: `HANDBOOK-OUTLINE.md`, `HANDBOOK-IMPLEMENTATION-PLAN.md`, decisions, the content map, implementation progress and the file-structure audit.
- `maintenance/history/`: superseded plans and reviews kept for provenance, unchanged.
- `archive/`: unchanged original input documents (`archive/sources/`, including the original movement guide and Fellowship handbook with embedded images and dated material). See [the content map](archive/README.md) for where material moved and what still needs clarification.
- `10-2 content additions/`: October 2 input notes, rubrics and source diagrams, kept until reconciled with the handbook; published diagram copies live in `docs/public/diagrams/`.

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

The build also writes `llms.txt`, `llms-full.md`, `llms-full.txt`, a `sitemap.xml`, and a raw-Markdown twin of every page (for example `leadership/strategic-planning.md` next to `leadership/strategic-planning.html`), plus redirect stubs for retired legacy routes, for LLMs and other tools that read the site directly. See "Metadata and machine-readable files" in [CONTRIBUTING.md](CONTRIBUTING.md).

## Editing

Edit Markdown under `docs/`. Use lowercase, hyphenated filenames and relative `.md` links so content is navigable in both GitHub and VitePress. Register new numbered pages in `handbook-data/toc.json`; the sidebar and Handbook menu are generated from it, grouped by chapter (see [CONTRIBUTING.md](CONTRIBUTING.md)). Link new pages from their chapter landing page or from [0.2.5 Find anything](docs/introduction/how-the-handbook-works.md#find-anything). When you move or retire a page, add its old route to `handbook-data/redirects.json`.

## Deployment

Every push to `main` builds and deploys through `.github/workflows/deploy.yml`. Local edits and builds do not publish the site.
