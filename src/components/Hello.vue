<template>
  <div class="hello">
      <router-link :to="{ name: 'Hello' }">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/coins/ethereum">Ethereum</router-link>
      <router-link to="/coins/bitcoin">Bitcoin</router-link>
      <br />
      <br /><br /><br />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
    export default {
        name: 'Hello',
            data () {
            return {
                msg: 'Welcome to Crypto Info'
            }
        }
    }
</script>
