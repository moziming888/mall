<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-top">
      <img :src="shopInfo.shopLogo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div>{{ shopInfo.cSells | sellCountFilter }}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div>{{ shopInfo.cGoods }}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? '高' : '低' }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <router-link class="enter-shop" to="/">进店逛逛</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      if (value < 10000) return value
      return (value / 10000).toFixed(1) + '万'
    }
  }
}
</script>
<style lang="stylus" scoped>
.shop-info 
  margin 1rem 0 1rem
  .shop-top 
    display flex
    align-items center
    margin-left .5rem
    img 
      width 3rem
      height 3rem
      border-radius 50%
      border 1px solid rgba(126, 103, 103, 0.1)
    span 
      padding-left .6rem
  .shop-middle 
    display flex
    align-items center
    .shop-middle-item 
      flex 1
    .shop-middle-left 
      display flex
      justify-content space-evenly
      text-align center
      border-right 1px solid rgba(0, 0, 0, 0.1)
      .sells-text,.goods-text 
        font-size 0.6rem
        padding-top .2rem
    .shop-middle-right 
      display flex
      justify-content space-evenly
      font-size .8rem
      table 
        td 
          padding .2rem 0
      .score 
        color #5ea732
        padding 0 .2rem
      .score-better 
        color #f13e3a
      .better 
        span 
          background-color #5ea732
          color $color-white
          text-align center
      .better-more 
        span 
          background #f13e3a
  .shop-bottom 
    margin-top .6rem
    text-align center
    .enter-shop 
      background $color-gray-s
      color $color-high-text
      padding .2rem 1.5rem
      border-radius .8rem
</style>
