import Vue from "vue";
import VueRouter from "vue-router";

const Index = () => import("@/pages/Index.vue");
const Library = () => import("@/views/Library/Library.vue");

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Index,
        children: [
            {
                path: "",
                redirect: "/library"
            },
            {
                path: "library",
                component: Library
            }
        ]
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
