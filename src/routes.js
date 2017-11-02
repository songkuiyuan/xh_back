import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import transh from './views/transh.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/service/Table.vue'
import Form from './views/service/Form.vue'
import bazaar from './views/service/bazaar.vue'
import dnfid from './views/service/dnfid.vue'
import user from './views/service/user.vue'
import item from './views/operation/item.vue'
import Players from './views/operation/Players.vue'
import shopdeal from './views/operation/shopdeal.vue'
import incomedata from './views/operation/incomedata.vue'
import transplay from './views/operation/transplay.vue'
import playdeal from './views/operation/playdeal.vue'
import queryList from './views/operation/queryList.vue'
//import Page6 from './views/nav3/Page6.vue'
import logdaily from './views/manage/logdaily.vue'
import operdaily from './views/manage/operdaily.vue'
import smaint from './views/manage/smaint.vue'
import echarts from './views/manage/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '客服工具',
        iconCls: 'el-icon-menu',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: '用户查询' },
            { path: '/form', component: Form, name: '发布公告' },
            { path: '/user', component: user, name: '发邮件' },
            { path: '/bazaar', component: bazaar, name: '转会市场挂售' },
            { path: '/dnfid', component: dnfid, name: '封号/解封' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '运营工具',
        iconCls: 'el-icon-time',
        children: [
            { path: '/item', component: item, name: '发放道具' },
            { path: '/Players', component:Players, name: '发放球员' },
            { path: '/queryList',component: queryList,name: '充值查询'},
            { path: '/incomedata', component: incomedata, name: '营收数据' },
            { path: '/shopdeal', component: shopdeal, name: '商城买卖' },
            { path: '/',
                component:transh,
                transfermarket: true,
                name: '转会市场',
                children:[
                    { path: '/transplay', component: transplay, name: '转会市场补球员' },
                    { path: '/playdeal', component: playdeal, name: '球员买卖' },
                ]
            }
        ]
    },

    // {
    //     path: '/',
    //     component: Home,
    //     name: '',
    //     iconCls: 'fa fa-address-card',
    //     leaf: true,//只有一个节点
    //     children: [
    //         { path: '/page6', component: Page6, name: '导航三' }
    //     ]
    // },
    {
        path: '/',
        component: Home,
        name: '管理工具',
        iconCls: 'el-icon-setting',
        children: [
            { path: '/echarts', component: echarts, name: '管理员管理' },
            { path: '/smaint', component: smaint, name: '脚本维护' },
            { path: '/logdaily', component: logdaily, name: '登录日志' },
            { path: '/operdaily', component: operdaily, name: '操作日志' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;