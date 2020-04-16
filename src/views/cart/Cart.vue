<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
      <div class="right" slot="right" @click="manageCart">
        <span v-if="!isManage">管理</span>
        <span v-else>完成</span>
      </div>
    </nav-bar>
    <div class="cart-content">
      <div class="text" v-if="cartLength === 0">购物车竟然是空的~~</div>
      <cart-list v-else />
      <cart-bottom-bar ref="bottomBar" :is-manage="isManage" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from 'components/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  data() {
    return {
      isManage: false
    }
  },
  computed: {
    ...mapGetters(['cartLength'])
  },
  methods: {
    manageCart() {
      // this.refs.bottomBar.
      this.isManage = !this.isManage
    }
  }
}
</script>
<style lang="stylus" scoped>
.cart
  .nav-bar 
    background-color $color-tint
    color $color-white
    .right
      font-size .8rem
  .text 
    font-size 1.1rem
    text-align center
    margin-top 20%
</style>
