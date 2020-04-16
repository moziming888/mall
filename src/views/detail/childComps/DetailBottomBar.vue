<template>
  <div class="bottom-bar">
    <ul class="bar-left">
      <li class="bar-item" v-for="(item, index) in List" :key="index">
        <div v-if="!item.icon2" @click="addToast">
          <i class="icon" :class="item.icon"></i>
          <span class="text">{{ item.name }}</span>
        </div>
        <div v-else @click="toggleFavorite">
          <i
            class="icon"
            :class="[
              isFavorite ? item.icon2 : item.icon,
              { active: isFavorite }
            ]"
          ></i>
          <span class="text">{{ isFavorite ? item.name2 : item.name }}</span>
        </div>
      </li>
    </ul>
    <div class="bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="addBuy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  data() {
    return {
      isFavorite: false,
      List: [
        {
          name: '客服',
          icon: 'el-icon-chat-dot-round'
        },
        {
          name: '店铺',
          icon: 'el-icon-takeaway-box'
        },
        {
          name: '收藏',
          name2: '已收藏',
          icon: 'el-icon-star-off',
          icon2: 'el-icon-star-on'
        }
      ]
    }
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite
    },
    addToast() {
      this.$toast.show('页面未完善...')
    },
    addToCart() {
      this.$emit('addToCart')
      // 把toast做成了插件形式，可以直接调用
      this.$toast.show('已成功添加到购物车')
    },
    addBuy() {
      this.$toast.show('正在跳转到结算页...')
    }
  }
}
</script>
<style lang="stylus" scoped>
.bottom-bar 
  height 3.25rem
  background $color-background
  position absolute
  left 0
  right 0
  bottom 0
  display flex
  text-align center
  justify-content space-around
  .bar-left 
    width 40%
    display:-webkit-flex;
    display flex
    align-items center
    .bar-item
      width 100%
      flex-grow:1;
      .icon 
        font-size 1.3rem
        color $color-text
        &.active
          color $color-red
      .text 
        display block
        font-size 0.6rem
        padding-top 0.1rem
  .bar-right
    display flex
    align-items center
    justify-content space-evenly
    color $color-white
    margin 0.6rem 0
    .cart,.buy 
      padding 0.5rem 1rem
      cursor pointer
    .cart 
      background $color-background-linear-y
      border-radius 1.25rem 0 0 1.25rem
    .buy 
      background $color-background-linear-o
      border-radius 0 1.25rem 1.25rem 0 


@media (max-width: 350px) 
  .cart, .buy 
    padding 0.5rem 0.5rem

</style>
