import Vuex from 'vuex';
import Vue from 'vue';
import user from './modules/user';
import home from './modules/home';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
    modules: {
        user,
        home,
    },
    strict: debug,
});

export default store;
