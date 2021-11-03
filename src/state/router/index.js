import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/modules/login/Login'
import Timeline from '@/modules/timeline/Timeline'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'timeline',
    component: Timeline
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
