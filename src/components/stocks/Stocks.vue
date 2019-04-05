<template>
    <div>
        <h1 class="mb20">The Stocks Component</h1>
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue';

    export default {
        name: "Stocks",
        components: {
            'app-stock':Stock
        },
        data() {
            return {
                stocks: [
                    {id:1, brand: "BMW", price: 100, value: 0, is_active: true},
                    {id:2, brand: "Google", price: 200, value: 0, is_active: true},
                    {id:3, brand: "Apple", price: 250, value: 0, is_active: true},
                    {id:4, brand: "Twitter", price: 8, value: 0, is_active: true},
                    {id:5, brand: "Facebook", price: 8, value: 0, is_active: false}
                ]
            }
        }
    }
</script>

<style scoped>
    .mb20 {
        margin-bottom: 20px;
    }
</style>