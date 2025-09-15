<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
const colorMode = useColorMode()
colorMode.value = 'dark'
</script>

<template>
  <router-view />
</template>

<style scoped></style>
