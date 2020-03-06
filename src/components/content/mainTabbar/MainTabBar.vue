<template>
  <div class="tab-bar">
    <!-- activeColor=""修改字体颜色，默认是red -->
    <tab-bar-item path="/home">
      <img src="~assets/img/tabbar/home.svg" slot="icon" alt="" />
      <img src="~assets/img/tabbar/home_active.svg" slot="active-icon" />
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="~assets/img/tabbar/category.svg" slot="icon" alt="" />
      <img src="~assets/img/tabbar/category_active.svg" slot="active-icon" />
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img src="~assets/img/tabbar/shopcart.svg" slot="icon" alt="" />
      <img src="~assets/img/tabbar/shopcart_active.svg" slot="active-icon" />
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="~assets/img/tabbar/profile.svg" slot="icon" alt="" />
      <img src="~assets/img/tabbar/profile_active.svg" slot="active-icon" />
      <div slot="text">我的</div>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBarItem
  }
};
</script>

<style scoped>
.tab-bar {
  display: flex;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}
</style>
