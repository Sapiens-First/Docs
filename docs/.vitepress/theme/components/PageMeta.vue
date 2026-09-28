<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

// Eyebrow above each page title: which section you're in, how long the page
// takes to read, when it was last updated, and (optionally, via
// `audience:` frontmatter) who it's for. Also renders the page's `status`
// (frontmatter) as a badge, with a short callout for statuses that are not
// yet adopted practice.
const { page, frontmatter, theme } = useData()

const toLink = (relativePath: string) =>
  '/' + relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')

// Fallback when a page has no frontmatter `section` yet: look up the group
// that owns this page in the sidebar.
const sidebarSection = computed(() => {
  const here = toLink(page.value.relativePath)
  const group = (theme.value.sidebar ?? []).find((g: any) =>
    g.items?.some((i: any) => i.link === here)
  )
  return group?.text
})

const section = computed(() => frontmatter.value.section || sidebarSection.value)

const STATUS_LABELS: Record<string, string> = {
  adopted: 'Adopted practice',
  proposal: 'Proposal — not current policy',
  draft: 'Draft — still being developed',
  experimental: 'Experimental',
  reference: 'Reference',
}

const STATUS_NOTES: Record<string, string> = {
  adopted: 'Adopted: this describes current Sapiens First practice.',
  proposal: 'Proposal: this describes a possible future practice. It is not current Sapiens First policy.',
  draft: 'Draft: this page is still being developed and may change.',
  experimental: 'Experimental: this practice is being tried, and may not continue.',
}

const status = computed(() => {
  const s = frontmatter.value.status
  return typeof s === 'string' && s in STATUS_LABELS ? s : undefined
})
const statusLabel = computed(() => status.value && STATUS_LABELS[status.value])
// A short callout renders only for statuses that are not (yet) settled
// practice; "adopted" and "reference" get a badge and nothing more (adopted
// also gets a one-line note; see template).
const showCallout = computed(
  () => status.value === 'proposal' || status.value === 'draft' || status.value === 'experimental'
)

const lastUpdated = computed(() => {
  // YAML parses an unquoted `YYYY-MM-DD` scalar as a Date, which VitePress
  // then serializes to the client as a full ISO string (`2026-09-27T00:00:00.000Z`);
  // a page that quotes the value keeps the plain `2026-09-27` string. Accept both.
  const raw = frontmatter.value.last_updated
  if (typeof raw !== 'string') return undefined
  const match = raw.match(/^(\d{4}-\d{2}-\d{2})/)
  if (!match) return undefined
  const d = new Date(`${match[1]}T00:00:00Z`)
  if (Number.isNaN(d.getTime())) return undefined
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
})
</script>

<template>
  <p v-if="section || frontmatter.readingTime || lastUpdated || statusLabel" class="sf-page-meta">
    <span v-if="section">{{ section }}</span>
    <span v-if="frontmatter.readingTime">{{ frontmatter.readingTime }} min read</span>
    <span v-if="lastUpdated">Updated {{ lastUpdated }}</span>
    <span v-if="frontmatter.audience" class="sf-audience">For {{ frontmatter.audience }}</span>
    <span v-if="statusLabel" class="sf-status-badge" :class="`sf-status-${status}`">{{ statusLabel }}</span>
  </p>
  <p v-if="status === 'adopted'" class="sf-status-note">{{ STATUS_NOTES.adopted }}</p>
  <div v-else-if="showCallout" class="sf-status-callout" :class="`sf-status-${status}`">
    <p>{{ STATUS_NOTES[status as string] }}</p>
  </div>
</template>
