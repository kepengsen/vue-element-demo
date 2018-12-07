import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
import ElementUI from 'element-ui'
import './assets/css/basic.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
