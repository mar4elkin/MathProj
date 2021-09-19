<template>
  <div class="nav-bar">
    <div class="nav-bar-container">
      <router-link to="/about">
        <h1>MathProjMVP</h1>
      </router-link>
      <nav class="nav-bar-navigation">
        <ul class="nav-bar-list">
          <li>
            <router-link to="/singup">Регистрация</router-link>
          </li>
          <li>
            <router-link class="nav-bar-bordered" to="/singin">Войти</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_animations.scss";

  .nav-bar-bordered {
    border-radius: 5px;
    border: 1px solid $nav-second-color-white;
  }

  .nav-bar-container {
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
    background: $nav-main-color-white;
  }

  .nav-bar .nav-bar-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .nav-bar-container a, .nav-bar-navigation a {
    text-decoration: none;
  }

  .nav-bar-container h1 {
    font-size: 24px;
    font-family: 'Rubik', sans-serif;
    font-weight: normal;
    color: $nav-second-color-white;
  }

  .nav-bar-navigation ul {
    margin: 1em 0 .5em;
    text-align: center;
  }

  .nav-bar-navigation li {
    display: inline;
  }

  .nav-bar-navigation a {
    display: inline-block;
    padding: .5em 1.5em;
    font-family: 'Rubik', sans-serif;
    font-weight: lighter;
    color: $nav-second-color-white;
  }

  .nav-bar-wave {
    -webkit-transform:rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
    display: flex !important;
    height: 50px;

  }

  .nav-bar-wave > svg > path {
    fill: $nav-main-color-white;
  }
</style>
