// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'

import 'sty/reset.css'
import 'sty/border.css'
import 'sty/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

// 解决移动端点击事件300毫秒延迟问题
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
