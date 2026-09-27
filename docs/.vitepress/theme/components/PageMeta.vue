<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

// Eyebrow above each page title: which section you're in, how long the page
// takes to read, and (optionally, via `audience:` frontmatter) who it's for.
const { page, frontmatter, theme } = useData()

const toLink = (relativePath: string) =>
  '/' + relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')

const section = computed(() => {
  const here = toLink(page.value.relativePath)
  const group = (theme.value.sidebar ?? []).find((g: any) =>
    g.items?.some((i: any) => i.link === here)
  )
  return group?.text
})
</script>

<template>
  <p v-if="section || frontmatter.readingTime" class="sf-page-meta">
    <span v-if="section">{{ section }}</span>
    <span v-if="frontmatter.readingTime">{{ frontmatter.readingTime }} min read</span>
    <span v-if="frontmatter.audience" class="sf-audience">For {{ frontmatter.audience }}</span>
  </p>
</template>
