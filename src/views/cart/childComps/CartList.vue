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
  top: 2.75rem;
  bottom: calc(2.75rem + 2.5rem);
  left: 0;
  right: 0;
}
</style>
