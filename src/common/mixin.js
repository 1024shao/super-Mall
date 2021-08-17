import BackTop from '@/components/common/BackTop'
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isBackTopShow: false,
    }
  },
  methods: {
    // 回到顶部
    backTopClick() {
      this.$refs.detailScroll.bscroll.scrollTo(0, 0, 500)
    }
  }
}