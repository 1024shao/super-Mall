<template>
  <div class="goods-item " @click="itemClick">
    <img :src="showImg" alt="" @load="imgLoad">
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collection">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  props: ['goodsItem'],
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('imgLoad')
    },
    itemClick() {
      this.$router.push({
        path: '/detail',
        query: {
          id: this.goodsItem.iid
        }
      })
    }
  }
}
</script>

<style lang='less'>
.goods-item {
  float: left;
  width: 45%;
  text-align: center;
  img {
    width: 100%;
    border-radius: 5px;
  }
  p {
    overflow: hidden;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .price {
    position: relative;
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .price::after {
    content: '';
    position: absolute;
    top: 1px;
    right: -19px;
    width: 14px;
    height: 14px;
    background: url('../../../assets/img/common/collect.svg') no-repeat;
    background-size: 14px 14px;
  }
}
</style>