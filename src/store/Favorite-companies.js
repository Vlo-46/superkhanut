import keys from "../keys";
import Swal from "sweetalert2";

export default {
    state: {
        favorite_companies: []
    },
    mutations: {
        FAVORITE_COMPANIES(state, list) {
            state.favorite_companies = list
        },
        UPDATE_FAVORITE_COMPANIES(state, arr) {
            state.favorite_companies = arr
        }
    },
    actions: {
        GET_FAVORITE_COMPANIES_LIST(ctx, list) {
            // console.log(list)
            ctx.commit('FAVORITE_COMPANIES', list)
        },
        DELETE_FAVORITE_COMPANY_ITEM(ctx, id) {
            let array = [];
            let favorite_companies = localStorage.getItem(keys.favorite_companies);

            array = JSON.parse(favorite_companies) || [];

            for (let i = 0; i < array.length; i++) {
                if (array[i].id === id) {
                    let index = array.indexOf(array[i]);
                    // console.log(index)
                    array.splice(index, 1)
                }
            }

            ctx.commit('UPDATE_FAVORITE_COMPANIES', array);
            localStorage.setItem(keys.favorite_companies, JSON.stringify(array))
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'The company removed from the list of preferred',
                showConfirmButton: false,
                timer: 1500
            })
        }
    },
    getters: {}
}