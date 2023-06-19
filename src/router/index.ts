import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
