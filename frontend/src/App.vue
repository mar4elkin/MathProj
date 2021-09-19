<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  components: { NavBar },
  name: 'App',
  watch: {
    '$route' (to, from) {
      let userLang = navigator.language || navigator.userLanguage
      document.title = to.meta.title[userLang.split('-')[0]] || 'MathProjMVP'
    }
  },
}

</script>

<style lang="scss">
  @import "./scss/_variables.scss";
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap');

  body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    background: $main-bg-color;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Rubik',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
</style>
