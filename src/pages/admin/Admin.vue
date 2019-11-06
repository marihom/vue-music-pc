<!--
 * @description: 音乐网站管理页面
 * @since: 2019-10-24 23:37:28
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2019-11-01 00:29:47
 -->
<template lang="pug">
    div#main
        nav-drawer(:nav="adminNav")
        //- tool-bar
        v-content
            v-container(fluid)
                keep-alive
                    router-view
</template>

<script>
import NavDrawer from "@/components/Navdrawer/Navdrawer.vue";
import adminNav from "@/components/Nav/AdminNav.js";
export default {
    components: {
        NavDrawer
    },
    data() {
        return {
            adminNav
        }
    }
}
</script>