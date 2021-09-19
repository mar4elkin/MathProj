<template>
  <div class="prv-page fade-in-top">
    <BigBlock
      :heading=firstBlockHeading
      :text=BlockText
      :image=sqrt
      :img_align_right=true
      :img_size=img_size_first
    ></BigBlock>
    <div class="prev-page-card">
      <CardBlock
        :heading=cardBlockHeading1
        :text=cardBlockText1
        :image=circleOk
      ></CardBlock>
      <CardBlock
        :heading=cardBlockHeading1
        :text=cardBlockText1
        :image=circleOk
      ></CardBlock>
      <CardBlock
        :heading=cardBlockHeading1
        :text=cardBlockText1
        :image=circleOk
      ></CardBlock>
    </div>
    <BigBlock
      :heading=secondBlockHeading
      :text=BlockText
      :image=school
      :img_align_right=false
      :img_size=img_size_second
    ></BigBlock>
  </div>
</template>

<script>
  import BigBlock from "../components/PreviewPage/BigBlock";
  import CardBlock from "../components/PreviewPage/CardBlock";
  import sqrt from '../assets/PreviewPageSqrt.png';
  import circleOk from '../assets/CircleOk.png';
  import school from '../assets/School.png';

  export default {
    name: "PreviewPage",
    components: {CardBlock, BigBlock},
    props: {
    },
    data() {
      return {
        firstBlockHeading: "Стань другом с Математикой",
        secondBlockHeading: "Для преподaвателей",
        BlockText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
          "Nullam efficitur diam et urna venenatis, ac rutrum justo egestas.",
        cardBlockHeading1: "Закрой свои слабые места",
        cardBlockText1: "Lorem ipsum dolor sit amet. consectetur adipiscing elit." +
          "Nullam efficitur diam et urna venenatis. ac rutrum justo egestas.",
        sqrt: sqrt,
        circleOk: circleOk,
        school: school,
        img_size_first: {
          height: '132px',
          width: '146px'
        },
        img_size_second: {
          width:'146px',
          height: '105,6px'
        }
      }
    }
  }
</script>

<style lang="scss">
  .prv-page {
    margin-top: 35px;
  }

  .prev-page-card {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 100px;
  }
</style>
