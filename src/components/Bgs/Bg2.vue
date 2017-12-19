<template>
  <div class="animated bg2" data-delay="200" data-show="zoomIn" data-hide="zoomOut">
    <img :src="bgFlower" class="bg-flower">
  </div>
</template>

<script>
  import bgFlower from '../../assets/images/full-bg-flower.png'
  export default {
    name: 'Bg2',
    data () {
      return {
        bgFlower
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .bg2 {
    height 100%
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    z-index 3
    .bg-flower {
      width 100%
      height 100%
    }
  }
</style>
