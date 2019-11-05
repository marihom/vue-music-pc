<!--
 * @description: 音乐主页面
 * @since: 2019-10-23 20:14:29
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2019-10-31 23:37:29
 -->
<template lang="pug">
    div#main
        nav-drawer(:nav="indexNav")
        //- tool-bar
        v-content
            v-container(fluid)
                keep-alive
                    router-view
</template>

<script>
import ToolBar from "@/components/Toolbar.vue";
import NavDrawer from "@/components/Navdrawer/Navdrawer.vue";
import indexNav from "@/components/Nav/IndexNav.js";
export default {
    components: {
        ToolBar,
        NavDrawer
    },
    data() {
        return {
            indexNav
        }
    }
}
</script>

<style lang="scss" scoped>
#main {
    height: 100%;
}
</style>