import Vue from 'vue';
import ElementUI from 'element-ui';
import axios from '@/request/http';
import App from '@/App.vue';
import router from '@/router';
import store from '@/vuex';
import VueParticles from 'vue-particles';

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

const whiteList = ['/login'];//白名单
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (store.getters.token) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetUserInfo').then(res => {
          const roles = res.data.roles;
          store.dispatch('GenerateRoutes', { roles }).then(() => {
            router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
            next({ ...to, replace: true });
          });
        }, err => {
          console.log(err);
        });
      } else {
        next(); //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next();
    } else {
      next({ path: '/login' }); // 否则全部重定向到登录页
    }
  }
});

router.afterEach(view => {
  console.log(view);
  document.title = view.meta.title;
  NProgress.done();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
