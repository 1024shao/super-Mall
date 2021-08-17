<template>
  <div class="params-wrap">
    <div v-for="(item, index) in paramInfo.sizes" :key="index-1">
      <div v-for="(list, indey) in item" class="flex" :key="indey*10">
        <div v-for="(listitem, indez) in list" class="rule-list-item" :key="indez*100">
          {{listitem}}
        </div>
      </div>
    </div>
    <div v-for="(info, index) in paramInfo.infos" :key="index" class="flex info-list-wrap">
      <div class="info-list-tit">{{info.key}}</div>
      <div>{{info.value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    console.log(Object.keys(this.paramInfo).length);
  }
}
</script>

<style lang="less" scoped>
.params-wrap {
  position: relative;
  z-index: 9;
  border-top: 4px solid #ececec;
  border-bottom: 4px solid #ececec;
  background-color: #fff;
}
.rule-list-item {
  font-size: 12px;
  width: 20%;
  border-bottom: 1px solid #ececec;
  padding: 10px 4px;
}
.info-list-wrap {
  font-size: 14px;
  border-bottom: 1px solid #ececec;
  padding: 10px 4px;
  line-height: 20px;
  .info-list-tit {
    width: 18%;
  }
}
</style>