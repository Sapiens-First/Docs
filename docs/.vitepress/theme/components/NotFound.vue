<script setup lang="ts">
import { withBase } from 'vitepress'
import SearchButton from './SearchButton.vue'
</script>

<template>
  <div class="sf-404">
    <p class="sf-404__code">404</p>
    <h1 class="sf-404__title">That page isn't here.</h1>
    <p class="sf-404__text">The link may be old or mistyped. Search for what you need, or start from the top.</p>
    <SearchButton />
    <p class="sf-404__links">
      <a :href="withBase('/')">Home</a>
      <a :href="withBase('/introduction/')">Start here</a>
    </p>
  </div>
</template>
