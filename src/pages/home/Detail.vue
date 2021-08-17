<template>
  <div class="detail">
    <!-- 导航栏 -->
    <DetailNavBar class="detailNav" @navClick='navClick' ref='nav' />
    <Scroll class="content" ref="detailScroll" @scroll='contentScroll' :probeType='3'>
      <!-- 轮播图 -->
      <DetailSwiper :topImages='topImages' class="swiper" />
      <!-- 商品数据 -->
      <DetailGoodsInfo :goods='goods' />
      <!-- 店铺信息 -->
      <DetailShopInfo :shop='shop' />
      <!-- 商品详情 -->
      <DetailSpecificInfo :detailInfo='detailInfo' @imgLoad='imgLoad' />
      <!-- 商品参数 -->
      <DetailParamsInfo :paramInfo='paramsInfo' ref="params" />
      <!-- 评论 -->
      <DetailCommentInfo :commentInfo='commentInfo' ref="comment" />
      <!-- 推荐 -->
      <ComGoods :goods='recommendData' ref="recommend" />
    </Scroll>
    <!-- 底部导航 -->
    <DetailBotBar />
    <!-- 回到顶部 -->
    <BackTop class="backTop" v-show="isBackTopShow" @click.native="backTopClick" />
  </div>
</template>

<script>
import DetailNavBar from '@/pages/home/detail/DetailNavBar'
import DetailSwiper from '@/pages/home/detail/DetailSwiper'
import DetailGoodsInfo from '@/pages/home/detail/DetailGoodsInfo'
import DetailShopInfo from '@/pages/home/detail/DetailShopInfo'
import DetailSpecificInfo from '@/pages/home/detail/DetailSpecificInfo'
import DetailParamsInfo from '@/pages/home/detail/DetailParamsInfo'
import DetailCommentInfo from '@/pages/home/detail/DetailCommentInfo'
import DetailBotBar from '@/pages/home/detail/DetailBotBar'

import Scroll from '@/components/common/scroll/Scroll'
import ComGoods from '@/components/common/goods/Goods'
import BackTop from '@/components/common/BackTop'

import { debounce } from '../../common/utils'
import { getDetailData, GetRecommendData, Goods, Shop, GoodsParams, } from '../../network/detail'
export default {
  name: 'Detail',
  props: ['id'],
  components: { DetailNavBar, DetailSwiper, DetailGoodsInfo, DetailShopInfo, Scroll, DetailSpecificInfo, DetailParamsInfo, DetailCommentInfo, ComGoods, DetailBotBar, BackTop },
  data() {
    return {
      topImages: [],
      goods: {},
      shop: {},
      currentIndex: 0,
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendData: [],
      themeTopY: [],
      isBackTopShow: false,
      getThemeTopY: null
    }
  },
  created() {
    this.getThemeTopY = debounce(() => {
      this.themeTopY = []
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.params.$el.offsetTop)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopY.push(Number.MAX_VALUE)

      console.log(this.themeTopY);
    }, 200)
  },
  methods: {
    // 根据id查询商品详情页数据
    getDetailData() {
      getDetailData(this.id).then(res => {
        //得到所有轮播图数据
        let data = res.result
        this.topImages = res.result.itemInfo.topImages
        //得到所有商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // 得到店铺信息
        this.shop = new Shop(data.shopInfo)
        // 得到商品详情
        this.detailInfo = data.detailInfo
        //得到商品参数信息
        this.paramsInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule)
        // console.log('11111111111111111111', this.paramsInfo);
        //得到商品评价信息
        if (data.rate.cRate !== 0) this.commentInfo = data.rate.list[0]

        // 获取列表组件的offsetTOP
      })
    },
    // 得到推荐数据
    GetRecommendData() {
      GetRecommendData().then(res => {
        console.log(res);
        this.recommendData = res.data.list
      })
    },
    //实现切换栏跳转
    navClick(index) {
      this.$refs.detailScroll.bscroll.scrollTo(0, -(this.themeTopY[index]), 100)
    },
    imgLoad() {
      this.getThemeTopY()
    },
    //scroll发生滚动
    contentScroll(position) {
      //根据滚动位置调节切换栏
      let positionY = -position.y
      for (let i = 0; i < this.themeTopY.length; i++) {
        if ((this.currentIndex !== i) && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i + 1])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      // 是否显示backtop回到顶部组件
      if (positionY >= 1000) {
        this.isBackTopShow = true
      } else {
        this.isBackTopShow = false
      }
    },
    // 回到顶部
    backTopClick() {
      this.$refs.detailScroll.bscroll.scrollTo(0, 0, 500)
    }
  },
  mounted() {
    this.getDetailData()
    this.GetRecommendData()
    console.log(this.$refs.scroll);
  },
}
</script>

<style scoped>
.detail {
  height: 100vh;
}
.detailNav {
  z-index: 11;
  background-color: #fff;
}
.swiper {
  margin-top: 44px;
}
.content {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: calc(100% - 44px);
}
.backTop {
  z-index: 10;
}
</style>