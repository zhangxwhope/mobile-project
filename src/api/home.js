import { fetch } from '@/lib/fetch.js';

export default {
    // 获取swiper轮播图
    getSwiper() {
        return fetch.get('/home/swiper');
    },
};
