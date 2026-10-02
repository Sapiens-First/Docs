<script setup lang="ts">
import { onMounted, ref } from 'vue'

const hint = ref('Ctrl K')
onMounted(() => {
  if (/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)) hint.value = '⌘K'
})

function openSearch() {
  const navBtn = document.querySelector<HTMLButtonElement>('.VPNavBarSearch button')
  if (navBtn) return navBtn.click()
  const mac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)
  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: !mac, metaKey: mac, bubbles: true }))
}
</script>

<template>
  <button type="button" class="sf-search-btn" aria-haspopup="dialog" @click="openSearch">
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square">
      <circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5 21 21" />
    </svg>
    <span class="sf-search-btn__label">Search the handbook…</span>
    <kbd class="sf-search-btn__kbd">{{ hint }}</kbd>
  </button>
</template>
