<template>
  <div class="page page2">
    <bg1 />
    <bg2 />
    <bg3 />
    <bg4 />
    <bg5 />
    <bg6 />
    <bg7 :isHome="false"/>
    <pg1 />
    <pg2 />
    <pg3 />
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
  import Pg3 from './Pg3.vue'
  export default {
    name: 'Page2',
    components: {
      Bg1,
      Bg2,
      Bg3,
      Bg4,
      Bg5,
      Bg6,
      Bg7,
      Pg1,
      Pg2,
      Pg3
    }
  }
</script>

<style lang="stylus" scoped>

</style>
