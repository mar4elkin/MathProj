<template>
  <div v-for="value in splText">
    <p>{{value}}</p>
  </div>
</template>

<script>
  export default {
    name: "textSplit",
    props: {
      text: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        splText: []
      }
    },
    mounted() {
      this.splText = this.text.split('.')
    }
  }
</script>

