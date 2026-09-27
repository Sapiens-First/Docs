import { defineConfig } from 'vitepress'

const base = '/Handbook/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Sapiens First Handbook',
  description: 'How Sapiens First works — the handbook for fellows, organizers and staff.',
  // Served from https://sapiens-first.github.io/Handbook/
  base,
  cleanUrls: true,
  lastUpdated: true,

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
      { text: 'Handbook', link: '/guide/', activeMatch: '/guide/' },
      { text: 'sapiensfirst.org', link: 'https://sapiensfirst.org' }
    ],

    sidebar: [
      {
        text: 'Handbook',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      }
    ],

    search: { provider: 'local' },

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
  }
})
