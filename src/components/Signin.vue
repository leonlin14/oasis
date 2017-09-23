<template>
    <v-form v-model="valid" ref="form">
        <v-text-field
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            required
        ></v-text-field>
        <v-text-field
            name="input-10-1"
            label="Enter your password"
            hint="At least 8 characters"
            v-model="password"
            min="8"
            :append-icon="pwd ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (pwd = !pwd)"
            :type="pwd ? 'password' : 'text'"
            :rules="pwdRules"
            counter
            required
            ></v-text-field>

        <v-btn outline class="teal--text" @click="submit">submit</v-btn>
        <v-btn outline class="grey--text" @click="clear">clear</v-btn>
    </v-form>
</template>

<script>
    const config = require('config')

    export default {
        name: 'Signin',
        data () {
            return {
                valid: false,
                email: '',
                emailRules: [
                    (v) => !!v || 'E-mail is required',
                    (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
                pwd: true,
                password: '',
                pwdRules: [
                    (v) => !!v || 'Password is required'
                ]
            }
        },
        methods: {
            submit () {
                if (this.$refs.form.validate()) {
                    let params =  JSON.stringify({
                        email: this.email,
            			password: this.password
                    })

                    this.$http.post(config.server.api_url + '/api/v1/auth/signin', params)
                        .then(
                            (resp) => {
                                console.log(resp.body)
                            }
                        )
                        .catch((err) => {
                            console.log(err)
                        })
                }
            },
            clear () {
                this.$refs.form.reset()
            }
        }
    }
</script>
