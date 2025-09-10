<template>
  <div class="max-w-3xl mx-auto p-8">
    <header class="text-center mb-8">
      <h1 class="text-3xl font-bold">Welcome to the CRM Dashboard</h1>
      <p class="text-gray-500 mt-2">Manage your customers, sales, and analytics in one place.</p>
    </header>
    <section class="mb-8">
      <h2 class="text-xl font-semibold">Quick Actions</h2>
      <div class="flex gap-4 mt-4">
        <button class="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold transition-colors hover:bg-blue-700"
          @click="goTo('customers')">
          View Customers
        </button>
        <button class="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold transition-colors hover:bg-blue-700"
          @click="goTo('leads')">
          Manage Leads
        </button>
        <button class="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold transition-colors hover:bg-blue-700"
          @click="goTo('reports')">
          View Reports
        </button>
      </div>
    </section>
    <section>
      <h2 class="text-xl font-semibold">Overview</h2>
      <div class="flex gap-8 mt-4">
        <div class="bg-gray-100 p-6 rounded-lg text-center flex-1">
          <span class="block text-2xl font-bold">128</span>
          <span class="block text-gray-400 mt-2">Customers</span>
        </div>
        <div class="bg-gray-100 p-6 rounded-lg text-center flex-1">
          <span class="block text-2xl font-bold">34</span>
          <span class="block text-gray-400 mt-2">Leads</span>
        </div>
        <div class="bg-gray-100 p-6 rounded-lg text-center flex-1">
          <span class="block text-2xl font-bold">$12,400</span>
          <span class="block text-gray-400 mt-2">Monthly Revenue</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function goTo(route: string) {
  router.push({ name: route })
}
</script>
