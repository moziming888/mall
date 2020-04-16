import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from 'views/home/Home.vue'

const page = name => () => import(`views/${name}`)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main-tabbar'
  },
  {
    path: '/main-tabbar',
    component: page('mainTabbar'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: page('home/Home')
      },
      {
        path: '/category',
        component: page('category/Category.vue')
      },
      {
        path: '/cart',
        component: page('cart/Cart')
      },
      {
        path: '/profile',
        component: page('profile/Profile.vue'),
        meta: {
          requireAuth: true
        }
      }
    ]
  },

  {
    path: '/setting',
    component: page('profile/childComps/Setting')
  },
  {
    path: '/detail/:id',
    component: page('detail/Detail'),
    props: true
  },
  {
    path: '/login',
    component: page('login/Login')
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
