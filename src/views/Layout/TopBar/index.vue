<template>
  <div class="topBar">
    <el-row :gutter="0">
      <el-col :span="1">
        <div class="grid-content bg-purple">
          <i class="el-icon-menu nav-menu" @click="isCollapse()"></i>
          <i class="icon-recovery iconfont" @click="isCollapse()"></i>
        </div>
      </el-col>
      <el-col :span="12">
        <el-row type="flex" class="row-right" justify="end" style="margin-right:-15px">
          <el-col :span="5">
            <a class="animated fadeIn">{{userName}}</a>
          </el-col>
          <el-col :span="4">
            <a @click.prevent="toggleLanguage">切换语言</a>
          </el-col>

          <el-col :span="2">
            <a @click.prevent="logout">退出</a>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  name: "topBar",
  data() {
    return {
      userName: Cookie.get("userName") || ""
    };
  },
  components: {},
  methods: {
    isCollapse() {
      this.$store.commit("isCollapse");
    },
    toggleLanguage() {
      this.$store.commit("toggleLanguage");
    },
    logout(){
      if(Cookie.get('userName')){
        Cookie.remove('userName')
        Cookie.remove('token')
        this.$router.push('login')
      }
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
</style>