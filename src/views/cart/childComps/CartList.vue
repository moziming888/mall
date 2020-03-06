<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :base-info="item"
      />
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import CartListItem from "./CartListItem";

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["cartList"])
  }
};
</script>
<style scoped>
.cart-list {
  height: 100%;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: calc(45px + 40px);
  left: 0;
  right: 0;
}
</style>
