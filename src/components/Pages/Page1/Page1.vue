<template>
  <div class="page1">
    <bg1 />
    <bg2 />
    <bg3 />
    <bg4 />
    <bg5 />
    <bg6 />
    <bg7 :isHome="true"/>
    <pg1 />
    <pg2 />
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
  import Pg1 from './Pg1.vue'
  import Pg2 from './Pg2.vue'
  export default {
    name: 'Page1',
    components: {
      Bg1,
      Bg2,
      Bg3,
      Bg4,
      Bg5,
      Bg6,
      Bg7,
      Pg1,
      Pg2
    }
  }
</script>

<style lang="stylus" scoped>
  .page1 {
    position relative
    height 100%
  }
</style>
