import keys from "../../keys";
import axios from "axios";

export default {
    state: {
        orders: []
    },
    mutations: {
        GET_ORDERS(state, orders) {
            state.orders = orders
        },
        STATUS_CHANGE(state, data) {
            state.orders.forEach(i => {
                if (i.order_id == data.orderId) {
                    i.status = data.msg
                }
            })
        },
    },
    actions: {
        GET_COMPANY_ORDERS(ctx) {
            const token = localStorage.getItem(keys.API_TOKEN);
            axios.get(`${keys.baseURI}/api/order`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => {
                // console.log(res.data);
                ctx.commit('GET_ORDERS', res.data)
            }).catch(e => console.log(e))
        },
        COMPANY_ORDER_STATUS(ctx, data) {
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