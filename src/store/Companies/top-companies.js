import axios from "axios";
import keys from "../../keys";

export default {
    state: {
        top_companies: []
    },
    mutations: {
        TOP_COMPANIES(state, topCompanies) {
            state.top_companies = topCompanies
        }
    },
    actions: {
        GET_TOP_COMPANIES(ctx) {
            axios.get(`${keys.baseURI}/api/store/tops`)
                .then(res => {
                    // console.log(res.data)
                    ctx.commit('TOP_COMPANIES', res.data)
                })
                .catch(e => console.log(e))
        }
    },
    getters: {}
}