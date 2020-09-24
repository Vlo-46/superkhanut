import axios from 'axios'
import keys from '../../keys'

export default {
    state: {
        products: [],
    },
    mutations: {
        GET_PRODUCTS(state, products) {
            state.products = products
        },
        UPDATE_COMPANY_PRODUCTS(state, id) {
            const x = state.products.filter(i => {
                return i.id !== id
            });
            state.products = x
        },
    },
    actions: {
        async GET_COMPANY_PRODUCTS(ctx, company_name) {
            let url = keys.baseURI;

            await axios.post(`${url}/api/store/list`, {company_name})
                .then(res => {
                    // console.log(res.data.products)
                    ctx.commit('GET_PRODUCTS', res.data.products)
                })
                .catch(e => console.log(e))
        },
        DELETE_COMPANY_PRODUCT(ctx, id) {
            let url = keys.baseURI;
            let API_TOKEN = keys.API_TOKEN;
            let token = localStorage.getItem(API_TOKEN);

            axios.delete(`${url}/api/store/item/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(() => {
                ctx.commit('UPDATE_COMPANY_PRODUCTS', id)
            }).catch(e => console.log(e))
        },
        EDIT_COMPANY_PRODUCT(ctx, product) {
            let url = keys.baseURI;
            let API_TOKEN = keys.API_TOKEN;
            let token = localStorage.getItem(API_TOKEN);


            axios.patch(`${url}/api/store/item/${product.id}`, {product}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(() => {
                return true
            }).catch(e => console.log(e))
        },
    },
    getters: {},
}