<template>
  <div class="tab-bar">
    <router-link
      class="tabbar-item"
      v-for="(item, index) in tabbarList"
      :key="index"
      :class="$route.replace === item.path ? 'active' : ''"
      :to="item.path"
    >
      <i class="item-icon" :class="item.icon"></i>
      <span class="item-label">{{ item.name }}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'MainTabBar',
  data() {
    return {
      active: true,
      tabbarList: [
        {
          name: '首页',
          path: '/home',
          icon: 'el-icon-s-home'
        },
        {
          name: '分类',
          path: '/category',
          icon: 'el-icon-menu'
        },
        {
          name: '购物车',
          path: '/cart',
          icon: 'el-icon-shopping-cart-2'
        },
        {
          name: '我的',
          path: '/profile',
          icon: 'el-icon-user'
        }
      ]
    }
  },
  methods: {
    itemClick() {
      // 加上 .catch(() => {}); 是为了解决点击当前路由控制台报错问题
      this.$router.replace(this.path).catch(() => {})
    }
  }
}
</script>
<style lang="stylus" scoped>
.tab-bar 
  height 2.75rem
  text-align center
  display flex
  justify-content space-around
  align-items center
  position fixed
  left 0
  right 0
  bottom 0
  background-color $color-background
  box-shadow 0 -1px 1px rgba(100, 100, 100, 0.1)
  .tabbar-item 
    flex 1
    &.active
      color $color-high-text
  .item-icon 
    font-size 1.3rem
  .item-label
    display block
    font-size 0.8rem

</style>
