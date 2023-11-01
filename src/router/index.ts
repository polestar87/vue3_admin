import { createRouter, createWebHashHistory } from 'vue-router'
import { contantRoutes } from './routes';
let router = createRouter({
  history: createWebHashHistory(),
  routes: contantRoutes,
})

export default router;
