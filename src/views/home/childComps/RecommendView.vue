<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.id" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RcommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.recommend {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  font-size: 13px;
  margin-bottom: 10px;
}
.recommend-item {
  flex-grow: 4;
}
.recommend-item img {
  max-width: 70px;
}
</style>
