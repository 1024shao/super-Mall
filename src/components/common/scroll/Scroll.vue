<template>
  <div class="wapper" ref="wapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { debounce } from '../../../common/utils'
export default {
  name: 'Wapper',
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      bscroll: null
    }
  },
  methods: {
    refresh() {
      this.bscroll.refresh()
    },

  },
  mounted() {
    this.bscroll = new BScroll(this.$refs.wapper, {
      pullUpLoad: true,
      probeType: this.probeType,
      click: true
    })
    //监听滚动事件
    this.bscroll.on('scroll', (position) => {
      //发送事件传递position,用来显示与否回到顶部按钮
      this.$emit('scroll', position)
    })
    // 监听上拉加载事件
    this.bscroll.on('pullingUp', () => {
      this.$emit('upShowMore')
      // 完成上拉加载
      this.bscroll.finishPullUp()
    })
    // 图片加载完scrollHeight刷新
    const refresh = debounce(this.refresh, 200)
    this.$bus.$on('imgLoad', () => {
      this.$nextTick(() => {
        refresh()
      })
    })
  },
  updated() {
    this.bscroll.refresh()
  },
}
</script>

<style>
</style>