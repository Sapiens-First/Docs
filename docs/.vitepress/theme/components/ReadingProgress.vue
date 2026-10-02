<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute, useData, withBase } from 'vitepress'

// mode 'bar': thin coral progress bar under the sticky nav (decorative).
// mode 'top': "Back to top" link for long pages.
const props = defineProps<{ mode: 'bar' | 'top' }>()
const route = useRoute()
const { frontmatter, page } = useData()

const progress = ref(0)
const scrollable = ref(false)
const long = ref(false)
let raf = 0

function measure() {
  raf = 0
  const doc = document.querySelector('.vp-doc') as HTMLElement | null
  if (!doc || frontmatter.value.layout === 'home' || page.value.isNotFound) {
    scrollable.value = false
    long.value = false
    return
  }
  const vh = window.innerHeight
  const rect = doc.getBoundingClientRect()
  const total = rect.height - vh
  const top = rect.top + window.scrollY
  const pageScrolls = document.documentElement.scrollHeight > vh + 8
  scrollable.value = pageScrolls && total > 40
  long.value = rect.height > vh * 3
  if (!scrollable.value) { progress.value = 0; return }
  // 0 when the article top reaches the viewport top, 1 when its bottom reaches the viewport bottom
  const p = (window.scrollY - top) / (rect.height - vh)
  progress.value = Math.min(1, Math.max(0, p))
}
function schedule() {
  if (!raf) raf = requestAnimationFrame(measure)
}
function toTop() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule, { passive: true })
  nextTick(schedule)
})
onUnmounted(() => {
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
  if (raf) cancelAnimationFrame(raf)
})
watch(() => route.path, () => {
  progress.value = 0
  scrollable.value = false
  long.value = false
  nextTick(() => setTimeout(schedule, 60))
})
</script>

<template>
  <div v-if="props.mode === 'bar'" class="sf-progress" :class="{ on: scrollable }" aria-hidden="true">
    <span class="sf-progress-fill" :style="{ transform: `scaleX(${progress})` }"></span>
  </div>
  <p v-else-if="long" class="sf-totop">
    <a :href="withBase(route.path)" @click.prevent="toTop">Back to top ↑</a>
  </p>
</template>
