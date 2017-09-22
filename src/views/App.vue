<template>
    <v-app id="example-1" toolbar footer>
        <v-navigation-drawer
            persistent
            v-model="drawer"
            light
            enable-resize-watcher
            absolute
        >
            <v-list dense>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar class="indigo" dark fixed>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Toolbar</v-toolbar-title>
        </v-toolbar>

        <main>
            <v-container fluid>
                <!--v-router-->
                <template>
                    <v-layout row wrap>
                        <v-flex md12 lg4>
                            <v-date-picker v-model="picker"></v-date-picker>
                        </v-flex>
                        <v-flex md12 lg8 class="hidden-xs-only">
                            <v-date-picker v-model="picker2" landscape></v-date-picker>
                        </v-flex>
                    </v-layout>
                </template>

                <template>
                    <div class="text-xs-center">
                        <v-btn outline class="indigo--text">Outline Button</v-btn>
                        <v-btn outline fab class="teal--text">
                            <v-icon>list</v-icon>
                        </v-btn>
                        <v-btn outline large fab class="indigo--text">
                            <v-icon>edit</v-icon>
                        </v-btn>
                    </div>
                </template>

            </v-container>
        </main>

        <v-footer class="indigo">
            <span class="white--text">© 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                drawer: true,
                picker: null,
                picker2: null
            }
        }
    }
</script>
