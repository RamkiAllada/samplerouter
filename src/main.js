import Vue from "vue";
import VueRouter from  "vue-router";
import App from "./App.vue";
import {routes} from './routes';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
