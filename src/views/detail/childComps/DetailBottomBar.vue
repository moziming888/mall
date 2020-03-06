<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
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
  height: 52px;
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
  justify-content: space-around;
}
.bar-item {
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.bar-left {
  width: 40%;
}
.bar-left .icon {
  display: block;
  width: 20px;
  height: 20px;
  margin: 5px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bar-left span {
  font-size: 0.8em;
}
.bar-left .service {
  background-position: 0 -48px;
}
.bar-left .shop {
  background-position: 0 -90px;
}
.bar-right {
  /* flex: 1; */
  color: #fff;

  margin: 10px 0;
}
.bar-right .cart,
.bar-right .buy {
  padding: 8px 16px;
}
.bar-right .cart {
  background: linear-gradient(to right, #fec806, #fe9505);
  border-radius: 20px 0 0 20px;
}

.bar-right .buy {
  background: linear-gradient(to right, #fd7801, #fd4c06);
  border-radius: 0 20px 20px 0;
}
</style>
