<template>
  <div class="cartBottomBar">
    <div class="checkAll" @click="checkAllProduct">
      <CartCheckButton :isChecked='checkAll' /> <span>全选</span>
    </div>
    <div class="totalPrice">
      <span>总计:</span>
      <span>￥{{totalPrice}}</span>
    </div>
    <div class="calculate" @click="calcProduct">
      <span>去结算({{totalLength}})</span>
    </div>
  </div>
</template>

<script>
import CartCheckButton from '@/pages/home/Cart/CartCheckButton'
export default {
  name: 'CartBottomBar',
  components: {
    CartCheckButton
  },
  computed: {
    // 计算总价格
    totalPrice() {
      let total = this.$store.state.CartList.filter(item => {
        return item.checked === true
      }).reduce((pre, current) => {
        return pre + current.count * current.price
      }, 0)
      return total
    },
    // 计算选中个数
    totalLength() {
      return this.$store.state.CartList.filter(item => item.checked).length
    },
    //是否全选
    checkAll() {
      if (this.$store.state.CartList.length === 0) return false
      return !(this.$store.state.CartList.find(item => !item.checked))
    }
  },
  methods: {
    checkAllProduct() {
      if (this.$store.state.CartList.lenght != 0) {
        if (this.checkAll) this.$store.state.CartList.forEach(item => item.checked = false)
        else this.$store.state.CartList.forEach(item => item.checked = true)
      }
    },
    // 结算
    calcProduct() {
      if (!this.totalLength) this.$toast.show('请选择商品')
    }
  }
}
</script>

<style lang='less' scoped>
.cartBottomBar {
  height: 40px;
  font-size: 14px;
  display: flex;
  align-items: center;
  background-color: #ccc;
  .checkAll {
    display: flex;
    width: 60px;
    margin-left: 4px;
  }
  .totalPrice {
    margin-left: 30px;
    flex: 1;
  }
  .calculate {
    width: 80px;
    height: 100%;
    line-height: 40px;
    text-align: center;
    background-color: red;
  }
}
</style>