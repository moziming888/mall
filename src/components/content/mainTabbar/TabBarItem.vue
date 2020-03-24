<template>
  <div
    class="tabbar-item"
    :class="$router.replace === this.path ? 'active' : ''"
    @click="itemClick"
  >
    <div class="item-icon">
      <slot name="icon"></slot>
    </div>
    <div class="item-label">
      <slot name="label"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: true
    };
  },
  methods: {
    itemClick() {
      // 加上 .catch(() => {}); 是为了解决点击当前路由控制台报错问题
      this.$router.replace(this.path).catch(() => {});
    }
  }
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
}
.item-icon {
  font-size: 1.5rem;
}
.item-label {
  font-size: 0.8rem;
}
.active {
  color: #f00;
}
</style>
