const authRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/AdminLogin.vue'),
    meta: {
      title: 'Admin Login'
    }
  }
];

export default authRoutes;
