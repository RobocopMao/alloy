<template>
  <div id="fullPage" v-fullpage="{options: options, methods:{animationEnd: onAnimationEnd, initAlloyTouch: initAlloyTouch}, min: min, max: max}">
    <page1 />
    <page2 />
  </div>
</template>

<script>
  import Page1 from '../Pages/Page1.vue'
  import Page2 from '../Pages/Page2.vue'
  export default {
    name: 'Main',
    components: {
      Page1,
      Page2
    },
    data () {
      return {
        // 初始化设置
        options: {
          touch: '', // 反馈触摸的dom
          vertical: true, // 不必需，默认是true代表监听竖直方向touch
          target: '#fullPage', // 运动的对象
          property: 'translateY', // 被滚动的属性
          sensitivity: 1, // 不必需,触摸区域的灵敏度，默认值为1，可以为负数
          factor: 1, // 不必需,默认值是1代表touch区域的1px的对应target.y的1
          step: 40
        },
        // 动态设置属性
        min: window.innerHeight - 45 - 48 - 2000, // 不必需,滚动属性的最小值
        max: 0, // 不必需,滚动属性的最大值
        handleAlloyTouch: null
      }
    },
    created () {
      console.log(this)
    },
    methods: {
      initAlloyTouch (handle) {
        console.log(handle)
        this.handleAlloyTouch = handle
      },
      // 回调函数
      onAnimationEnd () {
        console.log('onAnimationEnd')
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
