<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message = '默认内容', duration = 1500) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration);
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  z-index: 999;
  padding: 8px 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.65);
  font-size: 16px;
  color: #fff;
}
</style>