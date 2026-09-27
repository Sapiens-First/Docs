import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Sapiens First Handbook',
  description: 'The Sapiens First handbook',
  // Served from https://sapiens-first.github.io/Handbook/
  base: '/Handbook/',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Handbook', link: '/guide/' }
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
      pattern: 'https://github.com/Sapiens-First/Handbook/edit/main/docs/:path'
    }
  }
})
