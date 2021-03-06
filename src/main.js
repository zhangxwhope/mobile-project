// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './assets/iconfont/iconfont.css';
import './assets/scss/vars.scss';
import { Divider, Grid, GridItem, Search, Swiper, AlertPlugin, Flexbox, FlexboxItem, Tab, TabItem } from 'vux';

Vue.component('divider', Divider);
Vue.component('grid', Grid);
Vue.component('grid-item', GridItem);
Vue.component('search', Search);
Vue.component('swiper', Swiper);
Vue.component('flexbox', Flexbox);
Vue.component('flexbox-item', FlexboxItem);
Vue.component('tab', Tab);
Vue.component('tab-item', TabItem);

Vue.use(AlertPlugin);

Vue.prototype.$EventBus = new Vue();

require('./mock');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
});
