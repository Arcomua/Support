<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const storageKey = 'arcomua-llm-translation-notice-dismissed'
const isReady = ref(false)
const isDismissed = ref(false)

const isVisible = computed(() => {
  return isReady.value && lang.value === 'en-US' && !isDismissed.value
})

onMounted(() => {
  try {
    isDismissed.value = localStorage.getItem(storageKey) === 'true'
  } catch {
    // Keep the notice dismissible for the current page if storage is unavailable.
  }

  isReady.value = true
})

function dismissNotice() {
  isDismissed.value = true

  try {
    localStorage.setItem(storageKey, 'true')
  } catch {
    // The in-memory state still hides the notice for the current page.
  }
}
</script>

<template>
  <aside
    v-if="isVisible"
    class="translation-notice"
    role="status"
    aria-live="polite"
    aria-label="Translation notice"
  >
    <div class="translation-notice__content">
      <strong>Translation notice</strong>
      <p>This page was translated by an LLM and may contain inaccuracies.</p>
    </div>
    <button
      class="translation-notice__close"
      type="button"
      aria-label="Dismiss translation notice"
      @click="dismissNotice"
    >
      <span aria-hidden="true">×</span>
    </button>
  </aside>
</template>
