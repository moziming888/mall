<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="stylus" scoped>
.nav-bar 
  position relative
  z-index 10
  display flex
  align-items center
  height 2.75rem
  text-align center
  .left, .right 
    width 3.75rem
  .center 
    flex 1

</style>
