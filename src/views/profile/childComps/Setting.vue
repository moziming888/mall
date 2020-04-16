<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="left" @click="backClick">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div slot="center">设置</div>
    </nav-bar>
    <div class="profile-container">
      <p class="title-small">基础信息</p>
      <ul>
        <list-item>
          <div slot="left">
            <span class="title">头像</span>
          </div>
          <div slot="right">
            <i class="info-img el-icon-user-solid" alt="头像" />
            <i class="ico-right el-icon-arrow-right"></i>
          </div>
        </list-item>
        <list-item>
          <div slot="left">
            <span class="title">id</span>
          </div>
          <div slot="right">
            <span>{{ this.user_id }}</span>
            <i class="ico-right el-icon-arrow-right"></i>
          </div>
        </list-item>
        <list-item>
          <div slot="left">
            <span class="title">手机</span>
          </div>
          <div slot="right">
            <span>{{ this.phoneHide }}</span>
            <i class="ico-right el-icon-arrow-right"></i>
          </div>
        </list-item>
      </ul>
      <p class="title-small mt">账号绑定</p>
      <list :list="accountBind"> </list>
      <p class="logout" @click="logout">退出登录</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import NavBar from 'components/navbar/NavBar'
import ListItem from './ListItem'
import List from './List'

export default {
  name: 'Setting',
  components: {
    NavBar,
    ListItem,
    List
  },
  data() {
    return {
      accountBind: [
        // {
        //   title: '手机',
        //   icon: 'el-icon-mobile-phone',
        //   path: '',
        //   info: this.phoneHide
        // },
        {
          title: '微博',
          icon: 'el-icon-mobile-phone',
          path: '',
          info: '未绑定'
        },
        {
          title: '微信',
          icon: 'el-icon-mobile-phone',
          path: '',
          info: '未绑定'
        },
        {
          title: 'QQ',
          icon: 'el-icon-mobile-phone',
          path: '',
          info: '未绑定'
        }
      ]
    }
  },
  computed: {
    ...mapState(['user_id', 'user_phone']),

    phoneHide() {
      // ;/(\d{3})(\d{4})(\d{4})/g, '$1****$3'
      return this.user_phone.replace(/(\d{2})(\d{4})(\d{4})/g, '$1****$2')
    }
  },
  methods: {
    ...mapMutations(['loginOut']),
    backClick() {
      this.$router.back()
    },
    logout() {
      this.loginOut()
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="stylus" scoped>
.profile
  .nav-bar 
    background-color $color-tint
    color $color-white
  .profile-container
    padding 0 1rem
    .title-small
      font-size .8rem
      padding 1rem 0 .6rem
    .mt
      margin-top .5rem
    .info-img
      font-size 1.6rem
      padding .2rem
      color $color-white
      background-color $color-green
      border-radius 50%
    .ico-right
      padding-left .4rem
  .logout
    margin 1rem auto 0
    text-align center
    font-size 1.2rem
    font-weight 700
    color $color-red
</style>
