<template>
  <div class="animated pg1" data-delay="1000" data-show="bounceIn" data-hide="zoomOut">
    <img :src="Pg1Text" class="pg1-text">
  </div>
</template>

<script>
  import Pg1Text from '../../../assets/images/pg1-text.png'
  export default {
    name: 'Pg1',
    data () {
      return {
        Pg1Text
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .pg1 {
    width 100%
    height 35%
    position absolute
    top 24%
    left 0
    right 0
    z-index 1
    .pg1-text {
      display block
      width 80%
      height 80%
      margin 0 auto
    }
  }
</style>
