import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from './auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...authRoutes,
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/index.vue'),
      meta: {
        title: 'Dashboard'
      }
    }
  ],
})

export default router
