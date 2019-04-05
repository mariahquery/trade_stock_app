import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funds: 3000,
        bought_stocks: [],
        stocks: [
            {id:1, brand: "BMW", price: 100, value: '', is_active: true},
            {id:2, brand: "Google", price: 200, value: '', is_active: true},
            {id:3, brand: "Apple", price: 250, value: '', is_active: true},
            {id:4, brand: "Twitter", price: 8, value: '', is_active: true},
            {id:5, brand: "Facebook", price: 8, value: '', is_active: false}
        ]
    },
    mutations: {
        "SET_STOCKS" (state, stocks) {
          state.stocks = stocks;
        },
        "RND_STOCKS" (state) {

        },
        change(state, funds) {
            state.funds = funds;
        },
        buyStock (state, stock) {
            state.funds = (state.funds - stock.price);
            state.bought_stocks.push(stock);
        }
    },
    actions: {
        buyStock: ({commit}, order) => {
            commit();
        }
    },
    getters: {
        funds: state => state.funds,
        activeStocks: state => {
            return state.stocks.filter(stock => stock.is_active)
        },
        activeStocksCount: (state, getters) => {
            return getters.activeStocks.length
        },
        getStockByID: (getters) => (id) => {
            return getters.activeStocks.find(stock => stock.id === id)
        }
    }
});