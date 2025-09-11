<template>
  <MagicBento
    :text-auto-hide="true"
    :enable-stars="true"
    :enable-spotlight="true"
    :enable-border-glow="true"
    :enable-tilt="true"
    :enable-magnetism="true"
    :click-effect="true"
    :spotlight-radius="300"
    :particle-count="12"
    glow-color="132, 0, 255"
  />
</template>

<script setup lang="ts">
import MagicBento from '@/components/vuebit/MagicBento/MagicBento.vue'
</script>
