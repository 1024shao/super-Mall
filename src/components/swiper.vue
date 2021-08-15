<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in bannerList" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
//导入swiper css样式
import '../../node_modules/swiper/css/swiper.min.css'
export default {
  name: 'Swiper',
  props: ['banner'],
  data() {
    return {
      bannerList: []
    }
  },
  methods: {
    initSwiper() {
      new Swiper('.swiper-container', {
        loop: true,
        speed: 900,
        autoplay: {
          delay: 3000, //3秒切换一次
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          //type: 'fraction',
          //type : 'progressbar',
          //type : 'custom',
        },
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
      });
    }
  },
  watch: {
    banner(val) {
      this.bannerList = val
      this.$nextTick(() => {
        this.initSwiper()
      })
    }
  },
}
</script>

<style >
.swiper-slide img {
  width: 100%;
}
.swiper-container {
  --swiper-theme-color: #fff;
  --swiper-pagination-color: var(--color-tint); /* 两种都可以 */
}
</style>