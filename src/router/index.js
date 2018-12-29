import Vue from 'vue';
import VueRouter from 'vue-router';
import dashboard from '@/views/dashboard.vue';
import Layout from '@/views/Layout';

Vue.use(VueRouter);

export const staticRoutes = [
  { path: '/login', name: 'login', component: () => import('@/views/login/AppLogin.vue') },
  { path: '/register', name: 'register', component: () => import('@/views/login/AppRegister.vue') },
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: Layout,
    redirect: '/home/dashboard',
    children: [
      { path: 'dashboard', name: 'dashboard', meta: { title: '首页', keepAlive: true }, component: dashboard }
    ]
  }
];

export const asyncRouter = [
  {
    path: '/aa',
    compontent: Layout,
    name: '组件',
    icon: 'el-icon-time',
    mate: { title: '组件', role: ['admin'] },
    children: [
      { path: 'button', name: 'Button', meta: { title: '按钮', keepAlive: false, role: ['admin'] }, component: () => import('@/views/Component/Button.vue') },
      { path: 'icon', name: 'Icon', meta: { title: '图标', keepAlive: true }, component: () => import('@/views/Component/Icon.vue') },
      { path: 'color', name: 'Color', meta: { title: '色彩', keepAlive: false }, component: () => import('@/views/Component/Color.vue') },
      { path: 'layout', name: 'Layout', meta: { title: '布局', keepAlive: true }, component: () => import('@/views/Component/Layout.vue') },
      { path: 'container', name: 'Container', meta: { title: '布局容器', keepAlive: false }, component: () => import('@/views/Component/Container.vue') },
      { path: 'codeEdit', name: 'CodeEdit', meta: { title: '代码编辑器', keepAlive: true }, component: () => import('@/views/Component/CodeEdit.vue') }
    ]
  },
  {
    path: '/bb',
    compontent: Layout,
    name: '表单',
    icon: 'el-icon-time',
    mate: { title: '表单', role: ['admin', 'user'] },
    children: [
      { path: 'radio', name: 'Radio', meta: { title: '单选', keepAlive: false }, component: () => import('@/views/Form/Radio.vue') },
      { path: 'checkbox', name: 'Checkbox', meta: { title: '多选', keepAlive: false }, component: () => import('@/views/Form/Checkbox.vue') },
      { path: 'input', name: 'Input', meta: { title: '输入框', keepAlive: false }, component: () => import('@/views/Form/Input.vue') },
      { path: 'select', name: 'Select', meta: { title: '下拉框', keepAlive: true }, component: () => import('@/views/Form/Select.vue') },
      { path: 'cascader', name: 'Cascader', meta: { title: '级联选择器', keepAlive: true }, component: () => import('@/views/Form/Cascader.vue') },
      { path: 'switch', name: 'switchs', meta: { title: '开关', keepAlive: true }, component: () => import('@/views/Form/Switch.vue') },
      { path: 'slider', name: 'Slider', meta: { title: '滑块', keepAlive: true }, component: () => import('@/views/Form/Slider.vue') },
      { path: 'timePicker', name: 'TimePicker', meta: { title: '时间选择器', keepAlive: true }, component: () => import('@/views/Form/TimePicker.vue') },
      { path: 'datePicker', name: 'DatePicker', meta: { title: '日期选择器', keepAlive: true }, component: () => import('@/views/Form/DatePicker.vue') },
      { path: 'upload', name: 'Upload', meta: { title: '上传', keepAlive: true }, component: () => import('@/views/Form/Upload.vue') },
      { path: 'rate', name: 'Rate', meta: { title: '评分', keepAlive: true }, component: () => import('@/views/Form/Rate.vue') },
      { path: 'colorPicker', name: 'ColorPicker', meta: { title: '颜色选择器', keepAlive: true }, component: () => import('@/views/Form/ColorPicker.vue') },
      { path: 'transfer', name: 'Transfer', meta: { title: '穿梭框', keepAlive: true }, component: () => import('@/views/Form/Transfer.vue') },
      { path: 'form', name: 'Form', meta: { title: '表单', keepAlive: true }, component: () => import('@/views/Form/Form.vue') }
    ]
  },
  {
    path: '/cc',
    compontent: Layout,
    name: '提示',
    icon: 'el-icon-time',
    mate: { title: '提示', role: ['admin', 'user'] },
    children: [
      { path: 'alert', name: 'Alert', meta: { title: '警告', keepAlive: true }, component: () => import('@/views/Notice/Alert.vue') },
      { path: 'loading', name: 'Loading', meta: { title: '加载', keepAlive: true }, component: () => import('@/views/Notice/Loading.vue') },
      { path: 'message', name: 'Message', meta: { title: '消息提示', keepAlive: true }, component: () => import('@/views/Notice/Message.vue') },
      { path: 'messageBox', name: 'MessageBox', meta: { title: '弹框', keepAlive: true }, component: () => import('@/views/Notice/MessageBox.vue') },
      { path: 'notification', name: 'Notification', meta: { title: '通知', keepAlive: true }, component: () => import('@/views/Notice/Notification.vue') }
    ]
  }
  // 最后是404页面
  // { path: '*', meta: { title: '404' }, component: () => import('@/views/Notfound') }
];


export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...staticRoutes]
});

