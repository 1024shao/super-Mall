<template>
  <div class="goodsInfo" v-if="Object.keys(goods).length!==0">
    <div class="titleInfo">{{goods.title}}</div>
    <div class="priceInfo">
      <span class="newPrice">{{goods.realPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="otherInfo">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="servicesInfo">
      <span class="servicesInfoItem" v-for="index in goods.services.length-1" :key='index'>
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: ['goods'],
}
</script>

<style scoped lang='less'>
.goodsInfo {
  margin-top: 10px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
  .titleInfo {
    color: #222;
    text-indent: 1em;
    font-size: 16px;
    font-weight: 600;
  }

  .priceInfo {
    margin-top: 10px;
    margin-left: 5px;
    .newPrice {
      font-size: 24px;
      color: var(--color-high-text);
    }
    .oldPrice {
      font-size: 13px;
      margin-left: 5px;
      text-decoration: line-through;
    }
  }
  .discount {
    margin-left: 5px;
    padding: 1px 3px;
    background-color: var(--color-tint);
    color: #fff;
    font-size: 12px;
    border-radius: 12px;
  }
  .otherInfo {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    font-size: 13px;
    span {
      flex: 1;
      text-align: center;
    }
  }
  .servicesInfo {
    display: flex;
    .servicesInfoItem {
      margin-top: 20px;
      flex: 1;
      font-size: 13px;
      text-align: center;
      color: #222;
      margin-bottom: 30px;
      img {
        width: 12px;
        vertical-align: bottom;
      }
    }
  }
}
</style>