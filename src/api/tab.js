import { fetch } from '@/lib/fetch';

export default {
    // 获取底部tab数据
    getTab() {
        return fetch.get('/tab');
    },
};
