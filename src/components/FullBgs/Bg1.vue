<template>
  <div class="animated bg1" data-show="zoomIn" data-hide="zoomOut">
    <img :src="bgRect" class="bg-rect">
  </div>
</template>

<script>
  import bgRect from '../../assets/images/full-bg-rect.png'
  export default {
    name: 'Bg1',
    data () {
      return {
        bgRect
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .bg1 {
    height 100%
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    z-index 2
    .bg-rect {
      width 100%
      height 100%
      padding 10px
      box-sizing border-box
    }
  }
</style>
