# Sapiens First Handbook

Built with [VitePress](https://vitepress.dev). Live at https://sapiens-first.github.io/Handbook/

## Local development

```sh
npm install
npm run docs:dev      # dev server with hot reload
npm run docs:build    # production build -> docs/.vitepress/dist
npm run docs:preview  # serve the production build locally
```

## Adding content

Pages are Markdown files in `docs/`. Register new pages in the sidebar in `docs/.vitepress/config.mts`.

## Deployment

Every push to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`.
