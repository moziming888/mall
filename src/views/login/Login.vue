<template>
  <div class="login">
    <nav-bar>
      <i class="back el-icon-arrow-left" slot="left" @click="backClick"></i>
      <div slot="center">登录</div>
    </nav-bar>
    <form class="login_form" @submit.prevent="loginSubmit">
      <section class="login_section">
        <input type="tel" placeholder="手机号" maxlength="11" v-model="phone" />
        <button
          class="get-code"
          :disabled="!checkPhone"
          :class="{ check_phone: checkPhone }"
          @click.prevent="getCode"
        >
          获取验证码
        </button>
      </section>
      <section class="login_section">
        <input type="text" placeholder="验证码" maxlength="6" v-model="code" />
      </section>
      <section class="login_agreement">
        温馨提示：未注册商城的手机号，登录时将自动注册，且代表您已同意
        <span class="agreement">《用户服务协议》</span>
        <span class="agreement">《隐私权政策》</span>
      </section>
      <button class="login-btn">登录</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from 'components/navbar/NavBar'
export default {
  name: 'Login',
  components: {
    NavBar
  },
  data() {
    return {
      phone: '',
      code: '',
      submit: false
    }
  },
  computed: {
    ...mapState(['user_id', 'isLogin']),

    // 验证手机号
    checkPhone() {
      // return /^1[34578]\d{9}$/.test(this.phone)
      return /^1\d{10}$/.test(this.phone)
    },
    // 验证验证码
    checkCode() {
      return /^\d{6}$/.test(this.code)
    }
  },
  methods: {
    getCode() {
      this.$toast.show('随意输6位数字！')
    },
    loginSubmit() {
      // let result
      // 短信登陆
      const { checkPhone, checkCode } = this
      if (this.phone === '') {
        this.$toast.show('手机号不能为空！')
        return
      } else if (!checkPhone) {
        this.$toast.show('手机号不正确，请13开头！')
        return
      } else if (!checkCode) {
        // 验证必须是6位数字
        this.$toast.show('请随机输入6位数字！')
        return
      }
      // 根据结果数据处理
      else if (this.isLogin !== '') {
        let user_id = Math.floor(Math.random() * 123456) + 651
        // let user_phone = parseInt(this.phone)
        this.$store.commit('handleUserName', user_id)
        this.$store.commit('handleUserPhone', this.phone)
        this.$store.commit('isLogin', true)
        // 去个人中心界面
        this.$router.replace('/profile')
      } else {
        this.$toast.show('登录失败，请重新登录！')
      }
    },
    backClick() {
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="stylus" scoped>
.login
  height 100vh
  z-index 999
  background-color $color-background
  .login_form
    max-width 90%
    margin 0 auto
    padding-top 1rem
    .login_section
      width 100%
      height 3rem
      position relative
      input
        width 100%
        height 100%
        font-size 1rem
        padding-left .5rem
        border 1px solid  $color-gray
        border-bottom none
        &:last-child
          border-bottom 1px solid  $color-gray
        &::placeholder
          color $color-gray-deep
        &::focus
          border none
      .get-code
        height 2rem
        margin .5rem 0
        padding 0 .5rem
        position absolute
        top 0
        right .5rem
        background-color: $color-gray
        color: $color-white
        &.check_phone
          background-color: $color-orange
    .login_agreement
      padding 1rem 0
      font-size .8rem
      .agreement
        color $color-red
    .login-btn
      display block
      width 90%
      height 3rem
      margin .5rem auto
      font-size 1.2rem
      color $color-white
      background $color-background-linear-o
      border-radius 1.5rem
</style>
