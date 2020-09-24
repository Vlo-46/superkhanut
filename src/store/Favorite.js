import keys from "../keys";

export default {
    state: {
        favorite_list: []
    },
    mutations: {
        FAVORITE_LIST(state, list) {
            state.favorite_list = list
        },
        UPDATE_FAVORITE_ITEMS(state, arr) {
            state.favorite_list = arr
        },
        REMOVE_ALL(state, arr) {
            state.favorite_list = arr
        }
    },
    actions: {
        GET_FAVORITE_LIST_ITEMS(ctx, list) {
            ctx.commit('FAVORITE_LIST', list)
        },
        DELETE_FAVORITE_ITEM(ctx, id) {
            let array = [];
            let favorite_items = localStorage.getItem(keys.favorite);

            array = JSON.parse(favorite_items) || [];

            for (let i = 0; i < array.length; i++) {
                if (array[i].id === id) {
                    let index = array.indexOf(array[i]);
                    // console.log(index)
                    array.splice(index, 1)
                }
            }

            ctx.commit('UPDATE_FAVORITE_ITEMS', array);
            localStorage.setItem(keys.favorite, JSON.stringify(array))
        },
        REMOVE_ALL_ITEMS(ctx) {
            localStorage.removeItem(keys.favorite);
            let arr = [];
            ctx.commit('REMOVE_ALL', arr)
        }
    },
    getters: {}
}