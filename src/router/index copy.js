import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home.vue'

const Category = () => import('views/category/Category.vue');
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue');
const Detail = () => import('views/detail/Detail.vue');


Vue.use(VueRouter)


const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: "/detail/:id",
    component: Detail,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router
