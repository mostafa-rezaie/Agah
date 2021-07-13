import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./assets/css/style.css";
import VueRouter from "vue-router";
import { routes } from "./routes";
import axios from "axios";
import { store } from "./store/store.js";

Vue.config.productionTip = false;

Vue.use({
  install(Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: "https://agah-admission-api.webjarprojects.ir/api/",
    });
  },
});

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
