<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods: {
    show(message = "默认文字", duration = 2000) {
      this.isShow = true;
      this.message = message;

      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    }
  }
};
</script>
<style scoped>
.toast {
  max-width: 70%;
  text-align: center;
  color: var(--color-white);
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 0.8rem;
  border-radius: 1.2rem;
  letter-spacing: 0.1rem;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 50%;
  /* left: 15%;
  transform: translate(-15%, -15%); */
  z-index: 999;
}
</style>
