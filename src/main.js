import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router/router';
import store from '@/vuex/store';
import axios from '@/request/http';
import ElementUI from 'element-ui';
import VueParticles from 'vue-particles';
import Cookie from 'js-cookie';

//指令
import Clipboard from '@/directive/clipboard/index';
//样式
import './assets/css/basic.scss';
import 'element-ui/lib/theme-chalk/index.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

require('@/assets/js/article.js');
require('@/mock');

Vue.use(ElementUI);
Vue.use(Clipboard);
// 粒子特效
Vue.use(VueParticles);

Vue.config.productionTip = false;
//定义全局变量
Vue.prototype.axios = axios;

router.beforeEach((to, from, next) => {
  NProgress.start();
  document.title = to.meta.title;
  if (!Cookie.get('userName') && to.name !== 'login') {
    next({
      replace: true,
      name: 'login'
    });
  } else if (Cookie.get('userName') && to.name === 'login') {
    next({
      name: 'home'
    });
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
