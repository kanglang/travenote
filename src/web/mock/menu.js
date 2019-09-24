const Mock = require('mockjs');
let menu = [
    {
        id: '2',
        title: '表单页',
        icon: 'form',
        childMenu: [
            {
                id: '21',
                title: '基础表单',
                router: '/management/basicForm'
            },
            {
                id: '22',
                title: '分布表单',
                router: '/management/stepForm'
            },
            {
                id: '23',
                title: '高级表单',
                router: '/management/advancedForm'
            }
        ]
    },
    {
        id: '3',
        title: '列表页',
        icon: 'table',
        childMenu: [
            {
                id: '31',
                title: '查询列表',
                router: '/management/tableList'
            },
            {
                id: '32',
                title: '标准列表',
                router: '/management/basicList'
            },
            {
                id: '33',
                title: '卡片列表',
                router: '/management/cardList'
            }

        ]
    },
    {
        id: '4',
        title: '详情页',
        icon: 'profile',
        childMenu: [
            {
                id: '41',
                title: '基础详情页',
                router: '/management/basicProfile'
            },
            {
                id: '42',
                title: '高级详情页',
                router: '/management/advancedProfile'
            }
        ]
    },
    {
        id: '5',
        title: '结果页',
        icon: 'check-circle-o',
        childMenu: [
            {
                id: '51',
                title: '成功页',
                router: '/management/success'
            },
            {
                id: '52',
                title: '失败页',
                router: '/management/fail'
            }
        ]
    },
    {
        id: '6',
        title: '异常页',
        icon: 'warning',
        childMenu: [
            {
                id: '61',
                title: '403',
                router: '/management/403'
            },
            {
                id: '62',
                title: '404',
                router: '/management/404'
            },
            {
                id: '63',
                title: '500',
                router: '/management/500'
            }
        ]
    },
    {
        id: 7,
        title: '个人页',
        icon: 'user',
        childMenu: [
            {
                id: '71',
                title: '个人设置',
                router: '/management/1000000'
            }
        ]
    }
];

Mock.mock(
    'GET /api/menu', menu
)

module.exports = Mock;