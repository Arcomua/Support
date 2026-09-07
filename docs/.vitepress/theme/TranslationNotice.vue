<script setup lang="ts">
import { useData } from 'vitepress'

const { lang } = useData()
</script>

<template>
  <aside
    v-if="lang === 'en-US'"
    class="translation-notice"
    role="note"
    aria-live="polite"
    aria-label="Translation notice"
  >
    <strong>Translation notice:</strong>
    This English page was translated by an LLM and may contain inaccuracies.
  </aside>
</template>
