import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from './auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...authRoutes,
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/layouts/default.vue'),
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: () => import('@/views/index.vue'),
        }
      ]
    }
  ],
})

export default router
