<template>
  <div class="tag-wrap">
    <div class="tag-overflow" ref="tagOver">
      <router-link
        class="tags-item"
        :to="item"
        :key="item.path"
        :class="isActive(item)?'active':''"
        v-for="(item) in this.$store.state.visitedTags"
      >
        {{item.meta.title}}
        <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(item)"></span>
      </router-link>
    </div>
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
      this.$store.dispatch({ type: "closeTags", view }).then(views => {
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
    this.addTags();
    setTimeout(() => {
      const rect = this.$refs.tagOver.getBoundingClientRect();
      this.$refs.tagOver.style.width = rect.width + "px";
    }, 0);
  },
  updated() {
    /*数据更新完成*/
  }
};
</script>

<style lang="scss" scoped>
.tag-wrap {
  line-height: 34px;
  height: 34px;
  background-color: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    height: 0;
  }
  .tags-item {
    cursor: pointer;
  }
  a {
    border-radius: 0;
    display: inline-block;
    margin: 0 2px;
    padding: 0 10px;
    border: 1px solid #eee;
    color: #495060;
    height: 26px;
    line-height: 26px;
    background-color: #fff;
    transition: all 0.2s;
    &.active {
      background-color: #1fc7c7;
      color: #fff !important;
      border-color: #1fc7c7;
      padding: 0 12px;
      padding-left: 20px;
      position: relative;
      &:after {
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #fff;
        content: "";
        position: absolute;
        top: 8px;
        left: 8px;
      }
      .el-icon-close {
        color: #fff;
      }
    }
    .el-icon-close {
      font-size: 10px;
      transform: scale(0.6);
      color: #495060;
      transition: all 0.2s;
      &:hover {
        background-color: #eee;
        color: #fff;
        transform: scale(1);
      }
    }
  }
  .tag-overflow {
    display: flex;
    justify-content: flex-start;
  }
}
</style>