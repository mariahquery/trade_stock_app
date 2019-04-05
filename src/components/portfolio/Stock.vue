<template>
    <div>
        <div class="box-wrapper">
            <div class="box-head">
                <div style="font-weight: bold">{{ stock.brand }}</div>
                <div>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</div>
            </div>
            <div class="box-body">
                <div>
                    <input placeholder="Quantity" v-model="stock.value" class="input-stock" type="number">
                </div>
                <button class="sell--btn" @click="sellStock(stock)">Buy</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: ["stock"],
        name: "Portfolio",
        methods: {
            sellStock(stock) {
                // Sell Stock
                console.log(stock);
            }
        }
    }
</script>

<style scoped>
    .input-stock {
        border-radius: 5px;
        height: 40px;
        padding-left: 15px
    }

    .box-body {
        display: flex;
        justify-content: space-between;
        margin-top: 15px
    }

    .box-wrapper {
        padding: 15px;
        width: 50%;
        float: left;
    }

    .box-head {
        display: flex;
        background: #DEEFD8;
        color: #7B976A;
        padding: 15px
    }
</style>