import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from '@/common/toast/toast.js'
// 解决移动端300ms点击延迟问题
import FastClick from 'fastclick'
FastClick.attach(document.body)
// 图片懒加载
import LazyLoad from 'vue-lazyload'
Vue.use(LazyLoad, {
  // loading: require('')
})

Vue.use(toast)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this//创建全局事件总线
  }
}).$mount('#app')
