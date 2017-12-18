// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueAlloyTouch from 'alloytouch/vue/alloy_touch.vue'
import fullpage from 'alloytouch/vue/full_page.vue'

Vue.use(vueAlloyTouch)
Vue.use(fullpage)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
