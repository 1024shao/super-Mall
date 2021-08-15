<template>
  <div id="tab-bar">
    <TabBarItem path="/home">
      <img src="../../../src/assets/img/tabbar/home.svg" alt="" slot="item-img">
      <img src="../../../src/assets/img/tabbar/home_active.svg" alt="" slot="item-img-active">
      <div item-text slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category">
      <img src="../../../src/assets/img/tabbar/category.svg" alt="" slot="item-img">
      <img src="../../../src/assets/img/tabbar/category_active.svg" alt="" slot="item-img-active">
      <div item-text slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/shopcart">
      <img src="../../../src/assets/img/tabbar/shopcart.svg" alt="" slot="item-img">
      <img src="../../../src/assets/img/tabbar/shopcart_active.svg" alt="" slot="item-img-active">
      <div item-text slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile">
      <img src="../../../src/assets/img/tabbar/profile.svg" alt="" slot="item-img">
      <img src="../../../src/assets/img/tabbar/profile_active.svg" alt="" slot="item-img-active">
      <div item-text slot="item-text">我的</div>
    </TabBarItem>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem.vue'
export default {
  name: 'TabBar',
  components: {
    TabBarItem,
  },
}
</script>

<style lang ='less'>
#tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -2px 1px rgba(0, 0, 0, 0.1);
}
</style>