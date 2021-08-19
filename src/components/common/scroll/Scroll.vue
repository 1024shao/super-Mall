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
      default: 0,
    }
  },
  data() {
    return {
      bscroll: null,
      refreshFunc: null
    }
  },
  methods: {
    refresh() {
      console.log('scroll重新加载');
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
    const refresh = debounce(this.refresh, 500)

    this.refreshFunc = () => {
      this.$nextTick(() => {
        refresh()
      })
    }
    this.$bus.$on('imgLoad', this.refreshFunc)
  },
  updated() {
    this.bscroll.refresh()
  },
  deactivated() {
    this.$bus.$off('imgLoad')
  },
}
</script>

<style>
</style>