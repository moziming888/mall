import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home.vue'

const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue')
const Setting = () => import('views/profile/childComps/Setting')
const Detail = () => import('views/detail/Detail.vue')
const Login = () => import('views/user/Login.vue')

Vue.use(VueRouter)

const routes = [
  {
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
    component: Profile,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/setting',
    component: Setting
  },
  {
    path: '/detail/:id',
    component: Detail,
    props: true
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  // base: process.env.BASE_URL,
  routes
})

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否需要登录权限
    if (localStorage.getItem('user_id')) {
      // 判断是否登录
      next()
    } else {
      // 没登录则跳转到登录界面
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
