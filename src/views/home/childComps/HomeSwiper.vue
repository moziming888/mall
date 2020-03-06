<template>
  <swiper :options="swiperOption" ref="homeSwiper" v-if="banners.length > 0">
    <swiper-slide
      class="swiper-slide"
      v-for="(item, index) in banners"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
      </a>
    </swiper-slide>
    <!-- 分页器 -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false,
      swiperOption: {
        loop: true,
        autoplay: true,
        autoplay: {
          delay: 2000,
          // 当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          // 点分页器会控制Swiper切换
          clickable: true
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.homeSwiper.swiper;
    }
  },

  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>

<style scoped>
/* 因为有scoped，直接写样式， swiper-pagination会不生效，只能引用*/
@import "~assets/css/swiper-pagination.css";

.swiper-slide img {
  width: 100%;
  text-align: center
}
</style>
