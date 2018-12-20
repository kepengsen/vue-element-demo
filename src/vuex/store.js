import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false,
    visitedTags: []
  },
  mutations: {
    isCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },
    addTags(state, payload) {
      let flag = state.visitedTags.some(
        item => item.path === payload.route.path
      );//打开标签后，判断数组中是否已经存在该路由
      // console.log(flag ? '存在' : '不存在');
      if (!flag) {
        state.visitedTags.push(
          Object.assign(
            {},
            // {
            //   path: payload.route.path,
            //   name: payload.route.name,
            //   params: payload.route.params,
            //   meta: payload.meta
            // }
            payload.route
          )
        );
      } //数组中路由存在不push ,单击左侧路由变化,点击标签路由变化均触发
    }, //添加标签
    closeTags(state, payload) {
      for (const [key, item] of state.visitedTags.entries()) {
        if (item.path === payload.view.path) {
          state.visitedTags.splice(key, 1);
          break;
        }
      }
    } //如果要关闭的标签在路由中存在则删除 
  },
  actions: {
    closeTags(context, payload) {
      context.commit('closeTags', payload)
      return context.state.visitedTags;
    }
  }
})
