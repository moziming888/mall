<template>
  <router-link to="/setting">
    <section class="avatar-info">
      <div class="info-logo">
        <i class="ico-user" :class="'el-icon-user-solid'"></i>
      </div>
      <div class="info-detail">
        <div>
          <h1 class="detail-title">
            <span>{{ 'id：' + this.user_id }}</span>
          </h1>
          <p class="detail-text">
            <i class="el-icon-mobile-phone"></i>
            {{ phoneFilter }}
          </p>
        </div>
        <i class="ico-right el-icon-arrow-right"></i>
      </div>
    </section>
  </router-link>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AvatarInfo',
  computed: {
    ...mapState(['isLogin', 'user_id', 'user_phone']),

    // 手机号中间四位隐藏
    phoneFilter() {
      return this.user_phone.replace(/(\d{3})(\d{4})(\d{4})/g, '$1****$3')
    }
  }
}
</script>
<style lang="stylus" scoped>
.avatar-info
  display flex
  align-items center
  padding .5rem 1rem 1rem
  .info-logo
    flex 0 0 5rem
    .ico-user
      font-size 2.4rem
      padding .4rem
      color $color-white
      border-radius 50%
      background-color $color-tint
  .info-detail
    flex 1
    display flex
    align-items center
    justify-content space-between
    .detail-title
      font-size 1.6rem
      padding-bottom .5rem
      color $color-brack
    .detail-text
      font-size .8rem
      color $color-gray
    .ico-right
        font-size 1.6rem
        color $color-gray
</style>
