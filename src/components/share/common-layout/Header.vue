<script setup lang="ts">
</script>

<template>
  <header
    class="flex items-center justify-between px-8 py-4 bg-background"
  >
    <slot />
    <div class="grid grid-cols-3 gap-2">
      <ShareThemesToggleColorMode />
      <ShareThemesThemeDropdown />
      <ShareUserDropdown />
    </div>
  </header>
</template>
