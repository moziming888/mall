<template>
  <div class="profile">
    <nav-bar class="fixed-nav-bar" ref="NavBarFixed" v-show="isNavBarFixed">
      <div slot="center">{{ user_id }}</div>
      <router-link class="righta" to="/setting" slot="right">
        设置
      </router-link>
    </nav-bar>
    <scroll
      class="scroll-content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <header-icon-info />
      <div class="profile-container">
        <avatar-info />
        <card-info />
        <order-info />
        <order-info />
        <order-info />
        <order-info />
        <order-info />
        <order-info />
        <order-info />
      </div>
      <footer class="copyright">{{ copyright }}</footer>
    </scroll>

    <main-tab-bar />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/navbar/NavBar'
import HeaderIconInfo from './childComps/HeaderIconInfo'
import AvatarInfo from './childComps/AvatarInfo'
import CardInfo from './childComps/CardInfo'
import OrderInfo from './childComps/OrderInfo'

export default {
  name: 'Profile',
  components: {
    Scroll,
    NavBar,
    HeaderIconInfo,
    AvatarInfo,
    CardInfo,
    OrderInfo
  },
  data() {
    return {
      isNavBarFixed: false,
      List: [
        {
          title: '我的收藏',
          path: '/info',
          icon: 'el-icon-star-off'
        },
        {
          title: '我的客服',
          path: '/info',
          icon: 'el-icon-service'
        },
        {
          title: '推荐有奖',
          path: '/info',
          icon: 'el-icon-present'
        },
        {
          title: '商务合作',
          path: '/info',
          icon: 'el-icon-suitcase-1'
        },
        {
          title: '办卡有礼',
          path: '/info',
          icon: 'el-icon-wallet'
        },
        {
          title: '3小时公益',
          path: '/info',
          icon: 'el-icon-medal'
        },
        {
          title: '企业订餐',
          path: '/info',
          icon: 'el-icon-office-building'
        },
        {
          title: '设置',
          path: '/info',
          icon: 'el-icon-setting'
        }
      ],
      copyright: '拉扎斯网络科技有限公司'
    }
  },
  computed: {
    ...mapState(['isLogin', 'user_id', 'user_phone'])
  },
  methods: {
    contentScroll(position) {
      // 1.NavBar是否吸顶，大于22px出现
      this.isNavBarFixed = -position.y > 22
    }
  }
}
</script>
<style lang="stylus" scoped>
.profile
  .fixed-nav-bar
    position relative
    z-index 9
    background-color $color-white
    padding 0 1rem
  .scroll-content 
    overflow hidden
    position absolute
    top 0
    bottom 2.75rem
    left 0
    right 0
    padding 0 1rem
    .copyright
      font-size .6rem
      padding 1.5rem 0
      text-align center
      color $color-gray-s
      background-color $color-background
</style>
