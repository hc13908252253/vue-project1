import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/LoginView.vue')
  },
  {
    path: '/home',//布局首页
    name: 'home',
    component: () => import('../views/home/HomeView.vue'),
    children:[
      {
        path: '/sub-index',//菜单首页
        name: 'sub-index',
        component: () => import('../views/home/sub-index/Sub-indexView.vue')
      },
      {
        path: '/datagl',//数据管理
        name: 'datagl',
        component: () => import('../views/home/datagl/DataglView.vue')
      },
      {
        path: '/imfogl',//信息管理
        name: 'imfogl',
        component: () => import('../views/home/imfogl/ImfoglView.vue'),
        children:[
          {
            path: '/list',//信息列表
            name: 'imfolist',
            component: () => import('../views/home/imfogl/listView.vue')
          }
        ]
      },
      {
        path: '/usergl',//用户管理
        name: 'usergl',
        component: () => import('../views/home/usergl/UserglView.vue'),
        children:[
          {path:'/status',//用户统计
          name:'userstatus',
          component:()=>import('../views/home/usergl/statusView.vue'),
        },
          {path:'/role',//角色统计
          name:'userrole',
          component:()=>import('../views/home/usergl/roleView.vue'),
        }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
