<template lang="pug">
    div.songs-tab
        v-simple-table
            template(v-slot:default)
                tbody
                    tr(v-for="item in desserts" :keys="item.name")
                        td {{ item.name }}
                        td {{ item.calories }}

</template>

<script>
export default {
    data() {
        return {
            desserts: [
                {
                    name: "Frozen Yogurt",
                    calories: 159
                },
                {
                    name: "Ice cream sandwich",
                    calories: 237
                },
                {
                    name: "Eclair",
                    calories: 262
                },
                {
                    name: "Cupcake",
                    calories: 305
                },
                {
                    name: "Gingerbread",
                    calories: 356
                },
                {
                    name: "Jelly bean",
                    calories: 375
                },
                {
                    name: "Lollipop",
                    calories: 392
                },
                {
                    name: "Honeycomb",
                    calories: 408
                },
                {
                    name: "Donut",
                    calories: 452
                },
                {
                    name: "KitKat",
                    calories: 518
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.songs-tab {
    height: 100%;
}
</style>