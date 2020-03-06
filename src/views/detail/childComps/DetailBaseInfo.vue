<template>
  <div v-if="Object.keys(baseInfo).length !== 0" class="base-info">
    <div class="info-title">{{ baseInfo.title }}</div>
    <div class="info-price">
      <span class="new-price">{{ baseInfo.newPrice }}</span>
      <span class="old-price">{{ baseInfo.oldPrice }}</span>
      <span
        class="discount-desc"
        v-if="baseInfo.discountDesc"
        :style="{ background: baseInfo.discountBgColor }"
        >{{ baseInfo.discountDesc }}</span
      >
    </div>
    <div class="info-other">
      <span>{{ baseInfo.columns[0] }}</span>
      <span>{{ baseInfo.columns[1] }}</span>
      <span>{{ baseInfo.services[baseInfo.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="(item, index) in baseInfo.services.length - 1"
        :key="index"
      >
        <img :src="baseInfo.services[item - 1].icon" alt="" />
        <span>{{ baseInfo.services[item - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  border-bottom: 4px solid rgba(100, 100, 100, 0.1);
}
.info-title {
  font-weight: bold;
}
.info-price {
  padding: 10px 0;
}
.info-price .new-price {
  color: var(--color-high-text);
  font-size: 1.2em;
}
.info-price .old-price {
  text-decoration: line-through;
  font-size: 0.8em;
  margin-left: 5px;
}
.info-price .discount-desc {
  font-size: 0.8em;
  padding: 2px 8px;
  margin-left: 5px;
  color: #fff;
  /* background: var(--color-high-text); */
  border-radius: 8px;
  position: relative;
  top: -5px;
}
.info-other {
  display: flex;
  justify-content: space-between;
  font-size: 0.6em;
  padding: 5px 0;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-service {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
}
.info-service-item img {
  width: 14px;
  position: relative;
  top: 2px;
  right: 1px;
}
.info-service-item span {
  font-size: 0.8em;
  color: #333;
}
</style>
