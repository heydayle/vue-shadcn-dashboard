const authRoutes = [
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('@/views/auth/AdminLogin.vue'),
    meta: {
      title: 'Admin Login'
    }
  }
];

export default authRoutes;
