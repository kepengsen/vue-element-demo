<template>
  <div class='LeftMenu'>
    <!-- <el-scrollbar wrap-class='scrollbar-wrapper'> -->
    <el-row class='tac'>
      <el-col :span='24'>
        <el-menu
          :collapse='this.$store.state.isCollapse'
          :unique-opened='true'
          :default-active='menuSelect'
          class='el-menu-vertical-demo'
          @open='handleOpen'
          @close='handleClose'
          background-color='#545c64'
          text-color='#fff'
          active-text-color='#ffd04b'
          @select='handleSelect'
          :router='true'
        >
          <template v-for='(item,key) in MenuList'>
            <el-submenu v-if='item.children.length != 0' :index='item.router' :key='key'>
              <template slot='title'>
                <i :class='item.icon'></i>
                <span>{{langType=='en'? item.name_en: item.name}}</span>
              </template>
              <el-menu-item
                v-for='child in item.children'
                :index='child.router'
                :key='child.router'
              >{{langType=='en'? child.name_en: child.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index='item.router' :key='key'>
              <i :class='item.icon'></i>
              <span>{{langType === 'en'? item.name_en: item.name}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-col>
    </el-row>
    <!-- </el-scrollbar> -->
  </div>
</template>

<script>
import store from '@/vuex/store.js';
import MenuList from './MenuList.js';
export default {
  name: 'LeftMenu',
  data() {
    return {
      MenuList: MenuList
    };
  },
  store,
  computed: {
    langType() {
      return this.$store.state.langType ? 'cn' : 'en';
    },
    menuSelect() {
      return this.$route.path;
    }
  },
  components: {},
  methods: {
    /*组件内部的方法*/
    handleOpen() {
      // console.log({ key, keyPath });
    },
    handleClose() {
      // console.log({ key, keyPath });
    },
    handleSelect() {
      // console.log({ key, keyPath,vm });
    }
  },
  mounted() {
    /*页面挂载结束*/
  },
  updated() {
    /*数据更新完成*/
  }
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
