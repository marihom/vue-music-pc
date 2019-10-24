<template lang="pug">
    div.library-page
        v-app-bar(app)
            v-toolbar-title My Library
            template(v-slot:extension)
                v-tabs(align-with-title v-model="tab")
                    v-tab Songs
                    v-tab Tab2
                    v-tab Tab3
        v-tabs-items(v-model="tab")
            v-tab-item
                Songs
</template>

<script>
import ToolBar from "@/components/Toolbar.vue";
import Songs from "./components/Songs.vue";
export default {
    components: {
        ToolBar,
        Songs
    },
    data() {
        return {
            tab: null,
        }
    },
}
</script>

<style lang="scss" scoped>
.library-page {
    height: 100%;
}
</style>