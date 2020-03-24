<template>
  <div v-if="Object.keys(baseInfo).length !== 0" class="base-info">
    <div class="info-title">{{ baseInfo.title }}</div>
    <div class="info-price">
      <span class="new-price">{{ baseInfo.newPrice }}</span>
      <span class="old-price">{{ baseInfo.oldPrice }}</span>
      <span class="discount-desc" v-if="baseInfo.discountDesc">{{
        baseInfo.discountDesc
      }}</span>
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
        <i class="el-icon-circle-check"></i>
        <!-- <img :src="baseInfo.services[item - 1].icon" alt="" /> -->
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
  margin-top: 1rem;
  padding: 0 0.5rem;
  border-bottom: 0.2rem solid rgba(100, 100, 100, 0.1);
}
.info-title {
  font-weight: bold;
}
.info-price {
  padding: 0.6rem 0;
}
.info-price .new-price {
  color: var(--color-high-text);
  font-size: 1.2rem;
}
.info-price .old-price {
  text-decoration: line-through;
  font-size: 0.8rem;
  margin-left: 0.3rem;
}
.info-price .discount-desc {
  font-size: 0.8em;
  padding: 0.2rem 0.5rem;
  margin-left: 0.5rem;
  color: var(--color-white);
  background: var(--color-high-text);
  border-radius: 0.5rem;
  position: relative;
  top: -0.1rem;
}
.info-other {
  display: flex;
  justify-content: space-between;
  font-size: 0.6rem;
  padding: 0.3rem 0;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-service {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 1.3rem 0;
}
.info-service-item i {
  margin-right: 0.2rem;
}
.info-service-item span {
  font-size: 0.8rem;
  color: var(--color-black-s);
  /* line-height: 1.5rem; */
}
</style>
