<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div class="check-content">
        <check-button
          class="check-button"
          :is-checked="isSelectAll"
          @click.native="checkClick"
        />
        <span>全选</span>
      </div>
      <div class="total-price">
        合计: <span class="price">{{ totalPrice | showPrice }}</span>
      </div>
    </div>

    <div class="bar-right" @click="calcClick">去结算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
import { mapGetters } from "vuex";

export default {
  name: "CarttBottonBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList", "cartLength"]),
    isSelectAll() {
      if (this.cartLength === 0) return false;
      return !this.cartList.find(item => !item.checked);
    },
    totalPrice() {
      return this.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.realPrice * item.count;
        }, 0);
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length;
    }
  },
  filters: {
    showPrice(realPrice) {
      // 只显示两位小数
      return "￥" + realPrice.toFixed(2);
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => (item.checked = false));
      } else {
        this.cartList.forEach(item => (item.checked = true));
      }
      // console.log("--");
    },
    calcClick() {
      // 把toast做成了插件形式，所以不需要import引用
      if (!this.isSelectAll) {
        this.$toast.show("请选择购买的商品");
      } else {
        this.$toast.show("正在跳转到结算页...");
      }
    }
  }
};
</script>
<style scoped>
.bottom-bar {
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0.3rem;
  background: var(--color-gray-s);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bar-left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bar-left .check-button {
  display: inline-block;
  margin-right: 0.3rem;
}
.bar-left .total-price {
  margin-left: 1rem;
}
.bar-left .price {
  color: var(--color-red);
}
.bar-right {
  font-size: 1.1em;
  color: var(--color-white);
  line-height: 1.5;
  padding: 0 1rem;
  background: linear-gradient(to right, #fd7801, #fd4c06);
  border-radius: 1.2rem;
}
</style>
