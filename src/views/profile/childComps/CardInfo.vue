<template>
  <ul class="card">
    <li class="card-detail" v-for="(card, index) in cards" :key="index">
      <router-link to="/setting" class="detail-info">
        <h3 class="title">{{ card.title }}</h3>
        <p class="text">
          {{ card.text }}
          <i class="el-icon-arrow-right"></i>
        </p>
      </router-link>
      <!-- <i class="card-icon" :class="card.icon"></i> -->
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CardInfo',
  data() {
    return {
      cards: [
        {
          title: '红包省钱卡',
          text: '91元红包',
          icon: 'el-icon-present'
        },
        {
          title: '红包签到',
          text: '立即领取',
          icon: 'el-icon-bank-card'
        },
        {
          title: '会员中心',
          text: '打牌95折'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.card
  display flex
  align-items center
  justify-content space-around
  margin-bottom 1rem
  padding 1rem .5rem
  background-color $color-white
  border-radius .5rem
  box-shadow 0 0 .3rem $color-gray-s
  .card-detail
    // flex 1
    display flex
    justify-content space-between
    align-items center
    &:last-child
      margin-right 0
    .title
      font-size .8rem
      padding-bottom .5rem
    .text
      font-size .5rem
      color $color-tint
    .card-icon
      font-size 1.6rem
      color $color-red
</style>
