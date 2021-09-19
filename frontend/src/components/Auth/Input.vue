<template>
  <div class="auth-input">
    <p>{{title}}</p>
    <input
      :type=itype
    />
  </div>
</template>

<script>
  export default {
    name: "Input",
    props: {
      itype: {
        type: String,
        default: 'text'
      },
      title: {
        type: String,
        default: 'Title'
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">

  @import "../../scss/_variables.scss";

  .auth-input p, h1 {
    color: $auth-text-colors;
    font-family: 'Rubik', sans-serif;
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
</style>
