import Vue from 'vue'
import Home from '@/components/Home'
import router from '@/router'

describe('Home.vue', () => {
  const Constructor = Vue.extend(Home)
  const vm = new Constructor({router}).$mount()
  const textContent = vm.$el.querySelector('ul').textContent

  it('should list TSLA as a preset', () => {
    expect(textContent)
      .to.include('TSLA')
  })

  it('should list NVDA as a preset', () => {
    expect(textContent)
      .to.include('NVDA')
  })
})
