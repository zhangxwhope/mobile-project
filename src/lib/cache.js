// 前端缓存
export default {
    // 取缓存
    get(key) {
        let res = window ? window.localStorage.getItem(key) : ''; // @todo node端以后再写
        try {
            res = JSON.parse(res);
        } catch (e) {
            console.error(e);
        }
        return res;
    },
    // 设置缓存
    set(key, value) {
        try {
            value = JSON.stringify(value);
        } catch (e) {
            console.error(e);
        }
        window ? window.localStorage.setItem(key, value) : ''; // @todo node端以后再写
    },
    // 清缓存
    del(key) {
        window ? window.localStorage.removeItem(key) : ''; // @todo node端以后再写
    },
    // getSession
    getSession(key) {
        let res = window ? window.sessionStorage.getItem(key) : ''; // @todo node端以后再写
        try {
            res = JSON.parse(res);
        } catch (e) {
            res = '';
            console.error(e);
        }
        return (res && res.id) ? res : null;
    },
    // setSession
    setSession(key, value) {
        try {
            value = JSON.stringify(value);
        } catch (e) {
            value = '';
            console.error(e);
        }
        window ? window.sessionStorage.setItem(key, value) : ''; // @todo node端以后再写
    },
};
