import { debounce } from "common/until";
import { POP, NEW, SELL } from "./const";

import BackTop from "components/common/backTop/BackTop";

// 对GoodsLIistItem的图片进行防抖，直接引用即可。但是需要销毁，因为点击其他页面时，不需要监听
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    };
  },
  mounted() {
    // 1. 监听图片加载完成的事件
    // scroll.refresh传的是函数，scroll.refresh()传的是函数的的返回值，100是延迟时间
    // 每加载一张图片，就重刷,操作太频繁，需要防抖this.$refs.scroll.refresh();
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100);

    this.itemImgListener = () => {
      this.newRefresh();
    };
    // goodsListItem组件传出来的itemImageLoad
    this.$bus.$on("itemImageLoad", this.itemImgListener);
    // console.log("kkk");
  }
};

// 返回顶部
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    };
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    }
  }
};

// tabControl
export const tabControlMixin = {
  data: function() {
    return {
      currentType: POP
    };
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP;
          break;
        case 1:
          this.currentType = NEW;
          break;
        case 2:
          this.currentType = SELL;
          break;
      }
      // console.log(this.currentType);
    }
  }
};
