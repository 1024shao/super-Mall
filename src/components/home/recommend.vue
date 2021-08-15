<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.acm" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: ['recommend']
}
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 23px 0;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 70%;
}
</style>