<template>
  <div v-if="is_singup">
    <SingUp />
  </div>
  <div v-else>
    <SingIn />
  </div>
</template>

<script>

  import SingIn from '../components/Auth/SingIn'
  import SingUp from '../components/Auth/SingUp'

  export default {
    name: "AuthPage",
    components: {SingIn, SingUp },
    props: {
      is_singup: {
        type: Boolean,
        default: true,
      }
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";

  body {
    background: none;
  }

  .auth-block-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }

  .auth-block {
    background: #3DB2FF;
    border-radius: 20px;
    border: 1px solid $main-color-white;
    width: 504px;
    display: flex;
    justify-content: start;
    flex-direction: column;
    box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .auth-reg {
    height: 554px;
  }

  .auth-log {
    height: 422px;
  }

  .auth-block img {
    width: 24px;
    height: 24px;
    padding: 10px;
    cursor: pointer;
  }

  .auth-input, .auth-block p, h1 {
    color: $auth-text-colors;
    font-family: 'Rubik', sans-serif;
  }

  .auth-block h1, p {
    font-weight: bold;
    margin: 0px;
    text-align: center;
  }

  .auth-input {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .auth-input > input {
    height: 28px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid $auth-input-colors;
    margin: 0;
    padding: 0;
  }

  .auth-input > p {
    font-size: 14px;
    font-weight: lighter;
    text-align: left;
  }

  .auth-input-container {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 343px;
  }

  .auth-block-container-in-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .auth-reg-slide-in-blurred-top {
    -webkit-animation: slide-in-blurred-top-reg 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    animation: slide-in-blurred-top-reg 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
  }

  .auth-log-slide-in-blurred-top {
    -webkit-animation: slide-in-blurred-top-log 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    animation: slide-in-blurred-top-log 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
  }
</style>
