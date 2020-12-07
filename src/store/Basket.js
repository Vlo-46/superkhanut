import keys from "../keys";
import Swal from "sweetalert2";

export default {
    state: {
        basket_list: []
    },
    mutations: {
        BASKET_LIST(state, list) {
            state.basket_list = list
        },
        UPDATE_BASKET_ITEMS(state, arr) {
            state.basket_list = arr
        },
        DELETE_ALL(state) {
            localStorage.removeItem(keys.basket);
            state.basket_list = []
        }
    },
    actions: {
        GET_BASKET_LIST_ITEMS(ctx, list) {
            ctx.commit('BASKET_LIST', list)
        },
        DELETE_FROM_BASKET(ctx, id) {
            let array = [];
            let basket_items = localStorage.getItem(keys.basket);

            array = JSON.parse(basket_items) || [];

            for (let i = 0; i < array.length; i++) {
                if (array[i].id === id) {
                    let index = array.indexOf(array[i]);
                    // console.log(index)
                    array.splice(index, 1)
                }
            }

            ctx.commit('UPDATE_BASKET_ITEMS', array);
            localStorage.setItem(keys.basket, JSON.stringify(array))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'The order was removed from the shopping cart',
                showConfirmButton: false,
                timer: 1500
            })
        },
        DELETE_ALL_ITEMS_FROM_BASKET(ctx) {
            ctx.commit('DELETE_ALL')
        }
    },
    getters: {}
}