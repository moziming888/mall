<template>
  <tab-bar>
       <!-- activeColor=""修改字体颜色，默认是red -->
      <tab-bar-item path="/home">
        <img src="@assets/tabbar/home.svg" slot="icon" alt="">
        <img src="@assets/tabbar/home_active.svg" slot="active-icon">
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="@assets/tabbar/category.svg" slot="icon" alt="">
        <img src="@assets/tabbar/category_active.svg" slot="active-icon">
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img src="@assets/tabbar/shopcart.svg" slot="icon" alt="">
        <img src="@assets/tabbar/shopcart_active.svg" slot="active-icon">
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="@assets/tabbar/profile.svg" slot="icon" alt="">
        <img src="@assets/tabbar/profile_active.svg" slot="active-icon">
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
