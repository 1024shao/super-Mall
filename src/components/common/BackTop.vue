<template>
  <div class="back-top">
    <img src="../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data() {
    return {
      isHidden: false
    }
  },
}
</script>

<style lang='less' scoped>
.back-top {
  width: 43px;
  height: 43px;
  position: fixed;
  right: 8px;
  bottom: 55px;
  img {
    width: 43px;
    height: 43px;
  }
}
</style>