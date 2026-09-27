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
        ]
      },
      {
        text: 'How we make change',
        collapsed: true,
        items: [
          { text: 'Mission and approach', link: '/strategy/' },
          { text: 'Learning resources', link: '/strategy/resources' },
        ]
      },
      {
        text: 'How we organize',
        collapsed: true,
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
        collapsed: true,
        items: [
          { text: 'Work and objectives', link: '/work/' },
          { text: 'Planning a project', link: '/work/projects' },
          { text: 'Planning your week', link: '/work/weekly-work' },
          { text: 'Meetings and updates', link: '/work/meetings-and-updates' },
          { text: 'Templates', link: '/work/templates' },
        ]
      },
      {
        text: 'How we learn and improve',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/learning/' },
          { text: 'Metrics and learning', link: '/learning/metrics' },
          { text: 'Feedback and development', link: '/learning/feedback' },
        ]
      },
      {
        text: 'Practical guides',
        collapsed: true,
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
