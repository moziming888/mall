<template>
  <div class="cart-control">
    <i
      class="ico-remove el-icon-minus"
      @click.stop="updateFoodCount(false)"
    ></i>
    <span class="cart-count" v-if="item.count">{{ item.count }}</span>
    <i class="ico-add el-icon-plus" @click.stop="updateFoodCount(true)"></i>
  </div>
</template>

<script>
import { Mutation, mapMutations } from 'vuex'
export default {
  name: 'CartControl',
  props: {
    item: Object
  },
  methods: {
    ...mapMutations(['addCounter']),
    updateFoodCount(isAdd) {
      this.$store.dispatch('updateFoodCount', { isAdd, item: this.item })
    }
  }
}
</script>
<style lang="stylus" scoped>
.cart-control
  border 1px $color-gray solid
  border-radius .2rem
  .ico-remove,.ico-add
    display inline-block
    font-size 1rem
    padding 0 .3rem
    color $color-text
  .cart-count
    // vertical-align top
    text-align center
    font-size 1rem
    padding 0 1rem
    color $color-text
    border-left 1px $color-gray solid
    border-right 1px $color-gray solid
</style>
