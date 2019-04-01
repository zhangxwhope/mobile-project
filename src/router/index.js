import Vue from 'vue';
import Router from 'vue-router';
import cache from '@/lib/cache';

Vue.use(Router);

const Routers = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: resolve => require.ensure([], () => resolve(require('@/pages/home/index')), 'home'),
        },
        {
            path: '/hello',
            name: 'Hello',
            component: resolve => require.ensure([], () => resolve(require('@/components/HelloWorld')), 'HelloWorld'),
        },
    ],
});

Routers.beforeEach((to, from, next) => {
    const user = cache.get('userInfo');
    // console.log(user, 'user');
    next();
    // if (user && user.id) {
    //     next();
    // } else {
    //     return Promise.reject('用户信息不存在');
    // }
});

export default Routers;
