<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" :key="showImage" @load="imageLoad" />
    <div class="goods-content">
      <p class="title">{{ goodsItem.title }}</p>
      <p class="info">
        <span class="price">￥{{ goodsItem.price }}</span>
        <span class="collect">
          <i class="el-icon-star-off"></i>
          {{ goodsItem.cfav }}
        </span>
      </p>
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
  position: relative;
}
.goods-item img {
  width: 100%;
  display: block;
}
.goods-content {
  padding: 4px 2px 10px;
}
.goods-content .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  margin-bottom: 3px;
}
.goods-content .info {
  display: flex;
  justify-content: space-between;
  padding: 2px 0;
}
.goods-content .price {
  color: var(--color-tint);
}
.goods-content .collect {
  position: absolute;
  right: 0.1rem;
}

/* .goods-content .collect::before {
  content: "";
  position: absolute;
  left: -1rem;
  top: -0.1rem;
  width: 0.9rem;
  height: 0.9rem;
  background: url(~assets/img/common/collect.svg) 0 0/0.9rem 0.9rem;
} */
</style>
