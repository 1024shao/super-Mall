<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" :key="index" class="tab-control-item"
      :class="{active:currentIndex===index? true:false}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: ['title', 'currentIndex1'],
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$bus.$emit('itemClick', index)
    }
  },
  watch: {
    currentIndex1(val) {
      this.currentIndex = val
    }
  }
}
</script>

<style lang='less' scoped>
.tab-control {
  z-index: 9;
  display: flex;
  text-align: center;
  height: 49px;
  line-height: 49px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
  span {
    padding: 5px;
    border-bottom: 4px solid var(--color-tint);
  }
}
</style>