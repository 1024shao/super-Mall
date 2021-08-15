<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <TabBar />
  </div>
</template>

<script>
import TabBar from './components/tabBar/TabBar'

export default {
  name: 'App',
  components: {
    TabBar
  },

}
</script>

<style>
@import './assets/css/base.css';
</style>
