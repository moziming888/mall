<template>
  <div>
    <div :xs="8" :sm="6" :md="4" :lg="3">
      <div
        class="item"
        v-for="(item, index) in subcategories.list"
        :key="index"
      >
        <a :href="item.link">
          <img class="item-img" v-lazy="item.image" @load="imageLoad" alt="" />
          <div class="item-text">{{ item.title }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContentCategory",
  props: {
    subcategories: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  methods: {
    imageLoad() {
      // 子分类subcategory图片的防抖
      this.$emit("subImageLoad");
    }
  }
};
</script>
<style scoped>
.item {
  text-align: center;
  font-size: 12px;
}

.item-img {
  width: 80%;
}

.item-text {
  margin-top: 15px;
}
</style>
