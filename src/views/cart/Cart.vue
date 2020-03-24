<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
      <div>{{ this.$store.state.cartList }}</div>
    </nav-bar>
    <div class="text" v-if="cartLength === 0">购物车竟然是空的~~</div>
    <cart-list v-else />
    <cart-bottom-bar />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(["cartLength"])
  }
};
</script>
<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: var(--color-white);
}
.text {
  font-size: 1.1rem;
  text-align: center;
  margin-top: 20%;
}
</style>
