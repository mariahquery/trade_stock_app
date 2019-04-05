<template>
    <div class="header-wrapper">
        <div class="flex-it">
            <div class="header--item">
                <router-link to="/"><strong>Stock Trader</strong></router-link>
            </div>
            <div class="header--item">
                <router-link to="/portfolio" activeClass="active">Portfolio</router-link>
            </div>
            <div class="header--item">
                <router-link to="/stocks" activeClass="active">Stocks</router-link>
            </div>
        </div>

        <div class="flex-it">
            <div class="header--item" @click="endDay">End Day</div>
            <div class="header--item">
                <select v-model="save_or_load" @change="SaveOrLoad(save_or_load)">
                    <option disabled selected value="">Save & Load</option>
                    <option value="save">Save</option>
                    <option value="load">Load</option>
                </select>
            </div>
            <div class="header--item">Funds: {{ $store.getters.funds }} €</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Header",
        data () {
          return {
              save_or_load: ''
          }
        },
        methods: {
            SaveOrLoad (save_or_load) {
                console.log(save_or_load)
                if (save_or_load === 'save') {
                    // save
                } else {
                    // load
                }
            },
            endDay() {
                // End Day function
            }
        }
    }
</script>

<style scoped>
    .active {
        font-weight: bold;
    }
    .flex-it {
        display: flex;
    }
    .header--item {
        margin: 5px 5px;
    }

    a {
        color: black;
    }

    .header-wrapper {
        color: black !important;
        display: flex;
        justify-content: space-between;
        margin: 40px 0;
        padding: 10px;
        background: #F9F8F9;
        border: 1px solid #EDECED;
    }
</style>