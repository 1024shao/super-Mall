<template>
  <div class="flex bot-bar-wrap">
    <div class="bot-bar-item">
      <i class="icon1"></i>
      <p>客服</p>
    </div>
    <div class="bot-bar-item">
      <i class="icon2"></i>
      <p>店铺</p>
    </div>
    <div class="bot-bar-item">
      <i class="icon3"></i>
      <p>收藏</p>
    </div>
    <div class="btn cart-btn" @click="addCart">加入购购物车</div>
    <div class="btn buy-btn">购买</div>
  </div>

</template>

<script>
export default {
  name: "DetailBotBar",
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }
}
</script>

<style lang="less" scoped>
.bot-bar-wrap {
  z-index: 10;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  .bot-bar-item {
    width: 16%;
    font-size: 12px;
    color: #333;
    text-align: center;
    img {
      width: 22px;
      height: 22px;
      margin: 4px 0;
      vertical-align: middle;
    }
    i {
      display: block;
      height: 22px;
      width: 22px;
      margin-top: 5px;
      margin-left: 15px;
      background: url(../../../assets/img/detail/detail_bottom.png) no-repeat;
      background-size: 22px;
    }
    .icon1 {
      background-position: 0 -53px;
    }
    .icon2 {
      background-position: 0 -98px;
    }

    .icon3 {
      background-position: 0 -26px;
    }
  }
  .btn {
    width: 26%;
    font-size: 13px;
    line-height: 49px;
    text-align: center;
  }
  .cart-btn {
    background-color: #fff67a;
    line-height: 49px;
  }
  .buy-btn {
    color: #fff;
    background-color: var(--color-high-text);
  }
}
</style>