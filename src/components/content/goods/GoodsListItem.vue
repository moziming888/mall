<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" :key="showImage" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImage() {
      // 判断是分类的列表图片，或是详情页的推荐列表图片，还是首页的列表
      return (
        this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      );
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    itemClick() {
      // console.log(this.goodsItem.iid);
      this.$router.push("/Detail/" + this.goodsItem.iid);
    }
  }
};
</script>
<style scoped>
.goods-item {
  width: 48vw;
  position: relative;
}
.goods-item img {
  width: 100%;
  display: block;
}
.goods-info {
  padding: 4px 2px 10px;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-tint);
}
.goods-info .collect {
  position: absolute;
  right: 2px;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 1px;
  width: 14px;
  height: 14px;
  background: url(~assets/img/common/collect.svg) 0 0/14px 14px;
}
</style>
