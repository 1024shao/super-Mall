<template>
  <div class="goods clear-fix">
    <GoodsItem v-for="(item,index) in goods" :key="index" :goodsItem='item' />
  </div>
</template>

<script>
import GoodsItem from '@/components/common/goods/GoodsItem'
export default {
  name: 'Goods',
  components: {
    GoodsItem
  },
  props: ['goods']
}
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>