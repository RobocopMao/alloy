<template>
  <div class="app-layout">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
      <!--<router-view></router-view>-->
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'appLayout',
    components: {}
  }
</script>

<style scoped lang="stylus">

</style>
