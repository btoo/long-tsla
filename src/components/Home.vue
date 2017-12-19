<template>
  <article>

    <template v-if="apiKey.length !== 16">
      enter your <a target="_blank" href="https://www.alphavantage.co/support/#api-key">alpha vantage api key</a> to start analyzing symbols
      <br><br>
      <input type="text" autofocus placeholder="api key" v-model="apiKey">
    </template>
    <input v-else type="text" autofocus placeholder="search symbol" @keyup.enter="searchSymbol" v-model="symbol">

    <br><br>

    presets:
    <ul>
      <li v-for="preset in presets">
        <router-link :to="preset">{{ preset }}</router-link>
      </li>
    </ul>

  </article>
</template>

<script>
  import { globalData } from '@/main'
  import router from '@/router'

  export default {
    name: 'Home',
    data () {
      return {
        symbol: '',
        presets: [
          'TSLA', 'NVDA'
        ]
      }
    },
    methods: {
      searchSymbol (event) {
        router.push(this.symbol)
      }
    },
    computed: {
      apiKey: {
        get () { return globalData.apiKey },
        set (apiKey) { globalData.apiKey = apiKey }
      }
    }
  }
</script>

<style scoped>
  article {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    text-align: center;
  }
</style>
