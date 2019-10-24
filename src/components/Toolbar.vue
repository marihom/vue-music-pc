<template lang="pug">
    //- v-app-bar(app)
    v-app-bar(app)
            v-toolbar-title My Library
            template(v-slot:extension)
                v-tabs(align-with-title)
                    v-tab Tab1
                    v-tab Tab2
                    v-tab Tab3
</template>