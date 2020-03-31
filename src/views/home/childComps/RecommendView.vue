<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.id">
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
  name: 'RcommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.recommend 
  display flex
  justify-content center
  align-items center
  flex-wrap wrap
  font-size 0.8rem
  text-align center
  .recommend-item 
    flex 1
    padding 1rem .8rem
    img
      width 100%
      margin 0 auto .5rem
</style>
