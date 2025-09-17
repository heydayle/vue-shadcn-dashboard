<script setup lang="ts">
import { Paintbrush } from 'lucide-vue-next'
</script>
<template>
    <UiDropdownMenu>
        <UiDropdownMenuTrigger>
            <UiButton variant="outline" size="icon"><Paintbrush/></UiButton>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent class="p-4">
            <ShareThemesColorMode />
            <ShareThemesCustomMode />
        </UiDropdownMenuContent>
    </UiDropdownMenu>
</template>