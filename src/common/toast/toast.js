// 将toast封装为一个插件
import Toast from './Toast.vue'
const obj = {

}
obj.install = function (Vue) {
  // 创建toast组件
  const ToastComponent = Vue.extend(Toast)
  // 实例化一个toast
  const toast = new ToastComponent()
  // 将toast挂在到一个元素上(toast组件替换该元素)
  toast.$mount(document.createElement('div'))
  // toast.$el就是创建的div
  document.body.appendChild(toast.$el)

  // 借助Vue的原型对象来管理toast是否显示
  Vue.prototype.$toast = toast

}

export default obj