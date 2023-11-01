export const contantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue'),
    name: 'Login',
  },
  {
    path: '/',
    component: () => import('@/views/Home/index.vue'),
    name: 'Home',
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]
