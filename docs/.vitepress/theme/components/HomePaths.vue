<script setup lang="ts">
import { useData, withBase } from 'vitepress'

// "If you are… start here" panel in the home hero, fed by `paths:` in index.md.
const { frontmatter } = useData()
</script>

<template>
  <nav v-if="frontmatter.paths" class="sf-paths" aria-labelledby="sf-paths-title">
    <p id="sf-paths-title" class="sf-paths-title">Find your starting point</p>
    <ul>
      <li v-for="p in frontmatter.paths" :key="p.link">
        <a :href="withBase(p.link)">
          <span class="sf-paths-who">{{ p.who }}</span>
          <span class="sf-paths-where">{{ p.text }} →</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
