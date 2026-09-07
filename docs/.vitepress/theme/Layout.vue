<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import TranslationNotice from './TranslationNotice.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <TranslationNotice />
    </template>
    <template #doc-before>
      <TranslationNotice />
    </template>
  </Layout>
</template>
