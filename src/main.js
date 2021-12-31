import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/iconfont.css' //引入字体图标
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
import "bootstrap/dist/css/bootstrap.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
