<template>
    <v-app id="app" toolbar footer>
        <v-navigation-drawer absolute persistent light :mini-variant.sync="mini" v-model="drawer" overflow>
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="https://randomuser.me/api/portraits/women/82.jpg" />
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>Eva Williamson</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon @click.native.stop="mini = !mini">
                                <v-icon>chevron_left</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-list class="pt-0" dense>
                <v-divider></v-divider>
                <v-list-tile v-for="item in items" :key="item.title" @click="">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar fixed class="cyan" dark>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Toolbar</v-toolbar-title>
        </v-toolbar>

        <main>
            <v-container fluid>
                <!--v-router-->
                <router-view></router-view>
            </v-container>
        </main>

        <v-footer class="cyan">
            <span class="white--text">© 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                drawer: null,
                items: [
                    { title: 'Home', icon: 'dashboard' },
                    { title: 'About', icon: 'question_answer' }
                ],
                mini: false,
                right: null
            }
        }
    }
</script>
