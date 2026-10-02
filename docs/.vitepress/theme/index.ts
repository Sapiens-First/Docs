import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import PageMeta from './components/PageMeta.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      // "Handbook" tag hung off the Sapiens First wordmark
      'nav-bar-title-after': () => h('span', { class: 'sf-title-tag' }, 'Handbook'),
      // section · reading time · audience, above each page title
      'doc-before': () => h(PageMeta)
    })
}
