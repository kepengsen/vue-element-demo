import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/About.vue'
import Layout from '@/views/Layout'
import Cookie from 'js-cookie'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: () => import('@/views/login/AppLogin.vue') },
  { path: '/register', name: 'register', component: () => import('@/views/login/AppRegister.vue') },
  {
    path: '/', redirect: '/about', component: Layout, children: [
      { path: 'about', name: 'about', meta: { title: '关于', keepAlive: true }, component: About },
      { path: 'button', name: 'Button', meta: { title: '按钮', keepAlive: false }, component: () => import('@/views/Component/Button.vue'), },
      { path: 'icon', name: 'Icon', meta: { title: '图标', keepAlive: true }, component: () => import('@/views/Component/Icon.vue') },
      { path: 'color', name: 'Color', meta: { title: '色彩', keepAlive: false }, component: () => import('@/views/Component/Color.vue') },
      { path: 'layout', name: 'Layout', meta: { title: '布局', keepAlive: true }, component: () => import('@/views/Component/Layout.vue') },
      { path: 'container', name: 'Container', meta: { title: '布局容器', keepAlive: false }, component: () => import('@/views/Component/Container.vue') },
      { path: 'CodeEdit', name: 'CodeEdit', meta: { title: '代码编辑器', keepAlive: true }, component: () => import('@/views/Component/CodeEdit.vue') },

      { path: 'radio', name: 'Radio', meta: { title: '单选', keepAlive: false }, component: () => import('@/views/Form/Radio.vue') },
      { path: 'checkbox', name: 'Checkbox', meta: { title: '多选', keepAlive: false }, component: () => import('@/views/Form/Checkbox.vue') },
      { path: 'input', name: 'Input', meta: { title: '输入框', keepAlive: false }, component: () => import('@/views/Form/Input.vue') },
      { path: 'inputNumber', name: 'InputNumber', component: () => import('@/views/Form/InputNumber.vue') },
      { path: 'select', name: 'Select', component: () => import('@/views/Form/Select.vue') },
      { path: 'cascader', name: 'Cascader', component: () => import('@/views/Form/Cascader.vue') },
      { path: 'switch', name: 'Switch', component: () => import('@/views/Form/Switch.vue') },
      { path: 'slider', name: 'Slider', component: () => import('@/views/Form/Slider.vue') },
      { path: 'timePicker', name: 'TimePicker', component: () => import('@/views/Form/TimePicker.vue') },
      { path: 'datePicker', name: 'DatePicker', component: () => import('@/views/Form/DatePicker.vue') },
      { path: 'upload', name: 'Upload', component: () => import('@/views/Form/Upload.vue') },
      { path: 'rate', name: 'Rate', component: () => import('@/views/Form/Rate.vue') },
      { path: 'colorPicker', name: 'ColorPicker', component: () => import('@/views/Form/ColorPicker.vue') },
      { path: 'transfer', name: 'Transfer', component: () => import('@/views/Form/Transfer.vue') },
      { path: 'form', name: 'Form', component: () => import('@/views/Form/Form.vue') },

      { path: 'alert', name: 'Alert', component: () => import('@/views/Notice/Alert.vue') },
      { path: 'loading', name: 'Loading', component: () => import('@/views/Notice/Loading.vue') },
      { path: 'message', name: 'Message', component: () => import('@/views/Notice/Message.vue') },
      { path: 'messageBox', name: 'MessageBox', component: () => import('@/views/Notice/MessageBox.vue') },
      { path: 'notification', name: 'Notification', component: () => import('@/views/Notice/Notification.vue') },
    ]
  },
  // 最后是404页面
  { path: "*", meta: { title: "404" }, component: () => import('@/views/Notfound') }

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...routes],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
  }
})

router.beforeEach((to, from, next) => {
  console.log(Cookie.get('userName'))
  if (!Cookie.get('userName') && to.name !== 'login') {
    next({
      replace: true,
      name: 'login'
    })
    console.log('没有登录，且不是要登录')
  } else if (Cookie.get('userName') && to.name === 'login') {
    next({
      name: 'about'
    })
    console.log('登录过了，且还要登录')
  } else {
    next();
    console.log('其他')
  }

})

export default router