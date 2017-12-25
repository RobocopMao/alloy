<template>
  <div class="animated pg1" data-delay="600" data-show="slideInDown" data-hide="zoomOut">
    <p class="title">诚挚邀请</p>
  </div>
</template>

<script>
  export default {
    name: 'Pg2'
  }
</script>

<style lang="stylus" scoped>
  .pg1 {
    width 100%
    height 60px
    position absolute
    top 20%
    left 0
    right 0
    z-index 1
    text-align center
    p {
      line-height 1.6
      &.title {
        font-size 20px
      }
    }
  }
</style>
