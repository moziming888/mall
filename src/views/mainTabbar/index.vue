<template>
  <div class="main">
    <keep-alive>
      <router-view />
    </keep-alive>
    <main-tabbar />
  </div>
</template>
<script>
import MainTabbar from './MainTabbar'
export default {
  components: {
    MainTabbar
  }
}
</script>
<style lang="stylus" scoped>
.main
  height: 100vh;
  position: relative;
  padding-bottom: 4rem;
  overflow: hidden;
</style>
