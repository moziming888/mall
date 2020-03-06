<template>
  <swiper :options="swiperOption" ref="detailSwiper">
    <swiper-slide
      class="swiper-slide"
      v-for="(item, index) in topImages"
      :key="index"
    >
      <img :src="item" alt="" />
    </swiper-slide>
    <!-- 分页器 -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOption: {
        //显示分页
        pagination: {
          el: ".swiper-pagination"
        },
        //自动轮播
        autoplay: {
          delay: 2000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        //开启循环模式
        loop: true
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.detailSwiper.swiper;
    }
  }
};
</script>
<style scoped>
@import "~assets/css/swiper-pagination.css";
.swiper-slide {
  width: 100%;
  height: 50vh;
  /* 垂直居中 */
  display: flex;
  align-items: center;
  /* 水平居中 */
  /* justify-content: center; */
}
.swiper-slide img {
  width: 100%;
}
</style>
