<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <tab-menu class="menu" :categories="categories" @selectItem="selectItem" />

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :data="[categoryData]"
    >
      <tab-content-category
        :subcategories="showSubcategory"
        @subImageLoad="subImageLoad"
      />
      <tab-control
        class="tab-control"
        :titles="['综合', '新品', '销量']"
        @tabClick="tabClick"
      />
      <tab-content-goods :category-goods="showCategoryGoods" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabMenu from "./childComps/TabMenu";
import Scroll from "components/common/scroll/Scroll";
import TabContentCategory from "./childComps/TabContentCategory";
import TabControl from "components/content/tabcontrol/TabControl";
import TabContentGoods from "./childComps/TabContentGoods";

import {
  getCategory,
  getSubcategory,
  getCategoryGoods
} from "network/category";
import { BACKTOP_DISTANCE, POP, SELL, NEW } from "common/const";
import { itemListenerMixin, backTopMixin, tabControlMixin } from "common/mixin";

export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
    Scroll,
    TabContentCategory,
    TabControl,
    TabContentGoods
  },
  mixins: [itemListenerMixin, backTopMixin, tabControlMixin],
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1
    };
  },
  created() {
    this._getCategory();
    // this._getSubcategories();
    // this._getCategoryGoods();
  },
  destroyed() {
    // 移除minix混入的 itemImageLoad 事件监听器。
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryGoods() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryGoods[
        this.currentType
      ];
    }
  },
  methods: {
    /**
     * 网络请求相关的方法
     */
    _getCategory() {
      getCategory().then(res => {
        // console.log(res);

        // 1.获取左侧分类数据
        this.categories = res.data.category.list;

        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryGoods: {
              // 直接在minix里面定义了
              // pop: [],
              // new: [],
              // sell: []
            }
          };
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
        this._getCategoryGoods(POP);
        this._getCategoryGoods(NEW);
        this._getCategoryGoods(SELL);
        console.log(res);
      });
    },
    _getCategoryGoods(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryGoods(miniWallkey, type).then(res => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryGoods[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },

    /**
     * 事件监听的方法
     */
    contentScroll(position) {
      // 是否显示返回顶部图标
      this.isShowBackTop = -position.y > BACKTOP_DISTANCE;
    },
    selectItem(index) {
      // 点击分类显示对应的子分类
      this._getSubcategories(index);
    },
    subImageLoad() {
      // 子分类subcategory图片的防抖,newRefresh在minix里面
      this.newRefresh();
    }
  }
};
</script>
<style scoped>
#category {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 45px;
  left: 90px;
  right: 0;
  /* calc计算属性，tab-control吸顶时不平滑，没有absolute平滑 */
  /* height: calc(100% - 89px); */
}
#category .el-aside {
  width: 80px;
}
</style>
