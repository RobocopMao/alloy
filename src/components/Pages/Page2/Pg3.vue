<template>
  <div class="animated pg3" data-delay="1500" data-show="slideInDown" data-hide="zoomOut">
    <p>期盼你的到来</p>
    <p>与我们见证最幸福的时刻</p>
  </div>
</template>

<script>
  export default {
    name: 'Pg2'
  }
</script>

<style lang="stylus" scoped>
  .pg3 {
    width 100%
    height 60px
    position absolute
    bottom 15%
    left 0
    right 0
    z-index 1
    text-align center
    p {
      line-height 1.8
    }
  }
</style>
