<template>
  <div class="animated bg6" data-delay="600" data-show="rollIn" data-hide="zoomOut">
    <img :src="bgBird" class="bg-bird">
  </div>
</template>

<script>
  import bgBird from '../../assets/images/full-bg-bird.png'
  export default {
    name: 'Bg5',
    data () {
      return {
        bgBird
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .bg6 {
    width 120px
    height 100px
    position absolute
    top 10%
    right 10px
    z-index 1
    .bg-bird {
      width 70%
      height 70%
    }
  }
</style>
