<template>
  <nav-bar class="detail-nav-bar">
    <i class="back el-icon-arrow-left" slot="left" @click="backClick"></i>
    <div slot="center" class="title">
      <span
        class="title-item "
        v-for="(item, index) in titleInfos"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="itemClick(index)"
      >
        {{ item }}
      </span>
    </div>
    <i class="cart el-icon-shopping-cart-2" slot="right" @click="cartClick"></i>
  </nav-bar>
</template>

<script>
import NavBar from 'components/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  props: {
    titleInfos: {
      type: Array,
      default() {
        return ['商品', '参数', '评论', '推荐']
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('itemClick', index)
    },
    backClick() {
      this.$router.back()
      // this.$router.go(-1);
    },
    cartClick() {
      this.$router.push('/cart')
    }
  }
}
</script>
<style lang="stylus" scoped>
.detail-nav-bar 
  font-weight normal
  background $color-white
  .title 
    display flex
    align-items center
    font-size 1.1rem
    .title-item 
      flex 1
      &.active 
        color $color-high-text
</style>
