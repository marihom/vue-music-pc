<template lang="pug">
    v-navigation-drawer(permanent app)
        v-app-bar(flat)
            v-toolbar-title VMusic
        v-divider
        v-list
            template(v-for="item in nav")
                v-list-group(
                    no-action
                    v-if="item.children"
                    :key="item.title"
                    :prepend-icon="item.icon"
                    value="true"
                )
                    template(v-slot:activator)
                        v-list-item-content
                            v-list-item-title {{ item.title }}
                    v-list-item(
                        v-for="subItem in item.children"
                        :key="subItem.title"
                        @click=""
                        :to="subItem.to"
                    )
                        v-list-item-title {{ subItem.title }}
                        v-list-item-icon
                            v-icon(v-text="subItem.icon")
                v-list-item(
                    v-else
                    :key="item.title"
                    @click=""
                    :to="item.to"
                )
                    v-list-item-icon
                        v-icon(v-text="item.icon")
                    v-list-item-title {{ item.title}}
</template>

<script>
export default {
    props: {
        nav: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {};
    }
};
</script>