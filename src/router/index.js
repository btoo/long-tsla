import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NProgress from 'NProgress'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/tsla',
      name: 'TSLA',
      component: _ => import('./TSLA')
    }, {
      path: '/nvda',
      name: 'NVDA',
      component: _ => import('./NVDA')
    }
  ]
})

NProgress.configure({
  showSpinner: false
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/') {
    NProgress.start()
    NProgress.set(0.1)
  }
  next()
})

router.afterEach(() => {
  setTimeout(() => NProgress.done(), 500)
})

export default router
