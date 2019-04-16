import Vue from 'vue'
import App from './App.vue'
import iview from "iview";
import "iview/dist/styles/iview.css";

import * as fundebug from "fundebug-javascript";
import fundebugVue from "fundebug-vue";
fundebug.apikey = "170eb16186b18c81c5c5dde36965b70bdfaf37d18144563ca1e6514777f527c4"
fundebugVue(fundebug, Vue);

Vue.use(iview);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
