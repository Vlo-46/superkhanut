import axios from "axios";
import keys from "../keys";

export default {
    state: {
        products: [],
        filtered_products: [],
        all_companies: [],
        company_filtered: false
    },
    mutations: {
        $ALL_PRODUCTS(state, products) {
            state.products = products
        },
        $FILTERED_PRODUCTS(state, data) {
            if (data.filtered_type === 'price') {
                let min = Number(data.price.min)
                let max = Number(data.price.max)
                let filtered_items = []
                state.products.forEach(i => {
                    if (Number(i.price) >= Number(min) && Number(i.price) <= Number(max)) {
                        filtered_items.push(i)
                    }
                });
                state.filtered_products = filtered_items;
                state.company_filtered = false
            } else if (data.filtered_type === 'category') {
                let category = data.category
                const x = state.products.filter(i => {
                    return i.category === category
                })
                state.filtered_products = x;
                state.company_filtered = false
            } else {
                // console.log(data)
                let search_type = data.search_type;
                let searched_name = data.searched_name;
                state.searched_name = searched_name
                if (search_type === 'product') {
                    const p = state.products.filter(i => {
                        return i.product_name.toLowerCase().includes(searched_name.toLowerCase())
                    })
                    state.filtered_products = p
                    state.company_filtered = false
                    // console.log(p)
                } else {
                    const c = state.all_companies.filter(i => {
                        return i.name.toLowerCase().includes(searched_name.toLowerCase())
                    })
                    state.filtered_products = c;
                    state.company_filtered = true
                    // console.log(c)
                }
            }
        },
        $ALL_COMPANIES(state, companies) {
            state.all_companies = companies
        },
    },
    actions: {
        //ALL PRODUCTS
        $GET_ALL_PRODUCTS(ctx) {
            axios.get(`${keys.baseURI}/api/product`)
                .then(res => {
                    // console.log(res.data)
                    ctx.commit('$ALL_PRODUCTS', res.data)
                })
                .catch(e => console.log(e))
        },


        //ALL COMPANIES
        $GET_ALL_COMPANIES(ctx) {
            axios.get(`${keys.baseURI}/api/store`)
                .then(res => {
                    // console.log(res.data)
                    ctx.commit('$ALL_COMPANIES', res.data)
                })
                .catch(e => console.log(e))
        },


        //SEARCH FILTER
        $SEARCH_BY_COMPANY_OR_PRODUCT(ctx, data) {
            ctx.commit('$FILTERED_PRODUCTS', data.data)
        },

        //FILTER BY PRICE
        $WRAPPER_FILTER_BY_PRICE(ctx, price) {
            let data = {
                filtered_type: 'price',
                price
            }
            ctx.commit('$FILTERED_PRODUCTS', data)
        },

        //FILTER BY CATEGORY
        $WRAPPER_FILTER_BY_CATEGORY(ctx, category) {
            let data = {
                filtered_type: 'category',
                category
            }
            ctx.commit('$FILTERED_PRODUCTS', data)
        }
    },
    getters: {}
}