<template>
  <div class="animated" :class="[isHome ? bg7Home : bg7]" data-delay="800" data-show="slideInRight" data-hide="zoomOut">
    <img :src="bgHeart" class="bg-heart">
  </div>
</template>

<script>
  import bgHeart from '../../assets/images/full-bg-heart.png'
  export default {
    name: 'Bg7',
    props: ['isHome'],
    data () {
      return {
        bgHeart,
        bg7: 'bg7',
        bg7Home: 'bg7-home'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .bg7 {
    width 90px
    height 120px
    position absolute
    bottom 15%
    right 15px
    z-index 1
    .bg-heart {
      width 80%
      height 80%
    }
  }
  .bg7-home {
    width 50%
    height 50%
    position absolute
    right 0
    left 40%
    bottom 0
    z-index 1
    .bg-heart {
      width 60%
      height 60%
    }
  }
</style>
