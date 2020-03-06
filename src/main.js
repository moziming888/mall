import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import FastClick from "fastclick";
import VueLazyload from "vue-lazyload";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import toast from "components/common/toast";

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

Vue.use(VueSwiper);
Vue.use(VueLazyload, {
  // 加载时显示的图片
  loading: require("assets/img/common/placeholder.png")
});
Vue.use(ElementUI);

// 安装toast插件
Vue.use(toast);

// 解决移动端300ms的延迟
FastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

/* axios({
  url: 'http://localhost:8080/home/multidata'
}).then(res => {
  console.log(res)
})
 */
