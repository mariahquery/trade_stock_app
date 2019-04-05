<template>
    <div>
        <div class="box-wrapper">
            <div class="box-head">
                <div><strong>{{ stock.brand }}</strong></div>
                <div>(Price: {{ stock.price }})</div>
            </div>
            <div class="box-body">
                <div>
                    <input :min="stock.price"
                           placeholder="Quantity"
                           v-model="stock.value"
                           class="input-stock"
                           type="number">
                </div>
                <button class="buy--btn" @click="buyStock(stock)">Buy</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["stock"],
        name: "Stock",
        methods: {
            buyStock(stock) {
                const order = {
                    stockId: stock.id,
                    stockPrice: stock.price,
                    quantity: stock.value
                };
                console.log(stock);
                console.log(order);
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

    .buy--btn {
        padding: 5px 10px;
        background-color: #97D298;
        border-radius: 5px;
    }
</style>