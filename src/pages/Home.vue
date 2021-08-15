<template>
  <div id="home">
    <!-- 首页导航 -->
    <nav-bar class="home-nav">
      <slot slot="center">
        蘑菇街
      </slot>
    </nav-bar>
    <TabControl :title="['流行','新款','精品']" class="tabControl" v-show="tabControlIsFix" :currentIndex1='currentIndex' />
    <!-- 主要内容 -->
    <Scroll class="content" ref="scroll" :probeType='3' @scroll="contentScroll" @upShowMore='upShowMore'>
      <!-- 轮播图 -->
      <Swiper :banner='banner' @swiperImgLoad='swiperImgLoad'></Swiper>
      <!-- 推荐栏 -->
      <Recommend :recommend='recommend' />
      <!-- 本周流行 -->
      <Pop />
      <!-- 切换栏 -->
      <TabControl :title="['流行','新款','精品']" ref="tabcontrol" />
      <!-- 商品 -->
      <Goods :goods="goods[currentGood].list" />
    </Scroll>
    <!-- 回到顶部按钮 -->
    <BackTop @click.native="backTop" :class="{hidden:isHidden}" />
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from '../network/home.js'
//独立组件
import NavBar from '../components/navBar/NavBar'
import Swiper from '../components/swiper'
import Recommend from '../components/home/recommend'
import Pop from '../components/home/Pop'
// 公共组件
import TabControl from '@/components/common/TabControl'
import Goods from '@/components/common/goods/Goods'
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/common/BackTop'

export default {
  name: 'Home',
  components: { NavBar, Swiper, Recommend, Pop, TabControl, Goods, Scroll, BackTop },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentIndex: 0,
      currentGood: 'pop',
      // 控制返回顶部是否显示
      isHidden: true,
      // 控制商品切换栏是否显示
      tabControlIsFix: false,
      //商品切换栏距离顶部的距离
      tabOffsetTop: 0,
      saveY: 0

    }
  },
  created() {
    //请求轮播图和推荐数据
    this.getHomeMultidata()
    //请求goods商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    //banner 和 recommend 数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    //商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },
    //得到当前点击的切换栏下标
    getTabControlIndex(index) {
      this.currentIndex = index
      if (index === 0) this.currentGood = 'pop'
      else if (index === 1) this.currentGood = 'new'
      else this.currentGood = 'sell'
    },
    //回到顶部
    backTop() {
      this.$refs.scroll.bscroll.scrollTo(0, 0, 500)
    },
    // 控制backTop组件显示于隐藏和切换栏是否吸顶
    contentScroll(position) {
      if (position.y < -850) {
        this.isHidden = false
      } else {
        this.isHidden = true
      }
      this.tabControlIsFix = ((-position.y) >= this.tabOffsetTop ? true : false)
    },
    //上拉加载更多
    upShowMore() {
      this.getHomeGoods(this.currentGood)
    },
    // 得到切换栏距离顶部的距离
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop
    }
  },
  mounted() {
    //创建一个全局事件,监听商品种类的点击
    this.$bus.$on('itemClick', this.getTabControlIndex)
  },
  activated() {
    this.$refs.scroll.bscroll.scrollTo(0, this.saveY)
    this.$refs.scroll.bscroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.bscroll.y
  }
}
</script>

<style lang='less' scoped>
#home {
  padding-top: 44px;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.tabControl {
  position: relative;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.hidden {
  display: none;
}
</style>