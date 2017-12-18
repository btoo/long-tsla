import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TSLA from './TSLA'
import NVDA from './NVDA'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/tsla',
      name: 'TSLA',
      component: TSLA
    }, {
      path: '/nvda',
      name: 'NVDA',
      component: NVDA
    }
  ]
})
