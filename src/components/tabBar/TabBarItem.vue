<template>
  <div id="tab-bar-item" :class="{active:isActive}" @click="clickItem">
    <slot v-if="!isActive" name="item-img"></slot>
    <slot v-else name="item-img-active"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: ['path',],
  computed: {
    isActive() {
      return this.$route.path === this.path ? true : false
    }
  },
  methods: {
    clickItem() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style lang='less'>
#tab-bar-item {
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  height: 49px;
  img {
    height: 24px;
    width: 24px;
    margin: 5px auto 0;
  }
  div {
    padding-top: 4px;
    font-size: 14px;
  }
}
.active {
  color: red;
}
</style>