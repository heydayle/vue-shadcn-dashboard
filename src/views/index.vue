<template>
  <div class="home-page">
    <header class="header">
      <h1>Welcome to the CRM Dashboard</h1>
      <p class="subtitle">Manage your customers, sales, and analytics in one place.</p>
    </header>
    <section class="quick-actions">
      <h2>Quick Actions</h2>
      <div class="actions">
        <button @click="goTo('customers')">View Customers</button>
        <button @click="goTo('leads')">Manage Leads</button>
        <button @click="goTo('reports')">View Reports</button>
      </div>
    </section>
    <section class="overview">
      <h2>Overview</h2>
      <div class="stats">
        <div class="stat">
          <span class="stat-value">128</span>
          <span class="stat-label">Customers</span>
        </div>
        <div class="stat">
          <span class="stat-value">34</span>
          <span class="stat-label">Leads</span>
        </div>
        <div class="stat">
          <span class="stat-value">$12,400</span>
          <span class="stat-label">Monthly Revenue</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function goTo(route) {
  router.push({ name: route })
}
</script>

<style scoped>
.home-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.subtitle {
  color: #666;
}

.quick-actions {
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.actions button {
  padding: 0.75rem 1.5rem;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
}

.actions button:hover {
  background: #1d4ed8;
}

.overview .stats {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}

.stat {
  background: #f3f4f6;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  flex: 1;
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: bold;
}

.stat-label {
  color: #888;
  margin-top: 0.5rem;
  display: block;
}
</style>
