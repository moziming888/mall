<template>
  <div class="check-button" :class="{ check: isChecked }">
    <i class="el-icon-success"></i>
  </div>
</template>
<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="stylus" scoped>
.check-button 
  font-size 1.2rem
  color $color-gray-deep
  &.check 
    color $color-high-text
</style>
