import tabApi from '@/api/tab';

// state
const state = {
    tab: [],
};

// getters
const getters = {

};

// actions
const actions = {
    // 获取tab信息
    async tabGet(context) {
        const res = await tabApi.getTab();
        context.commit('tabUpdate', res);
        return res;
    },
};

// mutations
const mutations = {
    // 改变tab信息
    tabUpdate(state, payload) {
        state.tab = payload.data;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
