<template>
  <div class="animated pg2" data-delay="1200" data-show="slideInDown" data-hide="zoomOut">
    <p>MrGG和MrsMM</p>
    <p>诚挚的邀请你参加我们的结婚盛典</p>
    <p class="margin-top-10">婚礼时间</p>
    <p>2018年2月7日（周三）</p>
    <p class="margin-top-10">婚礼地点</p>
    <p>成都世纪城天堂洲际饭店三楼宴会厅</p>
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
    top 30%
    left 0
    right 0
    z-index 1
    text-align center
    p {
      line-height 1.8
      &.margin-top-10 {
        margin-top 10px
      }

    }
  }
</style>
