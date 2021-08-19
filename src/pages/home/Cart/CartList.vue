<template>
  <div class="cartList">
    <Scroll class="content" ref="scroll">
      <CartListItem v-for="(item,index) in cartList" :key='index' :item='item' />
    </Scroll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Scroll from '@/components/common/scroll/Scroll'
import CartListItem from '@/pages/home/Cart/CartListItem'
export default {
  name: 'CartList',
  computed: {
    ...mapGetters(['cartList'])
  },
  components: {
    Scroll, CartListItem
  },
  activated() {
    this.$refs.scroll.bscroll.refresh()
  },
}
</script>

<style lang='less' scoped>
.cartList {
  margin-top: 44px;
  height: calc(100vh - 49px - 44px - 40px);
}
.content {
  height: 100%;
  .listItem {
    width: 100%;
  }
}
</style>