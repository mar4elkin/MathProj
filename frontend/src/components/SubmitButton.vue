<template>
  <div class="auth-input">
    <button
      class="auth-submit-button"
      :style=width
      :onClick=onclick_event
    >
      {{title}}
    </button>
  </div>
</template>

<script>
  export default {
    name: "SubmitButton",
    props: {
      width: {
        type: String,
        default: '30px'
      },
      onclick_event: {
        type: Function,
        default: null
      },
      title: {
        type: String,
        default: 'Title'
      }
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";

  .auth-submit-button {
    background: $main-submit-color;
    border-radius: 5px;
    border: 1px solid $auth-text-colors;
    height: 28px;
    font-family: 'Rubik', sans-serif;
    font-weight: normal;
    color: $auth-input-colors;
  }

  .auth-input p, h1 {
    color: $auth-text-colors;
    font-family: 'Rubik', sans-serif;
  }

  .auth-input {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .auth-input > p {
    font-size: 14px;
    font-weight: lighter;
    text-align: left;
  }

</style>
