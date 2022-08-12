import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/home/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/LoginView.vue')
  },
  {
    path: '/home/sub-index',
    name: 'index',
    component: () => import('../views/home/sub-index/Sub-indexView.vue')
  },
  {
    path: '/home/datagl',
    name: 'datagl',
    component: () => import('../views/home/datagl/DataglView.vue')
  },
  {
    path: '/home/imfogl',
    name: 'imfogl',
    component: () => import('../views/home/imfogl/ImfoglView.vue')
  },
  {
    path: '/home/usergl',
    name: 'usergl',
    component: () => import('../views/home/usergl/UserglView.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
