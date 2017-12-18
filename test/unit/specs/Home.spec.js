import Vue from 'vue'
import Home from '@/components/Home'
import router from '@/router'

describe('Home.vue', () => {
  it('should render the correct symbol presets', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor({router}).$mount()
    expect(vm.$el.querySelector('ul').textContent.includes('TSLA'))
      .to.equal(true)
  })
})
