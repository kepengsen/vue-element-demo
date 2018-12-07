import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/button',
      name: 'Button',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Component/Button.vue')
    },
    {
      path: '/icon',
      name: 'Icon',
      component: () => import('@/views/Component/Icon.vue')
    },
    {
      path: '/color',
      name: 'Color',
      component: () => import('@/views/Component/Color.vue')
    },
    {
      path: '/layout',
      name: 'Layout',
      component: () => import('@/views/Component/Layout.vue')
    },
    {path: '/container',name: 'Container',component: () => import('@/views/Component/Container.vue')},
    
    
    { path: '/radio', name: 'Radio', component: () => import('@/views/Form/Radio.vue')},
    { path: '/checkbox', name: 'Checkbox', component: () => import('@/views/Form/Checkbox.vue')},
    { path: '/input', name: 'Input', component: () => import('@/views/Form/Input.vue')},
    { path: '/inputNumber', name: 'InputNumber', component: () => import('@/views/Form/InputNumber.vue')},
    { path: '/select', name: 'Select', component: () => import('@/views/Form/Select.vue')},
    { path: '/cascader', name: 'Cascader', component: () => import('@/views/Form/Cascader.vue')},
    { path: '/switch', name: 'Switch', component: () => import('@/views/Form/Switch.vue')},
    { path: '/slider', name: 'Slider', component: () => import('@/views/Form/Slider.vue')},
    { path: '/timePicker', name: 'TimePicker', component: () => import('@/views/Form/TimePicker.vue')},
    { path: '/datePicker', name: 'DatePicker', component: () => import('@/views/Form/DatePicker.vue')},
    { path: '/upload', name: 'Upload', component: () => import('@/views/Form/Upload.vue')},
    { path: '/rate', name: 'Rate', component: () => import('@/views/Form/Rate.vue')},
    { path: '/colorPicker', name: 'ColorPicker', component: () => import('@/views/Form/ColorPicker.vue')},
    { path: '/transfer', name: 'Transfer', component: () => import('@/views/Form/Transfer.vue')},
    { path: '/form', name: 'Form', component: () => import('@/views/Form/Form.vue')},


    { path: '/alert', name: 'Alert', component: () => import('@/views/Notice/Alert.vue')},
    { path: '/loading', name: 'Loading', component: () => import('@/views/Notice/Loading.vue')},
    { path: '/message', name: 'Message', component: () => import('@/views/Notice/Message.vue')},
    { path: '/messageBox', name: 'MessageBox', component: () => import('@/views/Notice/MessageBox.vue')},
    { path: '/notification', name: 'Notification', component: () => import('@/views/Notice/Notification.vue')},
  ]
})
