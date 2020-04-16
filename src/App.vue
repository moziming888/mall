<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import "~assets/stylus/_reset.styl"
#app
  position relative
  left 0
  right 0
  top 0
  bottom 0
</style>
