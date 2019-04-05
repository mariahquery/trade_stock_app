<template>
    <div>
        <h1 class="mb10">The Portfolio Component</h1>
        <bought-stock v-for="stock in stocks" :stock="stock"></bought-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue'

    export default {
        components: {
            "bought-stock": Stock
        },
        name: "Stocks",
        data() {
            return {
                stocks: [
                    {brand: "BMW", price: 100, value: ''}
                ]
            }
        }
    }
</script>

<style scoped>

    .mb20 {
        margin-bottom: 20px;
    }
    .sell--btn {
        padding: 5px 10px;
        background-color: #E5908E;
        border-radius: 5px;
    }
</style>