<template>
  <div id="menu">
    <scroll class="content">
      <div class="menu-list">
        <div
          class="menu-list-item"
          :class="{ active: index === currentIndex }"
          v-for="(item, index) in categories"
          :key="index"
          @click="itemClick(index)"
        >
          {{ item.title }}
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "TabMenu",
  components: {
    Scroll
  },
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("selectItem", index);
    }
  }
};
</script>
<style scoped>
#menu {
  height: calc(100vh - 44px - 45px);
  width: 90px;
  background-color: #f6f6f6;
  position: relative;
}
.content {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.menu-list {
  width: 90px;
}
.menu-list-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
}
.menu-list-item.active {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>
