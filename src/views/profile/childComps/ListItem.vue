<template>
  <li class="list-item">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </li>
</template>

<script>
export default {
  name: 'ListItem'
}
</script>
<style lang="stylus" scoped>
.list-item
  display flex
  align-items center
  justify-content space-between
  height 3rem
  border-bottom 1px solid $color-gray-sss
  &:last-child
    border-bottom none
</style>
