<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        separator="/"
        v-for="(item,index) in breadlist"
        :key="index"
        :to="{path:item.path}"
      >{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  data() {
    return {
      breadlist: []
    };
  },
  components: {},
  created() {
    this.getBread();
  },
  methods: {
    getBread() {
      let matched = this.$route.matched.filter(item => {
        if (item.name) {
          return true;
        }
      });
      const first = matched[0];
      if (first && first.name !== 'dashboard') {
        matched = [{ path: '/dashboard', meta: { title: '首页' } }].concat(matched);
      }
      this.breadlist = matched;
    }
  },
  mounted() {
    /*页面挂载结束*/
  },
  updated() {
    /*数据更新完成*/
  },
  watch: {
    $route() {
      this.getBread();
    }
  }
};
</script>

<style >
.breadcrumb .el-breadcrumb__item {
  height: 60px;
  line-height: 60px;
}
</style>
