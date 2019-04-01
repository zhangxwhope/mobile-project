// 引入mockjs
const Mock = require('mockjs');
// 使用mockjs模拟数据

// 轮播图
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

// 用户信息
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

// 导航信息
Mock.mock('/home/nav', (req, res) => {
    return {
        ret: 0,
        flag: true,
        data: [
            [
                {
                    icon: 'icon-folder-add',
                    label: '天猫',
                },
                {
                    icon: 'icon-folder-open',
                    label: '聚划算',
                },
                {
                    icon: 'icon-folder',
                    label: '天猫国际',
                },
                {
                    icon: 'icon-rocket',
                    label: '外卖',
                },
                {
                    icon: 'icon-lock',
                    label: '天猫超市',
                },
            ],
            [
                {
                    icon: 'icon-unlock',
                    label: '充值中心',
                },
                {
                    icon: 'icon-unlike',
                    label: '飞猪旅行',
                },
                {
                    icon: 'icon-like',
                    label: '领金币',
                },
                {
                    icon: 'icon-mobile',
                    label: '拍卖',
                },
                {
                    icon: 'icon-linechart',
                    label: '分类',
                },
            ],
        ],
    };
});

// 热门产品信息
Mock.mock('/home/products', (req, res) => {
    return {
        ret: 0,
        flag: true,
        data: [
            [
                [
                    {
                        title: '淘抢购',
                        img: 'icon-user',
                    },
                    {
                        title: '',
                        img: 'icon-adduser',
                    },
                ],
                [
                    {
                        title: '有好货',
                        img: 'icon-check-square',
                    },
                    {
                        title: '',
                        img: 'icon-up-square',
                    },
                ],
            ],
            [
                [
                    {
                        title: '哇哦视频',
                        img: 'icon-left-square',
                    },
                    {
                        title: '',
                        img: 'icon-down-square',
                    },
                ],
                [
                    {
                        title: '必买清单',
                        img: 'icon-appstore',
                    },
                    {
                        title: '',
                        img: 'icon-save',
                    },
                ],
            ],
        ],
    };
});

// 底部tab信息
Mock.mock('/tab', (req, res) => {
    return {
        ret: 0,
        flag: true,
        data: [
            {
                title: '主页',
                icon: 'icon-appstore',
            },
            {
                title: '我的',
                icon: 'icon-user',
            },
        ],
    };
});
