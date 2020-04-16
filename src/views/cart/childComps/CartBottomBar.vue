<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div class="check-content">
        <check-button
          class="check-button"
          :is-checked="isSelectAll"
          @click.native="checkClick"
        />
        <span>全选</span>
      </div>
      <div class="total-price">
        合计: <span class="price">{{ totalPrice | showPrice }}</span>
      </div>
    </div>

    <div class="bar-right" v-if="!isManage" @click="calcClick">去结算</div>
    <div class="right-delete" v-else @click="deleteClick()">删除</div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'
import { mapGetters } from 'vuex'

export default {
  name: 'CarttBottonBar',
  components: {
    CheckButton
  },
  props: {
    isManage: {
      type: Boolean
    }
  },
  computed: {
    ...mapGetters(['cartList', 'cartLength']),
    isSelectAll() {
      if (this.cartLength === 0) return false
      return !this.cartList.find(item => !item.checked)
    },
    totalPrice() {
      return this.cartList
        .filter(item => {
          return item.checked
        })
        .reduce((preValue, item) => {
          return preValue + item.realPrice * item.count
        }, 0)
    }
  },
  filters: {
    showPrice(realPrice) {
      // 只显示两位小数
      return '￥' + realPrice.toFixed(2)
    }
  },
  methods: {
    // ...mapMutations('deleteCart'),
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => (item.checked = false))
      } else {
        this.cartList.forEach(item => (item.checked = true))
      }
    },
    calcClick() {
      // 把toast做成了插件形式，所以不需要import引用
      if (this.totalPrice === 0) {
        this.$toast.show('请选择购买的商品')
      } else {
        this.$toast.show('正在跳转到结算页...')
      }
    },
    // 删除选中的
    deleteClick() {
      for (var i = this.cartList.length - 1; i >= 0; i--) {
        if (this.cartList[i].checked === true) {
          this.cartList.splice(i, 1)
        }
      }
      // this.cartList.forEach(item => {
      //   if ((item.checked = true)) {
      //     this.cartList.splice(item, 1)
      //   }
      // })
    }
  }
}
</script>
<style lang="stylus" scoped>
.bottom-bar 
  height 2.5rem
  line-height 2.5rem
  padding 0.3rem .5rem
  background $color-gray-s
  position absolute
  left 0
  right 0
  bottom 2.8rem
  display flex
  align-items center
  justify-content space-between
  .bar-left 
    display flex
    justify-content center
    align-items center
    .check-button 
      display inline-block
      margin-right 0.3rem
    .total-price 
      margin-left 1rem
    .price 
      color $color-red
  .bar-right 
    font-size 1.1rem
    color $color-white
    line-height 1.5
    padding 0 1rem
    background $color-background-linear-o
    border-radius: 1.2rem
  .right-delete
    font-size 1rem
    padding 0 1rem
    line-height 1.5
    color $color-red
    border 1px $color-red solid
    border-radius: 1.2rem
</style>
