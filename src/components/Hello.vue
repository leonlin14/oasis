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
                                        <template>
                                            <v-form v-model="valid" ref="form">
                                                <v-text-field
                                                    label="Name"
                                                    v-model="name"
                                                    :rules="nameRules"
                                                    :counter="20"
                                                    required
                                                ></v-text-field>
                                                <v-text-field
                                                    label="E-mail"
                                                    v-model="email"
                                                    :rules="emailRules"
                                                    required
                                                ></v-text-field>

                                                <v-btn outline class="teal--text" @click="submit">submit</v-btn>
                                                <v-btn outline class="grey--text" @click="clear">clear</v-btn>
                                            </v-form>
                                        </template>
                                    </v-card-text>
                                </v-card>
                            </v-tabs-content>
                            <v-tabs-content key="Sign up" id="tab-Sign up">
                                <v-card flat>
                                    <v-card-text>
                                        <h1>{{ '12345' }}</h1>
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
    export default {
        name: 'Home',
        data () {
            return {
                items: ['Sign in', 'Sign up'],
                valid: false,
                name: '',
                nameRules: [
                    (v) => !!v || 'Name is required',
                    (v) => v && v.length <= 20 || 'Name must be less than 20 characters'
                ],
                email: '',
                emailRules: [
                    (v) => !!v || 'E-mail is required',
                    (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ]
            }
        },
        methods: {
            submit () {
                if (this.$refs.form.validate()) {
                    // this.$refs.form.$el.submit()
                    // this.$http.post('https://api.login', JSON.stringify(content))
                    //     .then(
                    //         (resp) => {
                    //             this.coin = resp.data[0]
                    //             console.log(resp)
                    //         }
                    //     )
                    //     .catch((err) => {
                    //         console.log(err)
                    //     })
                }
            },
            clear () {
                this.$refs.form.reset()
            }
        }
    }
</script>
