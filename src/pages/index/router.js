import Vue from 'vue';
import VueRouter from 'vue-router';

const Index = () => import('@/pages/Index.vue'); // 音乐网站首页主体组件
const Library = () => import('@/views/Library/Library.vue'); // 主页-歌库

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Index,
        children: [
            {
                path: '',
                redirect: '/library'
            },
            {
                path: 'library',
                component: Library
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    base: '/music',
    routes
});

export default router;
