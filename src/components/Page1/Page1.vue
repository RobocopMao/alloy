<template>
  <div class="page1">
    <!--<bg1 />-->
    <div class="animated" data-show="zoomIn" data-hide="zoomOut">
      <img :src="bgRect" class="bg-rect">
    </div>
    <div class="animated" data-delay="300" data-show="zoomIn" data-hide="zoomOut">
      <img :src="bgFlower" class="bg-flower">
    </div>
    <!--<div class="animated" data-show="bounceInLeft" data-hide="bounceOutLeft">AlloyTouch Introduction</div>-->
    <!--<div class="animated" data-delay="500" data-show="bounceInUp" data-hide="zoomOut"><img src=""></div>-->
    <!--<div class="animated" data-delay="1200" data-show="bounceIn" data-hide="bounceOut">By AlloyTeam</div>-->
  </div>
</template>

<script>
  import Bg1 from '../Bg1/Bg1.vue'
  import bgRect from '../../assets/images/full-bg-rect.png'
  import bgFlower from '../../assets/images/full-bg-flower.png'
  export default {
    name: 'Page1',
    components: {
      Bg1
    },
    data () {
      return {
        bgRect,
        bgFlower
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .page1 {
    position relative
    height 100%
    & > div {
      height 100%
      &:first-child {
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        z-index 1
      }
      &:nth-child(2) {
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        z-index 1
      }
    }
    .bg-rect {
      width 100%
      height 100%
      padding 10px
      box-sizing border-box
    }
    .bg-flower {
      width 100%
      height 100%
    }
  }
</style>
