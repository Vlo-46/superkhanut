import axios from 'axios'
import keys from "../../keys";

export default {
    state: {
        companies: []
    },
    mutations: {
        ALL_COMPANIES(state, companies) {
            state.companies = companies
        }
    },
    actions: {
        GET_ALL_COMPANIES(ctx) {
            axios.get(`${keys.baseURI}/api/store`)
                .then(res => {
                    // console.log(res.data)
                    ctx.commit('ALL_COMPANIES', res.data)
                })
                .catch(e => console.log(e))
        }
    },
    getters: {}
}