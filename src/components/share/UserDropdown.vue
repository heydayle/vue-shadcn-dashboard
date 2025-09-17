<script setup lang="ts">

</script>
<template>
    <UiDropdownMenu>
    <UiDropdownMenuTrigger>
        <UiAvatar>
        <UiAvatarImage src="https://github.com/unovue.png" alt="@unovue" />
        <UiAvatarFallback>VN</UiAvatarFallback>
        </UiAvatar>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent>
        <UiDropdownMenuLabel>My Account</UiDropdownMenuLabel>
        <UiDropdownMenuSeparator />
        <UiDropdownMenuItem>Profile</UiDropdownMenuItem>
        <UiDropdownMenuItem>Billing</UiDropdownMenuItem>
        <UiDropdownMenuItem>Team</UiDropdownMenuItem>
    </UiDropdownMenuContent>
    </UiDropdownMenu>
</template>