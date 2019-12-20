import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
		path: '/',
		redirect: '/home'
	},
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@views/category/Category.vue')
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: () => import('@views/shopcart/ShopCart.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@views/profile/Profile.vue')
  },
  {
    path: '/maintabbar',
    name: 'maintabbar',
    component: () => import('@components/MainTabBar.vue')
  },
  {
    path: '/tabbar',
    name: 'tabbar',
    component: () => import('@components/tabbar/TabBar.vue')
  },
  {
    path: '/tabbaritem',
    name: 'tabbaritem',
    component: () => import('@components/tabbar/TabBarItem.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router
