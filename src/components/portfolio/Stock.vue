<template>
    <div>
        <div class="box-wrapper">
            <div class="box-head">
                <div style="font-weight: bold">{{ stock.name }}</div>
                <div>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</div>
            </div>
            <div class="box-body">
                <div>
                    <input placeholder="Quantity"
                           v-model="quantity"
                           class="input-stock"
                           type="number"/>
                </div>
                <button class="sell--btn" @click="sellStock">Sell</button>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        props: ["stock"],
        name: "Portfolio",
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            ...mapActions({
                    placeSellOrder: 'sellStock'
                }
            ),
            sellStock() {
                debugger;
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };

                this.placeSellOrder(order);
                this.quantity = 0;
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
