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
            'app-stock': Stock
        },
        computed: {
            stocks () {
                return this.$store.getters.stocks;
            }
        }
    }
</script>

<style scoped>
    .mb20 {
        margin-bottom: 20px;
    }
</style>
