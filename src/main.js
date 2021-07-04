import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap-grid.min.css"
import './assets/css/style.css'
import VueRouter from 'vue-router'
import { routes } from './routes'
Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode : 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
