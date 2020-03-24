<template>
  <div class="back-top">
    <i class="icon-top el-icon-top"></i>
  </div>
</template>

<script>
export default {
  name: "BackTop"
};
</script>
<style scoped sass>
.back-top {
  position: fixed;
  right: 0.4rem;
  bottom: 3.5rem;
  padding: 0.2rem;
  background-color: var(--color-background);
  border-radius: 50%;
  box-shadow: 0 0 0.4rem var(--color-gray-s);
}
.back-top .icon-top {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-high-text);
}
</style>
