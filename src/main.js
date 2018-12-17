import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/vuex/store'
import axios from '@/request/http'
import ElementUI from 'element-ui'
import './assets/css/basic.scss'
import 'element-ui/lib/theme-chalk/index.css'

require('@/mock')

Vue.use(ElementUI)
Vue.config.productionTip = false
//定义全局变量
Vue.prototype.axios = axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
