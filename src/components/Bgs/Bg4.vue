<template>
  <div class="animated bg4" data-delay="400" data-show="slideInLeft" data-hide="zoomOut">
    <img :src="bgPerson" class="bg-person">
  </div>
</template>

<script>
  import bgPerson from '../../assets/images/full-bg-person.png'
  export default {
    name: 'Bg4',
    data () {
      return {
        bgPerson
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .bg4 {
    height 30%
    width 30%
    position absolute
    bottom 30px
    left 30px
    z-index 1
    .bg-person {
      width 100%
      height 100%
    }
  }
</style>
