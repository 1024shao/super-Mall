<template>
  <div class="shopCart">
    <!-- 导航栏 -->
    <NavBar class="navBar">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
    <!-- 主要内容 -->
    <CartList />
    <!-- 汇总 -->
    <CartBottomBar />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from '@/components/navBar/NavBar'

import CartList from '@/pages/home/Cart/CartList'
import CartBottomBar from '@/pages/home/Cart/CartBottomBar'
export default {
  name: 'ShopCart',
  computed: {
    ...mapGetters(['cartLength', 'cartList'])
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  activated() {

  }
}
</script>

<style scoped>
.shopCart {
  height: 100vh;
  width: 100vw;
}
.navBar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>