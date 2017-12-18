<template>
  <div class="page2">
    <div class="animated" data-show="zoomIn" data-hide="zoomOut">
      <img :src="bgRect" class="bg-rect">
    </div>
    <div class="animated" data-delay="300" data-show="zoomIn" data-hide="zoomOut">
      <img :src="bgFlower" class="bg-flower">
    </div>
    <!--<div class="animated"  data-delay="100" data-show="flipInY" data-hide="flipOutY" >Powerful Features</div>-->
    <!--<div class="animated"  data-delay="400" data-show="zoomIn" data-hide="zoomOut"><img src=""></div>-->
  </div>
</template>

<script>
  import bgRect from '../../assets/images/full-bg-rect.png'
  import bgFlower from '../../assets/images/full-bg-flower.png'
  export default {
    name: 'Page2',
    components: {
      bgRect,
      bgFlower
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
  .page2 {
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
