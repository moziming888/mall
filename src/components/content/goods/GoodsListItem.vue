<template>
  <div class="goods-item" @click="itemClick">
    <img class="img" v-lazy="showImage" :key="showImage" @load="imageLoad" />
    <div class="goods-content">
      <p class="title">{{ listItem.title }}</p>
      <p class="info">
        <span class="price">￥{{ listItem.price }}</span>
        <span class="collect">
          <i class="el-icon-star-off"></i>
          {{ listItem.cfav }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsListItem',
  props: {
    listItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      // 判断是分类的列表图片，或是详情页的推荐列表图片，还是首页的列表
      return this.listItem.img || this.listItem.image || this.listItem.show.img
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      this.$router.push('/Detail/' + this.listItem.iid)
    }
  }
}
</script>
<style lang="stylus" scoped>
.goods-item 
  position relative
  .img 
    width 100%
    display block
  .goods-content 
    padding .2rem .1rem .6rem
    .title 
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      font-weight 700
      margin-bottom 3px
    .info 
      display flex
      justify-content space-between
      padding 2px 0
    .price 
      color $color-tint
.goods-content 
  .collect 
    position absolute
    right 0.1rem

</style>
