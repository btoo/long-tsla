<template>
  <main id="app">
    <router-view/>
  </main>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  $green: #42b983;

  html, body {
    margin: 0;
    font-size: 1rem;
  }

  h1, h2 {
    font-weight: normal;
    margin: 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: $green;
  }

  input {
    outline-color: $green;
    font-size: 1rem;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
  }

  #nprogress {
    .bar {
      background: $green;
      height: 3px;
    }
  }

</style>
