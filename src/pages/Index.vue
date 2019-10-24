<template lang="pug">
    div#main
        nav-drawer
        //- tool-bar
        v-content
            v-container(fluid)
                keep-alive
                    router-view
</template>

<script>
import ToolBar from "@/components/Toolbar.vue";
import NavDrawer from "@/components/Navdrawer/Navdrawer.vue";
export default {
    components: {
        ToolBar,
        NavDrawer
    }
}
</script>

<style lang="scss" scoped>
#main {
    height: 100%;
}
</style>