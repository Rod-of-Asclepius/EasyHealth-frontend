import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'

import store from './store'
import router from './router'
import qs from 'qs'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线
    Vue.prototype.$qs = qs;
  }
}).$mount('#app')
