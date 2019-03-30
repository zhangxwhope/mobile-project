// 引入mockjs
const Mock = require('mockjs');
// 使用mockjs模拟数据
Mock.mock('/home/swiper', (req, res) => {
    return {
        ret: 0,
        flag: true,
        data: [
            {
                img: 'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg',
            },
            {
                img: 'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg',
            },
            {
                img: '//gw.alicdn.com/imgextra/i3/36/O1CN01aOwDgG1C8Wlisf0vl_!!36-0-lubanu.jpg',
            },
        ],
    };
});

Mock.mock('/user/info', (req, res) => {
    return {
        ret: 0,
        flag: true,
        data: {
            id: 1,
            name: 'zzz',
        },
    };
});
