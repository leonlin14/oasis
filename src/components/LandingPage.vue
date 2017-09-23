<template>
    <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
            <v-flex xs6 offset-xs3>
                <template>
                    <v-tabs dark fixed centered>
                        <v-toolbar extended class="cyan" dark>
                                <v-toolbar-title slot="extension" class="display-2">Welcome To Engined</v-toolbar-title>
                        </v-toolbar>

                        <v-tabs-bar class="cyan">
                            <v-tabs-slider class="yellow"></v-tabs-slider>
                            <v-tabs-item
                                v-for="i in items"
                                :key="i"
                                :href="'#tab-' + i"
                            >
                                {{ i }}
                            </v-tabs-item>
                        </v-tabs-bar>
                        <v-tabs-items>
                            <v-tabs-content key="Sign in" id="tab-Sign in">
                                <v-card flat>
                                    <v-card-text>
                                        <Signin />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-content>
                            <v-tabs-content key="Sign up" id="tab-Sign up">
                                <v-card flat>
                                    <v-card-text>
                                        <Signup />
                                    </v-card-text>
                                </v-card>
                            </v-tabs-content>
                        </v-tabs-items>
                    </v-tabs>
                </template>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Signin from './Signin.vue'
    import Signup from './Signup.vue'

    export default {
        name: 'LandingPage',
        data () {
            return {
                items: ['Sign in', 'Sign up']
            }
        },
        components: {
            Signin,
            Signup
        }
    }
</script>
