<template>
  <NavBar>
    <div slot="left" class="back" @click="backClick">
      <img src="../../../assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item,index) in title" :key="index" class="title-item" :class="{active:index===currentIndex}"
        @click="itemClick(index)">{{item}}
      </div>
    </div>
  </NavBar>
</template>

<script>
import NavBar from '@/components/navBar/NavBar'
export default {
  naem: 'DetaiNavBar',
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('navClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back {
  margin-top: 7px;
}
</style>