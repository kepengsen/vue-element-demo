<template>
  <div id="layout">
    <el-container>
      <el-aside>
        <el-scrollbar class="base">
          <LeftMenu></LeftMenu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>
          <top-bar></top-bar>
        </el-header>
        <TagsView></TagsView>
        <el-main>
          <el-scrollbar class="base">
            <keep-alive>
              <transition>
                <router-view v-if="$route.meta.keepAlive"/>
              </transition>
            </keep-alive>
            <transition>
              <router-view v-if="!$route.meta.keepAlive"/>
            </transition>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LeftMenu from '@/views/Layout/LeftMenu';
import TagsView from '@/views/Layout/TagsView';
import TopBar from '@/views/Layout/TopBar';
export default {
  name: 'layout',
  components: { LeftMenu, TagsView, TopBar },
  data() {
    return {};
  },
  // components: { LeftMenu },
  methods: {
    /*组件内部的方法*/
  },
  mounted() { },
  updated() {
    /*数据更新完成*/
  }
};
</script>

<style lang='scss' scoped>
body {
  background: #f4f7fa;
}
#layout {
  height: 100%;
  width: 100%;
  .el-container {
    height: 100%;
    .el-aside {
      width: auto !important;
      height: 100%;
      background: #545c64;
    }
    .el-header {
      background: #fff;
      color: #353d47;
      line-height: 60px;
      border-bottom: 1px solid #ddd;
      box-sizing: border-box;
    }
    .el-main {
      padding: 0;
      height: 100%;
    }
    .nav-menu {
      font-size: 20px;
    }
  }
}
</style>
