<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const items = [
  { title: 'Overview', href: '/' },
  { title: 'Customers', href: '/' },
  { title: 'Products', href: '/' },
  { title: 'Settings', href: '/' },
]
</script>

<template>
  <header
    class="flex items-center justify-between px-8 py-4 bg-background border-b border-gray-200"
  >
    <div>
      <nav class="flex items-center space-x-4 lg:space-x-6 mx-6 mx-6">
        <router-link
          v-for="(item, index) in items"
          :key="index"
          :to="item.href"
          class="text-sm font-medium transition-colors hover:text-primary"
        >
          {{ item.title }}
        </router-link>
      </nav>
    </div>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </header>
</template>
