import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";

import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
