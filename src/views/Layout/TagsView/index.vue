<template>
  <div class="tags-view-wrapper">
    <router-link
      class="tags-view-item"
      :to="item"
      :key="item.path"
      :class="isActive(item)?'active':''"
      v-for="(item) in this.$store.state.visitedTags"
    >
      {{item.meta.title}}
      <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(item)"></span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TagsView",
  data() {
    return {
      msg: "我是TagsView"
    };
  },
  components: {},
  methods: {
    /*组件内部的方法*/
    addTags() {
      const route = this.$route; //获取地址栏路由
      this.$store.commit({
        type: "addTags",
        route
      });
    },
    isActive(route) {
      return route.path === this.$route.path;
    }, //当前地址栏路径是否与渲染的路径相同 样式匹配
    closeSelectedTag(view) {
      this.$store.dispatch({type: "closeTags", view})
        .then(views => {
          // 此时的views是指的被删除后的visitedViews数组中存在的元素;
          if (this.isActive(view)) {
            // 当前关闭的标签是否是被选中的标签;
            const latestView = views.slice(-1)[0];
            if (latestView) {
              this.$router.push(latestView); //如果数组不为空则让选中的标签为紧邻关闭标签的那一个
            } else {
              this.$router.push("/"); //如果为空则页面跳转到/
            }
          }
        });
    }
  },
  watch: {
    $route() {
      this.addTags();
    } //地址栏变化了就触发这个添加方法
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