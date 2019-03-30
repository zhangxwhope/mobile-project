import { fetch } from '@/lib/fetch.js';

export default {
    // 获取用户信息
    getUser() {
        return fetch.get('/user/info');
    },
};
