<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :list-item="item"
      />
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  }
}
</script>
<style lang="stylus" scoped>
.cart-list 
  height 100%
  .content
    overflow hidden
    position absolute
    top 2.75rem
    // 2.75rem + 2.5rem
    bottom 5.25rem
    left 0
    right 0

</style>
