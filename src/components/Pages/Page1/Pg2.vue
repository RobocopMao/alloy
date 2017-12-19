<template>
  <div class="animated pg2" data-delay="1200" data-show="slideInDown" data-hide="zoomOut">
    <p>Mr： GG</p>
    <p>Mrs： MM</p>
  </div>
</template>

<script>
  export default {
    name: 'Pg2'
  }
</script>

<style lang="stylus" scoped>
  .pg2 {
    width 100%
    height 60px
    position absolute
    bottom 30px
    left 0
    right 0
    z-index 1
    text-align center
  }
</style>
