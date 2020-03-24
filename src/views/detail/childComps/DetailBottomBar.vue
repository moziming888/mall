<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div v-for="(item, index) in BarList" :key="index">
        <i class="icon" :class="item.icon"></i>
        <span class="text">{{ item.name }}</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="addBuy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data() {
    return {
      BarList: [
        {
          name: "客服",
          icon: "el-icon-chat-dot-round"
        },
        {
          name: "店铺",
          icon: "el-icon-takeaway-box"
        },
        {
          name: "收藏",
          icon: "el-icon-star-off"
        }
      ]
    };
  },
  methods: {
    addToCart() {
      this.$emit("addToCart");

      // 把toast做成了插件形式，可以直接调用
      this.$toast.show("已成功添加到购物车");
    },
    addBuy() {
      this.$toast.show("正在跳转到结算页...");
    }
  }
};
</script>
<style scoped>
.bottom-bar {
  height: 3.25rem;
  background: var(--color-background);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
  justify-content: space-around;
}
.bar-item {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.bar-left {
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bar-left .icon {
  font-size: 1.3rem;
}
.bar-left .text {
  display: block;
  font-size: 0.6rem;
  padding-top: 0.1rem;
}
.bar-right {
  color: var(--color-white);
  margin: 0.6rem 0;
}
.bar-right .cart,
.bar-right .buy {
  padding: 0.5rem 1rem;
}
.bar-right .cart {
  background: linear-gradient(to right, #fec806, #fe9505);
  border-radius: 1.25rem 0 0 1.25rem;
}

.bar-right .buy {
  background: linear-gradient(to right, #fd7801, #fd4c06);
  border-radius: 0 1.25rem 1.25rem 0;
}
@media (max-width: 350px) {
  .bar-right .cart,
  .bar-right .buy {
    padding: 0.5rem 0.5rem;
  }
}
</style>
