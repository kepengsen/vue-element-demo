import Cookie from 'js-cookie';
import axios from '@/request/http';

const user = {
    state: {
        user: '',
        status: '',
        code: '',
        token: Cookie.get('token'),
        name: '',
        introduction: '',
        roles: [],
        setting: {
            articlePlatform: []
        }
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_SETTING: (state, setting) => {
            state.setting = setting;
        },
        SET_NAME: (state, name) => {
            state.name = name;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        }
    },

    actions: {
        GetUserInfo({ commit, state }) {
           return axios.post('/getUserInfo', { token: state.token })
                .then(response => {
                    const data = response.data;
                    if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
                        commit('SET_ROLES', data.roles);
                        commit('SET_NAME', data.name);
                    }
                    return response;
                });
        }

        // 动态修改权限
        // ChangeRoles({ commit, dispatch }, role) {
        //     return new Promise(resolve => {
        //         commit('SET_TOKEN', role);
        //         setToken(role);
        //         getUserInfo(role).then(response => {
        //             const data = response.data;
        //             commit('SET_ROLES', data.roles);
        //             commit('SET_NAME', data.name);
        //             commit('SET_AVATAR', data.avatar);
        //             commit('SET_INTRODUCTION', data.introduction);
        //             dispatch('GenerateRoutes', data); // 动态修改权限后 重绘侧边菜单
        //             resolve()
        //         });
        //     });
        // }
    }
}

export default user;
