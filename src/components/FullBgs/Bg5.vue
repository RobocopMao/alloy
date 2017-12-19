<template>
  <div class="animated bg5" data-delay="600" data-show="bounceIn" data-hide="zoomOut">
    <img :src="bgText" class="bg-text">
  </div>
</template>

<script>
  import bgText from '../../assets/images/full-bg-text.png'
  export default {
    name: 'Bg5',
    data () {
      return {
        bgText
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .bg5 {
    width 150px
    height 60px
    margin-left -75px
    position absolute
    top 10%
    left 50%
    z-index 1
    .bg-text {
      width 80%
      height 80%
      margin-left 10%
    }
  }
</style>
