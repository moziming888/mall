<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">商城</div>
    </nav-bar>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClickHome"
      ref="topTabControl"
      v-show="isTabFixed"
    />

    <scroll
      class="scroll-content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-banner :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClickHome"
        ref="tabControl"
      />
      <goods-list :goods-list="showGoods" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
    <main-tab-bar />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import HomeBanner from './childComps/HomeBanner'
import RecommendView from 'views/home/childComps/RecommendView'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import { getHomeMultidata, BANNER, RECOMMEND, getHomeGoods } from 'network/home'
import { debounce } from 'common/until'
import { itemListenerMixin, backTopMixin, tabControlMixin } from 'common/mixin'
import { NEW, POP, SELL, BACKTOP_DISTANCE } from '@/common/const'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeBanner,
    RecommendView,
    TabControl,
    GoodsList,
    Scroll
  },
  mixins: [itemListenerMixin, backTopMixin, tabControlMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      tabOffsetTop: 0,
      isTabFixed: false
    }
  },
  created() {
    // 1. 请求多个数据
    this._getHomeMultidata()
    // 2. 请求商品数据
    this._getHomeGoods(POP)
    this._getHomeGoods(NEW)
    this._getHomeGoods(SELL)
  },
  deactivated() {
    // 移除 itemImageLoad 事件监听器。
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  computed: {
    showGoods() {
      return this.goodsList[this.currentType].list
    }
  },
  methods: {
    /* 网络请求相关的方法 */
    _getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data[BANNER].list
        this.recommends = res.data[RECOMMEND].list
      })
    },
    _getHomeGoods(type) {
      const page = this.goodsList[type].page + 1
      getHomeGoods(type, page).then(res => {
        console.log(res)
        this.goodsList[type].list.push(...res.data.list)
        this.goodsList[type].page += 1
        // 完成上拉加载更多，要是不用finishPullUp，只能下拉加载一次
        this.$refs.scroll.finishPullUp()
      })
    },
    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = -position.y > BACKTOP_DISTANCE

      // 2.判断tabControl是否吸顶(position: fixed)
      this.isTabFixed = -position.y > this.tabOffsetTop
    },
    tabClickHome(index) {
      this.tabClick(index)
      // 让两个tabControl的currentIndex保持一致
      this.$refs.tabControl.currentIndex = index
      this.$refs.topTabControl.currentIndex = index
    },
    loadMore() {
      // 加载当前currentType的下一页数据
      this._getHomeGoods(this.currentType)
    },
    swiperImageLoad() {
      // 保证banner加载完成才计算tabControl的总高度
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    }
  }
}
</script>

<style lang="stylus" scoped>
.home 
  height 100vh
  .home-nav 
    background-color $color-tint
    color $color-white
  .scroll-content 
    overflow hidden
    position absolute
    top 2.75rem
    bottom 2.75rem
    left 0
    right 0
    /* calc计算属性，tab-control吸顶时不平滑，没有absolute平滑 */
    /* height: calc(100% - 89px); */
  .tab-control 
    position relative
    z-index 9
    background-color $color-white
</style>