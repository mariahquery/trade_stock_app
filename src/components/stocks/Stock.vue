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
                           :class="{'danger': insufficientFunds}"
                           type="number">
                </div>
                <button :disabled="insufficientFunds || quantity <= 0"
                        class="buy--btn"
                        @click="buyStock">{{insufficientFunds ? 'insufficient funds' : 'Buy' }}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["stock"],
        name: "Stock",
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds;
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>

    .danger {
        border: 1px solid red;
    }

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
