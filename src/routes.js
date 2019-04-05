import Header from "./components/Header.vue";

import Homepage from './components/Homepage.vue'
import Portfolio from "./components/portfolio/Portfolio.vue";
import Stocks from "./components/stocks/Stocks.vue";

export const routes = [
    {
        name: '',
        path: '/',
        components: {
            default: Homepage,
            "header": Header
        }
    }, {
        name: 'portfolio',
        path: '/portfolio',
        components: {
            default: Portfolio,
            "header": Header
        }
    },
    {
        name: 'stocks',
        path: '/stocks',
        components: {
            default: Stocks,
            "header": Header
        }
    }
];