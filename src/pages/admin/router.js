import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Admin = () => import("./Admin.vue");  // 管理后台框架组件
const List = () => import("@/views/admin/song/list.vue");   // 歌曲列表展示
const Upload = () => import("@/views/admin/song/upload.vue");   // 歌曲文件上传页面

const routes = [
    {
        path: '/',
        component: Admin,
        children: [
            {
                path: '',
                redirect: 'song/list'
            },
            {
                path: 'song/list',
                component: List,
            },
            {
                path: 'song/upload',
                component: Upload
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: '/music/admin',
    routes
})

export default router;