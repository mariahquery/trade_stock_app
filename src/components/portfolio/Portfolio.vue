<template>
    <div>
        <h1 class="mb10">The Portfolio Component</h1>
        <bought-stock v-for="stock in stocks" :stock="stock"></bought-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue'
    import {mapGetters} from 'vuex'

    export default {
        components: {
            "bought-stock": Stock
        },
        name: "Stocks",
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        }
    }
</script>
