<template>
  <div v-if="img_align_right" class="prev-page-big-block">
    <div>
      <h1>{{heading}}</h1>
      <TextSplit :text=text />
    </div>
    <img :src=image alt="" :style="imgStyle" />
  </div>
  <div v-else class="prev-page-big-block">
    <img :src=image alt="" :style="imgStyle" />
    <div>
      <h1>{{heading}}</h1>
      <TextSplit :text=text />
    </div>
  </div>
</template>

<script>
  import TextSplit from "./TextSplit"
  export default {
    name: "BigBlock",
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
      },
      img_align_right: {
        type: Boolean,
        default: false
      },
      img_size: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
      }
    },
    methods: {
      imgStyle() {
        return 'height:' + this.img_size.height + '; width' + this.img_size.width + ';'
      }
    }
  }
</script>

<style lang="scss">

  @import "../../scss/_variables.scss";

  .prev-page-big-block {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
  }

  .prev-page-big-block > div h1, p {
    font-family: 'Rubik', sans-serif;
    margin: 0px;
    color: $prev-text-colors-white;
  }

  .prev-page-big-block > div h1 {
    font-size: 48px;
    font-weight: normal;
  }

  .prev-page-big-block > div p {
    font-size: 24px;
    font-weight: lighter;
    text-align: start;
  }
</style>
