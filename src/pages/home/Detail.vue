<template>
  <div class="detail">
    <!-- 导航栏 -->
    <DetailNavBar class="detailNav"></DetailNavBar>
    <!-- 轮播图 -->
    <DetailSwiper :topImages='topImages' class="swiper"></DetailSwiper>
    <!-- 商品数据 -->
    <DetailGoodsInfo :goods='goods' />
    <!-- 店铺信息 -->
    <DetailShopInfo :shop='shop' />
  </div>
</template>

<script>
import DetailNavBar from '@/pages/home/detail/DetailNavBar'
import DetailSwiper from '@/pages/home/detail/DetailSwiper'
import DetailGoodsInfo from '@/pages/home/detail/DetailGoodsInfo'
import DetailShopInfo from '@/pages/home/detail/DetailShopInfo'

import { getDetailData, Goods, Shop } from '../../network/detail'
export default {
  name: 'Detail',
  props: ['id'],
  components: { DetailNavBar, DetailSwiper, DetailGoodsInfo, DetailShopInfo },
  data() {
    return {
      topImages: [],
      goods: {},
      shop: {}
    }
  },
  methods: {
    // 根据id查询商品详情页数据
    getDetailData() {
      getDetailData(this.id).then(res => {
        //得到所有轮播图数据
        let data = res.result
        console.log(data);
        this.topImages = res.result.itemInfo.topImages
        //得到所有商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // 得到店铺信息
        this.shop = new Shop(data.shopInfo)
      })
    }
  },
  mounted() {
    this.getDetailData()
  },
}
</script>

<style scoped>
.detailNav {
  background-color: #fff;
}
.swiper {
  margin-top: 44px;
}
</style>