import {RouteRecordRaw, createRouter, createWebHistory} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    name: 'Register',
    path: '/register',
    component: () => import('../views/Register.vue')
  },
  {
    name: 'SignIn',
    path: '/signin',
    component: () => import('../views/SignIn.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router