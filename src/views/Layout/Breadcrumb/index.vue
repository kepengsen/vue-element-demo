<template>
  <div class='breadcrumb'>
    <el-breadcrumb separator-class='el-icon-arrow-right'>
      <el-breadcrumb-item
        separator='/'
        v-for='(item,index) in breadlist'
        :key='index'
        :to='{path:item.path}'
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
      this.breadlist = this.$route.matched;
      this.$route.matched.forEach((item) => {
        // item.meta.title === '首页' ? item.path = '/' : this.$route.path === item.path;
        if (item.path === '') {
          item.meta.title = '首页';
          item.path = '/';
        }
      });
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

.breadcrumb .el-breadcrumb__item{
  height: 60px;
  line-height: 60px;
}
</style>
