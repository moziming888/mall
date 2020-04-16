<template>
  <div class="back-top">
    <i class="icon-top el-icon-top"></i>
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>
<style lang="stylus" scoped>
.back-top 
  position absolute
  right 1rem
  bottom 5rem
  padding 0.2rem
  background-color $color-background
  border-radius 50%
  opacity .9
  // box-shadow 0 0 0.4rem $color-gray-s
  .icon-top 
    font-size 1.5rem
    font-weight 700
    color $color-high-text

</style>
