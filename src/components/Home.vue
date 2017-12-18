<template>
  <article>

    <input type="text" placeholder="Ticker" autofocus>

    <br><br>

    Presets:
    <ul>
      <li v-for="preset in presets">
        <router-link to="TSLA">{{ preset }}</router-link>
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
        'TSLA'
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
