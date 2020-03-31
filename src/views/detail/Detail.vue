<template>
  <div class="detail">
    <detail-nav-bar ref="navBar" @titleClick="titleClick" />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <detail-swiper :top-images="topImages" />
      <detail-base-info :base-info="baseInfo" />
      <detail-shop-info :shop-info="shopInfo" />
      <detail-goods-info
        :goods-info="goodsInfo"
        @detailImageLoad="detailImageLoad"
      />
      <detail-params-info ref="param" :params-info="paramsInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods-list="recommends" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
    <detail-bottom-bar @addToCart="addToCart" />
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import Scroll from 'components/common/scroll/Scroll'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottomBar from './childComps/DetailBottomBar'

import { getDetail, getReCommend, BaseInfo } from 'network/detail'
import { debounce } from 'common/until'
import { itemListenerMixin, backTopMixin } from 'common/mixin'
import { BACKTOP_DISTANCE } from 'common/const'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    Scroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      topImages: [],
      baseInfo: {},
      shopInfo: {},
      goodsInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    }
  },
  props: ['id'],
  created() {
    // 1. 获取页面详细数据
    this._getDetail()

    // 2. 请求推荐数据
    this._getRecommend()
  },
  updated() {
    // 3. 给getThemeTopY赋值(对给this.themeTopYs赋值的操作进行防抖),获取正确的高度
    this.getThemeTopY = debounce(() => {
      this._getThemeTopY()
    }, 100)
  },
  destroyed() {
    // 移除 itemImageLoad 事件监听器。
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  methods: {
    _getDetail() {
      // 一、保存传入的id，使用 props 解耦方式，this.id = res.iid;
      const id = this.id

      // 二、根据iid请求详细数据
      getDetail(id).then(res => {
        this.id = res.iid
        // 1. 获取数据
        console.log(res)
        const data = res.result

        // 2.获取顶部的图片轮播数据
        this.topImages = data.itemInfo.topImages

        // 3.获取商品信息
        this.baseInfo = new BaseInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        )

        // 4.获取商家信息
        this.shopInfo = data.shopInfo
        // 5.保存商品详细数据
        this.goodsInfo = data.detailInfo

        // 6.获取参数的信息
        this.paramsInfo = data.itemParams

        // 7.获取评论的信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      })
    },
    _getRecommend() {
      // 三、请求推荐数据
      getReCommend().then(res => {
        // console.log(res);
        this.recommends = res.data.list
      })
    },
    _getThemeTopY() {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
      // console.log(this.themeTopYs);
    },
    detailImageLoad() {
      // goodsInfo中的图片防抖，newRefresh在minix里面
      this.newRefresh()

      this.getThemeTopY()
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
    },
    contentScroll(position) {
      // 1.获取y值
      const positionY = -position.y

      // 2.nav的tab菜单点击到达某处，positionY 和themeTopYs 进行对比
      let length = this.themeTopYs.length
      for (let i = 0; i < length - 1; i++) {
        /*
         * 方案二:
         *   条件: 给themeTops最后添加一个很大的值, 用于和最后一个主题的top进行比较.
         *   优点: 简洁明了, 便于理解
         *   缺点: 需要引入一个较大的int数字；Number.MAX_VALUE
         * 疑惑: 在第一个判断中, 为什么不能直接判断(currentPos >= this.themeTopYs[i])即可?
         * 解答: 比如在某一个currentPos大于第0个时, 就会break, 不会判断后面的i了.
         */
        if (
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          if (this.currentIndex !== i) {
            this.currentIndex = i
            this.$refs.navBar.currentIndex = this.currentIndex
          }
          break
        }
      }

      // 3.是否显示返回顶部图标
      this.isShowBackTop = -position.y > BACKTOP_DISTANCE
    },
    addToCart() {
      // 1.创建对象
      const product = {}
      // 2.对象信息
      product.iid = this.iid
      product.name = this.shopInfo.name
      product.imgURL = this.topImages[0]
      product.title = this.baseInfo.title
      product.desc = this.baseInfo.desc
      product.realPrice = this.baseInfo.realPrice
      // 3.添加到Store中
      this.$store.dispatch('addCart', product)
    }
  }
}
</script>
<style lang="stylus" scoped>
.detail 
  height 100vh
  position relative
  z-index 1
  background $color-white
  .tab-fixed
    position fixed
    top 2.75rem
    width 100%
    background-color $color-white
    z-index 9
  .content 
    overflow hidden
    /* calc计算属性，tab-control吸顶时不平滑，没有absolute平滑 */
    /* height: calc(100% - 44px); */
    position absolute
    top 2.75rem
    bottom 3.25rem
    left 0
    right 0
</style>
