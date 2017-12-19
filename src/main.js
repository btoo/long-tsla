// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { timeFormat } from 'd3'

Vue.config.productionTip = false

// const prettifyTime = timeFormat('%m %d, %Y')
Vue.filter('formatTime', time => {
  if (!time) return ''
  time = time.toString()
  // return prettifyTime(time)
  return time.slice(4, 15)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
