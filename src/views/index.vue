<template>
  <div class="px-8">
    <div>
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <p class="text-muted-foreground">All data overview</p>
    </div>
    <div class="my-4">
      <UiTabs default-value="analytics" class="w-[400px]">
        <UiTabsList>
          <UiTabsTrigger value="analytics">
            Analytics
          </UiTabsTrigger>
          <UiTabsTrigger value="reports">
            Reports
          </UiTabsTrigger>
          <UiTabsTrigger value="users">
            Users
          </UiTabsTrigger>
          <UiTabsTrigger value="products">
            Products
          </UiTabsTrigger>
        </UiTabsList>
        <UiTabsContent value="analytics">
          Make changes to your analytics here.
        </UiTabsContent>
        <UiTabsContent value="reports">
          Change your reports here.
        </UiTabsContent>
      </UiTabs>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
