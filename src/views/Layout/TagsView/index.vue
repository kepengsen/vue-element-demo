<template>
  <div class="tag-wrap" ref="tagWrap">
    <div class="tag-overflow" ref="tagOver">
      <el-tag
        class="tag"
        :key="item.path"
        :class="isActive(item)?'active':''"
        v-for="(item) in tagList"
        closable
        :type="item.type"
        @click.native="tagClick(item)"
        @close.prevent="closeSelectedTag(item)">
        {{item.meta.title}}
      </el-tag>
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
  computed: {
     tagList () {
      return this.$store.state.visitedTags
    },
  },
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
    },
    tagClick(item){
      this.$router.push({name:item.name})
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

<style lang="scss" >

.tag-wrap {
  height: 34px;
  background-color: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    height: 0px;
  }
  .tag{
    border-radius: 0;
    cursor: pointer;
    color: #495060;
    height: 25px;
    line-height: 25px;
    // background-color: #fff;
    transition: all 0.2s;
    &.active {
      background-color: #1fc7c7;
      color: #fff !important;
      border-color: #d0ebeb;
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
        // background-color: #eee;
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