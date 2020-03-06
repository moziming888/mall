<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        class="check-button"
        :is-checked="isSelectAll"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>
    <div>
      合计: <span class="total-price">{{ totalPrice | showPrice }}</span>
    </div>
    <div class="caculate" @click="calcClick">去结算({{ checkLength }})</div>
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
      console.log("--");
    },
    calcClick() {
      // 把toast做成了插件形式，所以不需要import引用
      if (!this.isSelectAll) {
        // this.$toast.show("请选择购买的商品", 3000);延迟时间默认是2000，
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
  height: 40px;
  padding: 5px;
  background: #eee;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.check-button {
  display: inline-block;
  margin-right: 5px;
}
.total-price {
  color: #f00;
}
.caculate {
  font-size: 1.1em;
  color: #fff;
  line-height: 1.5;
  padding: 0 1em;
  background: linear-gradient(to right, #fd7801, #fd4c06);
  border-radius: 20px;
}
</style>
