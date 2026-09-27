# Sapiens First Handbook

The shared handbook for members, organizers, Fellows, staff, and people curious about the movement. Start with [Welcome](docs/guide/index.md).

Built with [VitePress](https://vitepress.dev) for [GitHub Pages](https://sapiens-first.github.io/Handbook/). [Atlas](https://sapiensfirst.org/atlas) holds current governance, projects, priorities, and owners; the handbook explains the concepts and practices behind them.

## Repository layout

```text
docs/                     Published handbook
  index.md                Site home
  guide/                  Welcome, onboarding, Fellowship, agreement
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

```sh
npm ci
npm run docs:dev
npm run docs:build
npm run docs:preview
```

The production build is written to `docs/.vitepress/dist`. The site uses the `/Handbook/` base path. Do not commit generated build files.

## Editing

Edit Markdown under `docs/`. Use lowercase, hyphenated filenames and relative `.md` links so content is navigable in both GitHub and VitePress. Add new pages to `docs/.vitepress/config.mts` and link them from the relevant section index. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Deployment

Every push to `main` builds and deploys through `.github/workflows/deploy.yml`. Local edits and builds do not publish the site.
