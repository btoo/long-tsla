<template>
  <article>

    <input type="text" placeholder="search ticker" autofocus>

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
export default {
  name: 'Home',
  data () {
    return {
      presets: [
        'TSLA', 'NVDA'
      ]
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
