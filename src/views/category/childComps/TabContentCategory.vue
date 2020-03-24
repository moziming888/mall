<template>
  <div class="category">
    <div class="item" v-for="(item, index) in subcategories.list" :key="index">
      <!-- <router-link :to="item.link" class="item-link"> -->
      <router-link to="/" class="item-link">
        <img class="item-img" v-lazy="item.image" @load="imageLoad" alt="" />
        <div class="item-text">{{ item.title }}</div>
      </router-link>
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
.category {
  width: 100%;
  padding: 0.4rem 0.2rem;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-wrap: wrap;
}
.item {
  width: 33%;
  text-align: center;
  font-size: 0.8rem;
}
.item-img {
  width: 80%;
}

.item-text {
  margin: 0.3rem 0 1rem;
}
@media (min-width: 500px) {
  .item {
    width: 20%;
    font-size: 0.9rem;
  }
}
</style>
