import axios from 'axios'
import keys from "../../keys";

export default {
    state: {
        products: [],
        companies: [],
    },
    mutations: {
        ALL_PRODUCTS_IN_COMPANIES(state, products) {
            state.products = products
        },
        COMPANIES(state, companies) {
            state.companies = companies
        },

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

    },
    getters: {}
}