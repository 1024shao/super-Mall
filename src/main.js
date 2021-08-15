import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
    Vue.prototype.$bus = this//创建全局事件总线
  }
}).$mount('#app')
