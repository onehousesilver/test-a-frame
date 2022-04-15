import Vue from "vue";
import router from "./router";
import App from "./App.vue";
Vue.config.productionTip = false;
Vue.config.ignoredElements = [
  "a-scene",
  "a-entity",
  "a-camera",
  "a-box",
  "a-sky",
  "a-sphere",
  "a-cylinder",
  "a-plane",
  "a-assets",
  "a-asset-item",
];
import aframe from "aframe";
Vue.use(aframe);

// import * as THREE from "three";
// Vue.use(THREE);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
