<template>
  <div>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/coins/ethereum">Ethereum</router-link>
      <router-link to="/coins/bitcoin">Bitcoin</router-link>
      <br />
      <br /><br /><br />
    <p>Name: {{ coin.name }}</p>
    <p>Symbol: {{ coin.symbol }}</p>
    <p>Price (USD): {{ coin.price_usd }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Coins',
    data() {
        return {
            coin: {}
        }
    },
    created() {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            this.$http.get('https://api.coinmarketcap.com/v1/ticker/'+this.$route.params.id+'/')
                .then(
                    (resp) => {
                        this.coin = resp.data[0]
                        console.log(resp)
                    }
                )
                .catch((err) => {
                    console.log(err)
                })
        }
    }
  }
</script>
