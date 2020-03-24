<template>
  <div class="goods-list">
    <goods-list-item
      class="goods-item"
      v-for="(item, index) in goodsList"
      :key="index"
      :goods-item="item"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.goods-list {
  width: 100%;
  padding: 0.3rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
}
.goods-item {
  width: 45%;
  text-align: center;
  font-size: 0.8rem;
}
</style>
