import axios from 'axios'
import keys from "../../keys";

export default {
    state: {
        products: [],
        // filtered_products: [],
        // filtered: false
        companies: []
    },
    mutations: {
        ALL_PRODUCTS_IN_COMPANIES(state, products) {
            state.products = products
        },
        COMPANIES(state, companies) {
            state.companies = companies
        },

        // UPDATE_FILTER_BY_PRICE(state, filtered_products) {
        //     state.filtered = true;
        //     state.filtered_products = filtered_products
        // },
        // UPDATE_FILTER_BY_CATEGORY(state, category) {
        //     const x = state.products.filter(i => {
        //         return i.category === category
        //     });
        //     state.filtered = true;
        //     state.filtered_products = x;
        // }
    },
    actions: {
        async GET_ALL_PRODUCTS_IN_COMPANIES(ctx) {
            await axios.get(`${keys.baseURI}/api/product`)
                .then(res => {
                    // console.log(res.data)
                    ctx.commit('ALL_PRODUCTS_IN_COMPANIES', res.data)
                })
                .catch(e => console.log(e))
        },
        ALL_COMPANIES(ctx) {
            axios.get(`${keys.baseURI}/api/store`)
                .then(res => {
                    // console.log(res.data)
                    ctx.commit('COMPANIES', res.data)
                })
                .catch(e => console.log(e))
        },
        // WRAPPER_FILTER_BY_PRICE(ctx, price) {
        //     let min = Number(price.min);
        //     let max = Number(price.max);
        //
        //     let products = this.state.products.products;
        //
        //     let filtered_products = [];
        //
        //     products.forEach(i => {
        //         if (Number(i.price) >= min && Number(i.price) <= max) {
        //             filtered_products.push(i)
        //         }
        //     });
        //
        //     ctx.commit('UPDATE_FILTER_BY_PRICE', filtered_products)
        // },
        // WRAPPER_FILTER_BY_CATEGORY(ctx, category) {
        //     ctx.commit('UPDATE_FILTER_BY_CATEGORY', category)
        // }

    },
    getters: {}
}