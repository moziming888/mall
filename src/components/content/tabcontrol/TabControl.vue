<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      // 把itemClick 传递给父组件的tabClick
      this.$emit('tabClick', index)
    }
  }
}
</script>
<style lang="stylus" scoped>
.tab-control 
  display flex
  justify-content space-evenly
  align-items center
  text-align center
  font-size 1.6
  height 2.5rem
  line-height 2.5rem
  .tab-control-item 
    flex 1
    span 
      padding .3rem
    &.active 
      color $color-high-text
      span 
        border-bottom 2px solid $color-tint

</style>
