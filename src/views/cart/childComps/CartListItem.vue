<template>
  <div class="shop-item">
    <div class="item-sell">
      {{ shopInfo.name }}
    </div>
    <div class="item-content">
      <div class="item-selector">
        <check-button
          :is-checked="baseInfo.checked"
          @click.native="checkClick"
        />
      </div>
      <div class="item-img">
        <img :src="baseInfo.imgURL" alt="商品图片" />
      </div>
      <div class="item-info">
        <div class="item-title">{{ baseInfo.title }}</div>
        <div class="info-bottom">
          <div class="item-price left">¥{{ baseInfo.realPrice }}</div>
          <div class="item-count right">x{{ baseInfo.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

export default {
  name: "CartListItem",
  components: {
    CheckButton
  },
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkClick() {
      this.baseInfo.checked = !this.baseInfo.checked;
    }
  }
};
</script>
<style scoped>
.shop-item {
  width: 100%;
  margin-bottom: 0.5rem;
}
.item-sell {
  padding: 0.5rem 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-black);
}
.item-content {
  display: flex;
  padding: 0.3rem;
  border-bottom: 1px solid var(--color-gray);
}
.item-content .item-selector {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-content .item-title {
  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.item-content .item-img {
  padding: 0.3rem;
}
.item-content .item-img img {
  width: 5.5rem;
  height: 6.25rem;
  overflow: hidden;
  border-radius: 0.3rem;
}
.item-content .item-info {
  font-size: 1rem;
  padding: 0.3rem 0.6rem;
  position: relative;
  overflow: hidden;
}

.item-content .info-bottom {
  margin-top: 0.6rem;
  position: absolute;
  bottom: 0.6rem;
  left: 0.6rem;
  right: 0.6rem;
}

.item-content .info-bottom .item-price {
  color: var(--color-orange);
}
</style>
