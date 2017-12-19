<template>
  <div class="page2">
    <bg1 />
    <bg2 />
    <bg3 />
    <bg4 />
    <bg5 />
    <bg6 />
  </div>
</template>

<script>
  import Bg1 from '../Bgs/Bg1.vue'
  import Bg2 from '../Bgs/Bg2.vue'
  import Bg3 from '../Bgs/Bg3.vue'
  import Bg4 from '../Bgs/Bg4.vue'
  import Bg5 from '../Bgs/Bg5.vue'
  import Bg6 from '../Bgs/Bg6.vue'
  export default {
    name: 'Page2',
    components: {
      Bg1,
      Bg2,
      Bg3,
      Bg4,
      Bg5,
      Bg6
    }
  }
</script>

<style lang="stylus" scoped>
  .page2 {
    position relative
    height 100%
  }
</style>
