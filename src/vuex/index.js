import Vue from 'vue';
import Vuex from 'vuex';
import permission from './modules/permission';
import TagsView from './modules/TagsView';
import user from './modules/user';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    permission,
    user,
    TagsView
  },
  getters
});
