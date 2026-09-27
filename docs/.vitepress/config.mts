import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { handbookContainers } from './containers'

const base = '/Handbook/'

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: 'Sapiens First Handbook',
  description: 'How Sapiens First works — the handbook for fellows, organizers and staff.',
  // Served from https://sapiens-first.github.io/Handbook/
  base,
  cleanUrls: true,
  lastUpdated: true,

  markdown: {
    config: (md) => handbookContainers(md)
  },

  // Reading time for the page eyebrow, and no "On this page" box on pages too
  // short to need one (fewer than three sections).
  transformPageData(pageData, { siteConfig }) {
    if (pageData.frontmatter.layout === 'home') return
    const src = readFileSync(join(siteConfig.srcDir, pageData.relativePath), 'utf8')
    const words = src.replace(/^---[\s\S]*?---/, '').split(/\s+/).filter(Boolean).length
    pageData.frontmatter.readingTime ??= Math.max(1, Math.round(words / 220))
    if (pageData.frontmatter.outline === undefined && (src.match(/^## /gm)?.length ?? 0) < 3) {
      pageData.frontmatter.outline = false
    }
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
      { text: 'Handbook', link: '/guide/', activeMatch: '/(guide|strategy|organization|work|learning|practices)/' },
      { text: 'Atlas', link: 'https://sapiensfirst.org/atlas' },
      { text: 'Website', link: 'https://sapiensfirst.org' }
    ],

    sidebar: [
      {
        text: 'Start here',
        collapsed: false,
        items: [
          { text: 'Welcome', link: '/guide/' },
          { text: 'Getting started', link: '/guide/getting-started' },
          { text: 'Being a Fellow', link: '/guide/fellowship' },
          { text: 'Fellowship agreement', link: '/guide/agreement' },
          { text: 'Glossary', link: '/guide/glossary' },
        ]
      },
      {
        text: 'How we make change',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/strategy/' },
          { text: 'Learning resources', link: '/strategy/resources' },
        ]
      },
      {
        text: 'How we organize',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/organization/' },
          { text: 'Values and expectations', link: '/organization/values' },
          { text: 'Ways to participate', link: '/organization/participation' },
          { text: 'Roles and circles', link: '/organization/roles-and-circles' },
          { text: 'Making decisions', link: '/organization/decisions' },
        ]
      },
      {
        text: 'How we get things done',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/work/' },
          { text: 'Planning a project', link: '/work/projects' },
          { text: 'Planning your week', link: '/work/weekly-work' },
          { text: 'Meetings and updates', link: '/work/meetings-and-updates' },
          { text: 'Templates', link: '/work/templates' },
        ]
      },
      {
        text: 'How we learn and improve',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/learning/' },
          { text: 'Metrics and learning', link: '/learning/metrics' },
          { text: 'Reviewing metrics', link: '/learning/reviewing-metrics' },
          { text: 'Atlas, metrics, and AI', link: '/learning/atlas-and-ai' },
          { text: 'Feedback and development', link: '/learning/feedback' },
        ]
      },
      {
        text: 'Practical guides',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/practices/' },
          { text: 'Starting a circle', link: '/practices/starting-a-circle' },
          { text: 'Gatherings', link: '/practices/gatherings' },
          { text: 'Organizing conversations', link: '/practices/organizing-conversations' },
          { text: 'Training and facilitation', link: '/practices/training' },
          { text: 'Peaceful actions', link: '/practices/actions' },
        ]
      },
    ],

    search: { provider: 'local', options: { detailedView: true } },

    externalLinkIcon: true,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sapiens-First/Handbook' }
    ],

    editLink: {
      pattern: 'https://github.com/Sapiens-First/Handbook/edit/main/docs/:path',
      text: 'Suggest an edit'
    },

    outline: { level: [2, 3], label: 'On this page' },

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
