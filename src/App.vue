<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { THEMES, useThemeStore } from '@/stores/theme'
import { Suspense } from 'vue'

const themeStore = useThemeStore()
const { theme: t, radius } = storeToRefs(themeStore)

watchEffect(() => {
  document.documentElement.classList.remove(...THEMES.map(theme => `theme-${theme}`))
  document.documentElement.classList.add(`theme-${t.value}`)
  document.documentElement.style.setProperty('--radius', `${radius.value}rem`)
})

</script>

<template>
  <UiSonner />
  <Suspense>
    <router-view />
    <template #fallback>
     Loading
    </template>
  </Suspense>
  
</template>

<style scoped></style>
