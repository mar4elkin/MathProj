<template>
  <img :src=img v-on:click="closeModal" />
</template>

<script>
  export default {
    name: "CloseButton",
    props: {
      img: {
        type: String,
        default: ''
      }
    },
    methods: {
      closeModal() {
        this.$router.push({ path: 'about' })
      }
    }
  }
</script>

