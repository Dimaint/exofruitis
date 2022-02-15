import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Shop from '../views/Shop'
import Profile from '../views/Profile'
import Cart from '../views/Cart'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
