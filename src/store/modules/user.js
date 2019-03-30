import userApi from '@/api/user';
// import cache from '@/lib/cache;

// state
const state = {
    user: {},
};

// getters
const getters = {

};

// actions
const actions = {
    // 获取用户信息
    async userGet(context) {
        const res = await userApi.getUser();
        context.commit('userUpdate', res);
        return res;
    },
};

// mutations
const mutations = {
    // 改变用户信息
    userUpdate(state, payload) {
        state.user = payload.data;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
