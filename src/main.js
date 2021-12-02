import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from "axios";
import store from './store'
import router from './router'
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
// Vue.use(Antd)

new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线
  }
}).$mount('#app')
axios({
  url:'http://api.roa.voiddog.cn/login?username=test&&password=test',
  method:'post'
}).then(res =>{
  console.log(res);
})

// axios.all([axios({
//   baseURL:'http://api.roa.voiddog.cn',
//   url:'/login?username=test&&password=test'
// }),axios({
//
// })])