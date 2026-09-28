import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { handbookContainers } from './containers'
import { generateLlmsFiles } from './llms'

const base = '/docs/'
const siteHostname = 'https://sapiens-first.github.io/docs/'

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: 'Sapiens First Handbook',
  description: 'How Sapiens First works — the handbook for fellows, organizers and staff.',
  // Served from https://sapiens-first.github.io/docs/. When the site moves to
  // docs.sapiensfirst.org, set `base` to '/' and add docs/public/CNAME.
  base,
  cleanUrls: true,
  lastUpdated: true,

  // Advisory until the site has its own domain: robots.txt only takes
  // effect at a host root, and GitHub Pages serves this site under /docs/.
  sitemap: { hostname: siteHostname },

  markdown: {
    config: (md) => handbookContainers(md)
  },

  // Reading time for the page eyebrow, no "On this page" box on pages too
  // short to need one (fewer than three sections), and the page's own
  // `last_updated` frontmatter (not git history) driving the footer's
  // "Last updated" date.
  transformPageData(pageData, { siteConfig }) {
    if (pageData.frontmatter.layout === 'home') return
    const src = readFileSync(join(siteConfig.srcDir, pageData.relativePath), 'utf8')
    const words = src.replace(/^---[\s\S]*?---/, '').split(/\s+/).filter(Boolean).length
    pageData.frontmatter.readingTime ??= Math.max(1, Math.round(words / 220))
    if (pageData.frontmatter.outline === undefined && (src.match(/^## /gm)?.length ?? 0) < 3) {
      pageData.frontmatter.outline = false
    }
    // YAML parses an unquoted `YYYY-MM-DD` scalar as a Date, not a string,
    // so frontmatter `last_updated` can arrive as either depending on how
    // it was written; accept both.
    const lastUpdated = pageData.frontmatter.last_updated
    let time: number | undefined
    if (lastUpdated instanceof Date && !Number.isNaN(lastUpdated.getTime())) {
      time = lastUpdated.getTime()
    } else if (typeof lastUpdated === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(lastUpdated)) {
      const parsed = new Date(`${lastUpdated}T00:00:00Z`).getTime()
      if (!Number.isNaN(parsed)) time = parsed
    }
    if (time !== undefined) pageData.lastUpdated = time
  },

  // Canonical link tag per page, using frontmatter `canonical` when a page
  // has migrated to the new schema, falling back to its clean-URL path.
  transformHead({ pageData }) {
    if (pageData.frontmatter.layout === 'home') return
    const fallback = `/${pageData.relativePath}`
      .replace(/(^|\/)index\.md$/, '$1')
      .replace(/\.md$/, '')
    const canonical = pageData.frontmatter.canonical || fallback
    return [['link', { rel: 'canonical', href: `${siteHostname.replace(/\/$/, '')}${canonical}` }]]
  },

  // Writes llms.txt, llms-full.md, llms-full.txt, and a raw-Markdown twin of
  // every page (docs/.vitepress/llms.ts) once the static build has run.
  async buildEnd(config) {
    await generateLlmsFiles(config)
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${base}favicon-32x32.png` }],
    ['link', { rel: 'apple-touch-icon', href: `${base}apple-touch-icon.png` }],
    ['meta', { name: 'theme-color', content: '#f8f3eb' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,900;1,9..40,400&display=swap'
    }]
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Sapiens First',

    nav: [
      { text: 'Handbook', link: '/guide/', activeMatch: '/(guide|strategy|organization|work|learning|practices|find)/' },
      { text: 'Find anything', link: '/find' },
      { text: 'Atlas', link: 'https://sapiensfirst.org/atlas' },
      { text: 'Website', link: 'https://sapiensfirst.org' }
    ],

    // Grouped by frontmatter `section` (see AI-READABILITY-PLAN.md), in the
    // fixed section order: Start here, About Sapiens First, People and
    // organization, Running the work, Field guides, Reference.
    sidebar: [
      {
        text: 'Start here',
        collapsed: false,
        items: [
          { text: 'Welcome', link: '/guide/' },
          { text: 'First steps', link: '/guide/getting-started' },
          { text: 'Find anything', link: '/find' },
          { text: 'Glossary', link: '/guide/glossary' },
        ]
      },
      {
        text: 'About Sapiens First',
        collapsed: false,
        items: [
          { text: 'Mission and strategy', link: '/strategy/' },
          { text: 'Values', link: '/organization/values' },
          { text: 'Reading list', link: '/strategy/resources' },
        ]
      },
      {
        text: 'People and organization',
        collapsed: false,
        items: [
          { text: "How we're organized", link: '/organization/' },
          { text: 'Ways to participate', link: '/organization/participation' },
          { text: 'The Fellowship', link: '/guide/fellowship' },
          { text: 'Fellowship agreement', link: '/guide/agreement' },
          { text: 'Roles and circles', link: '/organization/roles-and-circles' },
          { text: 'Decisions', link: '/organization/decisions' },
        ]
      },
      {
        text: 'Running the work',
        collapsed: false,
        items: [
          { text: 'How we manage work', link: '/work/' },
          { text: 'Projects', link: '/work/projects' },
          { text: 'Weekly planning', link: '/work/weekly-work' },
          { text: 'Meetings and updates', link: '/work/meetings-and-updates' },
          { text: 'Measuring and learning', link: '/learning/' },
          { text: 'Metrics', link: '/learning/metrics' },
          { text: 'Strategic hypotheses', link: '/learning/strategic-hypotheses' },
          { text: 'Metric reviews', link: '/learning/reviewing-metrics' },
          { text: 'Feedback and development', link: '/learning/feedback' },
        ]
      },
      {
        text: 'Field guides',
        collapsed: false,
        items: [
          { text: 'Overview of field guides', link: '/practices/' },
          { text: 'Starting a local circle', link: '/practices/starting-a-circle' },
          { text: 'Gatherings', link: '/practices/gatherings' },
          { text: 'Organizing conversations', link: '/practices/organizing-conversations' },
          { text: 'Training organizers', link: '/practices/training' },
          { text: 'Peaceful actions', link: '/practices/actions' },
        ]
      },
      {
        text: 'Reference',
        collapsed: false,
        items: [
          { text: 'Glossary', link: '/guide/glossary' },
          { text: 'Templates', link: '/work/templates' },
          { text: 'Atlas and AI', link: '/learning/atlas-and-ai' },
        ]
      },
    ],

    search: { provider: 'local', options: { detailedView: true } },

    externalLinkIcon: true,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sapiens-First/docs' }
    ],

    editLink: {
      pattern: 'https://github.com/Sapiens-First/docs/edit/main/docs/:path',
      text: 'Suggest an edit'
    },

    outline: { level: [2, 3], label: 'On this page' },

    // Rendered from frontmatter `last_updated` (set on pageData.lastUpdated
    // in transformPageData above), not from git history.
    lastUpdated: {
      text: 'Last updated',
      formatOptions: { dateStyle: 'long', timeZone: 'UTC' }
    },

    footer: {
      message: 'Learn · Organize · Act',
      copyright: 'Sapiens First'
    }
  },

  // Flowcharts in ```mermaid blocks, drawn in the site's paper-and-ink palette
  mermaid: {
    theme: 'base',
    themeVariables: {
      fontFamily: 'DM Sans, sans-serif',
      fontSize: '15px',
      primaryColor: '#ffffff',
      primaryTextColor: '#111111',
      primaryBorderColor: '#111111',
      lineColor: '#111111',
      secondaryColor: '#ffd60a',
      tertiaryColor: '#f0e8dc',
      clusterBkg: '#f0e8dc',
      clusterBorder: '#111111',
      edgeLabelBackground: '#f8f3eb'
    },
    flowchart: { curve: 'basis', padding: 14, htmlLabels: true }
  },
  mermaidPlugin: { class: 'sf-diagram' }
}))
