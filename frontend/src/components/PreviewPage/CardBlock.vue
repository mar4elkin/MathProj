<template>
  <div class="prev-page-card-block">
    <img :src=image alt="" />
    <h2>{{heading}}</h2>
    <TextSplit :text=text />
  </div>
</template>

<script>
  import TextSplit from "./TextSplit"
  export default {
    name: "CardBlock",
    components: {TextSplit},
    props: {
      heading: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">

  @import "../../scss/_variables.scss";

  .prev-page-card-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .prev-page-card-block h2, p {
    font-family: 'Rubik', sans-serif;
    margin: 0px;
    text-align: center;
    color: $prev-text-colors-white;
  }

  .prev-page-card-block > img {
    width: 100px;
    height: 100px;
  }

  .prev-page-card-block p {
    font-weight: lighter;
  }

  .prev-page-card-block h2 {
    font-weight: normal;
  }
</style>
