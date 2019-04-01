import { fetch } from '@/lib/fetch.js';

export default {
    // 获取swiper轮播图
    getSwiper() {
        return fetch.get('/home/swiper');
    },
    // 获取导航数据
    getNav() {
        return fetch.get('/home/nav');
    },
    // 获取热门产品
    getProducts() {
        return fetch.get('/home/products');
    },
};
