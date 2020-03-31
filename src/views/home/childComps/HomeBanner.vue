<template>
  <swiper :options="swiperOption" ref="HomeBanner" v-if="banners.length > 0">
    <swiper-slide
      class="swiper-slide"
      v-for="(item, index) in banners"
      :key="index"
    >
      <router-link to="/category">
        <img :src="item.image" alt="" @load="imageLoad" />
      </router-link>
    </swiper-slide>
    <!-- <swiper-slide class="swiper-slide">
      <router-link to="/category">
        <img :src="banners[1].image" alt="" @load="imageLoad" />
      </router-link>
    </swiper-slide> -->
    <!-- 分页器 -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeBanner',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false,
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2000,
          // 当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          // 点分页器会控制Swiper切换
          clickable: true
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.HomeBanner.swiper
    }
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper-slide
  img 
    width 100%
    text-align center
.swiper-pagination 
  >>> .swiper-pagination-bullet 
    opacity 1
    background $color-white
  >>> .swiper-pagination-bullet-active 
    opacity 1
    background $color-high-text
</style>
