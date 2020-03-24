<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-top">
      <img :src="shopInfo.shopLogo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div>{{ shopInfo.cSells | sellCountFilter }}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div>{{ shopInfo.cGoods }}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <router-link class="enter-shop" to="/">进店逛逛</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>
<style scoped>
.shop-info {
  margin: 20px 0 40px;
}
.shop-top {
  display: flex;
  align-items: center;
  margin-left: 8px;
}
.shop-top img {
  width: 3em;
  height: 3em;
  border-radius: 50%;
  border: 1px solid rgba(126, 103, 103, 0.1);
}
.shop-top span {
  padding-left: 10px;
}
.shop-middle {
  display: flex;
  align-items: center;
}
.shop-middle-item {
  flex: 1;
}
.shop-middle-left {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.sells-text,
.goods-text {
  font-size: 0.6em;
  padding-top: 4px;
}
.shop-middle-right {
  display: flex;
  justify-content: space-evenly;
}

.shop-middle-right table td {
  padding: 5px 0;
}

.shop-middle-right .score {
  color: #5ea732;
  padding: 0 5px;
}

.shop-middle-right .score-better {
  color: #f13e3a;
}
.shop-middle-right .better span {
  background-color: #5ea732;
  color: var(--color-white);
  text-align: center;
}
.shop-middle-right .better-more span {
  background: #f13e3a;
}
.shop-bottom {
  margin-top: 10px;
  text-align: center;
}
.enter-shop {
  background: #f2f5f8;
  padding: 5px 30px;
  border-radius: 12px;
}
</style>
