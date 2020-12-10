import axios from 'axios'
import keys from '../../keys'

export default {
    state: {
        user: {},
        orders: []
    },
    mutations: {
        GET_USER_INFO(state, user) {
            state.user = user
        },
        USER_ORDERS(state, orders) {
            state.orders = orders
        },
        STATUS_CHANGE(state, data) {
            state.orders.forEach(i => {
                if (i.id == data.orderId) {
                    i.status = data.msg
                }
            })
        },
    },
    actions: {
        GET_USER(ctx, token) {
            const url = keys.baseURI;
            axios.post(`${url}/api/auth/me`, {}, {
                headers: {
                    'Authorization': `bearer ${token}`
                }
            })
                .then(res => {
                    const user = res.data.user;
                    ctx.commit('GET_USER_INFO', user)
                })
                .catch(e => console.log(e))
        },
        GET_USER_ORDERS(ctx, token) {
            // const token = localStorage.getItem(keys.API_TOKEN);
            axios.get(`${keys.baseURI}/api/order`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => {
                ctx.commit('USER_ORDERS', res.data)
                // console.log(res.data);
            }).catch(e => console.log(e))
        },
        USER_ORDER_STATUS(ctx, data) {
            const token = localStorage.getItem(keys.API_TOKEN);
            axios.post(`${keys.baseURI}/api/order/status`, data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => {
                    ctx.commit('STATUS_CHANGE', res.data)
                })
                .catch(e => console.log(e))
        },
    },
    getters: {}
}