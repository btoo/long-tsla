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
  $gray: #2c3e50;
  $font: 'Avenir', Helvetica, Arial, sans-serif;

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
    color: $gray;
    font-family: $font;
  }

  #app {
    font-family: $font;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $gray;
    height: 100vh;
  }

  #nprogress {
    .bar {
      background: $green;
      height: 3px;
    }
    .spinner-icon {
      border-top-color: $green;
      border-left-color: $green;
    }
  }

</style>
