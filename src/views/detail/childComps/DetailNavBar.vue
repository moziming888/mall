<template>
  <nav-bar class="detail-nav-bar">
    <img
      slot="left"
      class="back"
      @click="backClick"
      src="~assets/img/common/back.svg"
      alt=""
    />
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

    <img
      slot="right"
      class="cart"
      @click="cartClick"
      src="~assets/img/detail/cart.svg"
      alt=""
    />
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  props: {
    titleInfos: {
      type: Array,
      default() {
        return ["商品", "参数", "评论", "推荐"];
      }
    }
    // currentIndex: {
    //   type: Number,
    //   default: 0
    // }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
      // console.log(index);
    },
    backClick() {
      this.$router.back();
      // this.$router.go(-1);
    },
    cartClick() {
      this.$router.push("/cart");
    }
  }
};
</script>
<style scoped>
.detail-nav-bar {
  font-weight: normal;
  background: var(--color-background);
}
.back {
  margin-top: 11px;
}
.title {
  display: flex;
  font-size: 1em;
  align-items: center;
}
.title-item {
  flex: 1;
}
.title-item.active {
  color: var(--color-high-text);
}
.cart {
  width: 56px;
  height: 26px;
  margin-top: 10px;
}
</style>
