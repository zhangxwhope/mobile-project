import homeApi from '@/api/home';
// import cache from '@/lib/cache';

// state
const state = {
    list: {},
};

// getters
const getters = {

};

// actions
const actions = {
    // 获取swiper信息
    async swiperGet(context) {
        const res = await homeApi.getSwiper();
        context.commit('swiperUpdate', res);
        return res;
    },
};

// mutations
const mutations = {
    // 改变swiper信息
    swiperUpdate(state, payload) {
        state.list = payload.data;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
