<template>
  <swiper :options="swiperOption" ref="homeSwiper" v-if="banners.length > 0">
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
.swiper-slide img {
  width: 100%;
  text-align: center;
}
.swiper-pagination /deep/ .swiper-pagination-bullet {
  opacity: 1;
  background: var(--color-white);
}

.swiper-pagination /deep/ .swiper-pagination-bullet-active {
  opacity: 1;
  background: var(--color-high-text);
}
</style>
