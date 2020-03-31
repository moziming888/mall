<template>
  <div class="shop-item">
    <div class="item-sell">
      {{ listItem.name }}
    </div>
    <div class="item-content">
      <div class="item-selector">
        <check-button
          :is-checked="listItem.checked"
          @click.native="checkClick"
        />
      </div>
      <div class="item-img">
        <img :src="listItem.imgURL" alt="商品图片" />
      </div>
      <div class="item-info">
        <div class="item-title">{{ listItem.title }}</div>
        <div class="info-bottom">
          <div class="item-price">¥{{ listItem.realPrice }}</div>
          <cart-control :item="listItem" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import CartControl from './CartControl'
import CheckButton from './CheckButton'

export default {
  name: 'CartListItem',
  components: {
    CartControl,
    CheckButton
  },
  props: {
    listItem: {
      type: Object,
      default() {
        return {}
      }
    },
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    ...mapState(['cartFoods']),
    ...mapGetters(['totalCount', 'totalPrice'])
  },
  methods: {
    checkClick() {
      this.listItem.checked = !this.listItem.checked
    }
  }
}
</script>
<style lang="stylus" scoped>
.shop-item 
  width 100%
  padding-bottom 0.5rem
  &:last-child 
    padding-bottom 1rem 
  .item-sell 
    padding 0.5rem 0.5rem 0
    font-size 1.1rem
    font-weight 700
    color $color-black
  .item-content 
    display flex
    padding 0.3rem
    border-bottom 1px solid $color-gray
    .item-selector 
      display flex
      justify-content center
      align-items center
    .item-title 
      /* 超出两行出现省略号 */
      text-overflow -o-ellipsis-lastline
      overflow hidden
      text-overflow ellipsis
      display -webkit-box
      -webkit-line-clamp 2
      line-clamp 2
      -webkit-box-orient vertical
    .item-img 
      padding 0.3rem
      img 
        width 5.5rem
        height 6.25rem
        overflow hidden
        border-radius 0.3rem
    .item-info 
      font-size 1rem
      padding 0.3rem 0.6rem
      position relative
      overflow hidden
    .info-bottom 
      display flex
      justify-content space-between
      margin-top 0.6rem
      position absolute
      bottom 0.6rem
      left 0.6rem
      right 0.6rem
      .item-price 
        color $color-high-text
</style>
