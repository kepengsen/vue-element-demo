<template>
  <div id="app">
    <el-container>
      <el-aside>
        <LeftMenu></LeftMenu>
      </el-aside>
      <el-container>
        <el-header>
          <el-row :gutter="0">
            <el-col :span="1">
              <div class="grid-content bg-purple">
                <i class="el-icon-menu nav-menu" @click="isCollapse()"></i>
                <i class="icon-recovery iconfont" @click="isCollapse()"></i>
              </div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LeftMenu from "@/components/LeftMenu";
import store from "./vuex/store.js";
export default {
  name: "App",
  components:{LeftMenu},
  data() {
    return {};
  },
  // components: { LeftMenu },
  methods: {
    /*组件内部的方法*/
    isCollapse() {
      this.$store.commit("isCollapse");
    }
  },
  store,
  mounted() {},
  updated() {
    /*数据更新完成*/
  }
};
</script>

<style lang="scss" scoped>
body {
  background: #f4f7fa;
}
#app {
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
      background: #409eff;
      color: #fff;
      line-height: 60px;
    }
    .nav-menu {
      font-size: 20px;
    }
  }
}
</style>
