<template>
  <div v-if="Object.keys(categoryGoods).length !== 0">
    <goods-list-item
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
<style scoped></style>
