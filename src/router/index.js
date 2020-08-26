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
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Auth/Register.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/Home.vue'),
    beforeEnter: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
