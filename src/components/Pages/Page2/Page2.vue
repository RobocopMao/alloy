<template>
  <div class="page2">
    <bg1 />
    <bg2 />
    <bg3 />
    <bg4 />
    <bg5 />
    <bg6 />
    <bg7 :isHome="false"/>
  </div>
</template>

<script>
  import Bg1 from '../../FullBgs/Bg1.vue'
  import Bg2 from '../../FullBgs/Bg2.vue'
  import Bg3 from '../../FullBgs/Bg3.vue'
  import Bg4 from '../../FullBgs/Bg4.vue'
  import Bg5 from '../../FullBgs/Bg5.vue'
  import Bg6 from '../../FullBgs/Bg6.vue'
  import Bg7 from '../../FullBgs/Bg7.vue'
  export default {
    name: 'Page2',
    components: {
      Bg1,
      Bg2,
      Bg3,
      Bg4,
      Bg5,
      Bg6,
      Bg7
    }
  }
</script>

<style lang="stylus" scoped>
  .page2 {
    position relative
    height 100%
  }
</style>
