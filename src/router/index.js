import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/Home'
import Category from '../pages/Category'
import Profile from '../pages/Profile'
import ShopCart from '../pages/ShopCart'
import Detail from '@/pages/home/Detail'

//解决路由重复点击报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes: [
    { path: '', redirect: '/home', component: Home },
    { path: '/home', component: Home },
    { path: '/category', component: Category },
    { path: '/profile', component: Profile },
    { path: '/shopCart', component: ShopCart },
    { path: '/detail', component: Detail, props({ query }) { return { id: query.id } } },
  ],
  mode: 'history'
})

export default router