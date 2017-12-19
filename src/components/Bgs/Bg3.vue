<template>
  <div class="animated bg3" data-delay="400" data-show="slideInUp" data-hide="zoomOut">
    <img :src="bgTower" class="bg-tower">
  </div>
</template>

<script>
  import bgTower from '../../assets/images/full-bg-tower.png'
  export default {
    name: 'Bg3',
    data () {
      return {
        bgTower
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .bg3 {
    height 50%
    position absolute
    right 0
    bottom 0
    left 0
    z-index 1
    .bg-tower {
      width 100%
      height 100%
    }
  }
</style>
