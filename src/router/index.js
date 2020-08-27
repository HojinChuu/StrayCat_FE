import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';

Vue.use(VueRouter)

const Admin = (to, from, next) => {
  store.getters.userInfo.userType == 'admin' ? next() : router.push({name: 'Home'})
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/Map.vue')
  },
  {
    path: '/market',
    name: 'Market',
    component: () => import('../views/Market.vue')
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('../views/Community.vue')
  },
  {
    path: '/notice',
    name: 'Notice',
    component: () => import('../views/Notice.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/Admin.vue'),
    beforeEnter: Admin
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Auth/Register.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
