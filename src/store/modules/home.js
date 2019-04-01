import homeApi from '@/api/home';
// import cache from '@/lib/cache';

// state
const state = {
    list: [],
    nav: [],
    products: [],
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
    // 获取nav信息
    async navGet(context) {
        const res = await homeApi.getNav();
        context.commit('navUpdate', res);
        return res;
    },
    // 获取产品信息
    async productsGet(context) {
        const res = await homeApi.getProducts();
        context.commit('productsUpdate', res);
        return res;
    },
};

// mutations
const mutations = {
    // 改变swiper信息
    swiperUpdate(state, payload) {
        state.list = payload.data;
    },
    // 改变Nav信息
    navUpdate(state, payload) {
        state.nav = payload.data;
    },
    // 改变products信息
    productsUpdate(state, payload) {
        state.products = payload.data;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
