<template>
  <div class="goods" v-if="Object.keys(categoryGoods).length !== 0">
    <goods-list-item
      class="goods-item"
      v-for="item in categoryGoods"
      :key="item.id"
      :goods-item="item"
    />
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem";
export default {
  name: "TabContentGoods",
  components: {
    GoodsListItem
  },
  props: {
    categoryGoods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.goods {
  width: 100%;
  padding: 0.6rem;
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
