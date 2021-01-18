import axios from "axios";
import keys from "../keys";

export default {
    state: {
        website_logo: '',
        footer_title: '',
        footer_content: ''
    },
    mutations: {
        SETTINGS(state, settings) {
            const logo = settings.filter(i => {
                return i.key === 'superstore_logo'
            })[0]
            const title = settings.filter(i => {
                return i.key === 'footer_title'
            })[0]
            const content = settings.filter(i => {
                return i.key === 'footer_content'
            })[0]
            state.website_logo = logo;
            state.footer_title = title;
            state.footer_content = content
        }
    },
    actions: {
        GET_SETTINGS(ctx) {
            axios.get(`${keys.baseURI}/api/superstore`)
                .then(res => {
                    ctx.commit('SETTINGS', res.data)
                })
                .catch(e => console.log(e))
        }
    },
    getters: {}
}