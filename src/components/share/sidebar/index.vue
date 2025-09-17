<script lang="ts" setup>
import { useSidebar } from '@/components/ui/sidebar'
import { ChevronsUpDown, User } from 'lucide-vue-next'

const { isMobile, open } = useSidebar()
</script>
<template>
    <UiSidebar collapsible="icon" class="z-50">
        <UiSidebarHeader>
            <UiSidebarMenu>
                <UiSidebarMenuItem>
                    <UiSidebarMenuButton
                        size="lg"
                        class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                        <div
                            class="flex items-center justify-center rounded-lg aspect-square size-8 bg-sidebar-primary text-sidebar-primary-foreground"
                        >
                            <User />
                        </div>
                        <div class="grid flex-1 text-sm leading-tight text-left">
                            <span class="font-semibold truncate">Team name</span>
                            <span class="text-xs truncate">Description</span>
                        </div>
                        <ChevronsUpDown class="ml-auto" />
                    </UiSidebarMenuButton>
                </UiSidebarMenuItem>
            </UiSidebarMenu>
        </UiSidebarHeader>

        <!-- <UiSidebarContent>
            Content
        </UiSidebarContent> -->

        <!-- <UiSidebarFooter>
            Footer
        </UiSidebarFooter> -->

        <UiSidebarRail />
    </UiSidebar>
  </template>