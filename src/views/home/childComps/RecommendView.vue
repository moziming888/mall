<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.id" class="recommend-item">
      <router-link to="/category">
        <!-- <router-link :to="item.link"> -->
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </router-link>
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
  font-size: 0.8rem;
  margin-bottom: 0.6rem;
}
.recommend-item {
  flex-grow: 4;
}
.recommend-item img {
  max-width: 4.375rem;
}
</style>
