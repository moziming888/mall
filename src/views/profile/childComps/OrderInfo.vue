<template>
  <div class="order">
    <div class="order-title">
      <div class="title-left">
        我的订单
      </div>
      <div class="title-right">
        <span>查看全部订单</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <ul class="order-list">
      <li
        class="order-item"
        v-for="(item, index) in List"
        :key="index"
        @click="itemClick"
      >
        <i class="item-ico" :class="item.icon"></i>
        <span class="item-name">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OrderInfo',
  data() {
    return {
      List: [
        {
          name: '代付款',
          icon: 'el-icon-s-finance'
        },
        {
          name: '带发货',
          icon: 'el-icon-box'
        },
        {
          name: '待收货',
          icon: 'el-icon-truck'
        },
        {
          name: '评价',
          icon: 'el-icon-s-comment'
        },
        {
          name: '退款/售后',
          icon: 'el-icon-money'
        }
      ]
    }
  },
  methods: {
    itemClick() {
      this.$toast.show('页面未完善...')
    }
  }
}
</script>
<style lang="stylus" scoped>
.order
  margin-bottom 1rem
  padding 0 .5rem
  background-color $color-white
  border-radius .5rem
  box-shadow 0 0 .3rem $color-gray-s
  .order-title
    display flex
    justify-content space-between
    padding .5rem 0
    margin-bottom .5rem
    border-bottom 1px $color-gray-s solid
    .title-left
      font-size .8rem
      font-weight 700
      color $color-black
    .title-right
      font-size .6rem
      color $color-gray-deep
  .order-list
    display flex
    align-items center
    justify-content space-around
    text-align center
    padding .5rem 0
    .item-ico
      font-size 1.4rem
      color $color-high-text
      padding-bottom .3rem
    .item-name
      display block
      font-size .5rem
      
</style>
