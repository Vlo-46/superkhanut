import axios from "axios";
import keys from "../keys";


export default {
    state: {
        products: [],
        filtered_products: [],
        filtered: false
    },
    mutations: {
        GET_PRODUCTS(state, products) {
            state.products = products
        },
        COMPANY_FILTERS(state, data) {
            if (data.filtered_type === 'price') {
                let min = Number(data.price.min)
                let max = Number(data.price.max)
                console.log(data)
                let filtered_items = []
                state.products.forEach(i => {
                    if (Number(i.price) >= Number(min) && Number(i.price) <= Number(max)) {
                        filtered_items.push(i)
                    }
                });
                state.filtered_products = filtered_items;
                state.filtered = true
            } else if (data.filtered_type === 'category') {
                let category = data.category
                const x = state.products.filter(i => {
                    return i.category === category
                })
                state.filtered_products = x;
                state.filtered = true
            }
        }
    },
    actions: {
        GET_COMPANY_PRODUCTS_FOR_FILTER(ctx, company_name) {
            let url = keys.baseURI;
            axios.post(`${url}/api/store/list`, {company_name})
                .then(res => {
                    // console.log(res.data.products)
                    ctx.commit('GET_PRODUCTS', res.data.products)
                })
                .catch(e => console.log(e))
        },
        COMPANY_FILTER_BY_PRICE(ctx, price) {
            let data = {
                filtered_type: 'price',
                price
            }
            ctx.commit('COMPANY_FILTERS', data)
        },
        COMPANY_FILTER_BY_CATEGORY(ctx, category) {
            let data = {
                filtered_type: 'category',
                category
            }
            ctx.commit('COMPANY_FILTERS', data)
        }
    },
    getters: {}
}