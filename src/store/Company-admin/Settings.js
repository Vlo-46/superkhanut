import keys from "../../keys";
import axios from 'axios'

export default {
    state: {
        support_field: {},
        slider_field: {
            slider_img: [],
            slider_text: ''
        },
        company_logo: '',
        shop_page_img: '',
        about_field: {},
        contact_info: '',
        categories: []
    },
    mutations: {
        SUPPORT_FIELD(state, data) {
            state.support_field = data
        },
        SLIDER_FIELD(state, data) {
            state.slider_field.slider_img = data.slider_img;
            state.slider_field.slider_text = data.slider_text;
        },
        COMPANY_LOGO(state, data) {
            state.company_logo = data
        },
        SHOP_PAGE_IMG(state, data) {
            state.shop_page_img = data
        },
        ABOUT_INFO(state, data) {
            state.about_field = data
        },
        CONTACT_INFO(state, data) {
            console.log(data)
            state.contact_info = data
        },
        CATEGORIES(state, data) {
            state.categories = data
        }
    },
    actions: {
        GET_COMPANY_SETTINGS(ctx, company_name) {
            axios.get(`${keys.baseURI}/api/store/${company_name}`)
                .then(res => {
                    // console.log(JSON.stringify(res.data));
                    ctx.commit('SUPPORT_FIELD', res.data.support_field);
                    ctx.commit('SLIDER_FIELD', res.data.slider_field);
                    ctx.commit('COMPANY_LOGO', res.data.company_logo);
                    ctx.commit('SHOP_PAGE_IMG', res.data.shop_page_img);
                    ctx.commit('ABOUT_INFO', res.data.about_field);
                    ctx.commit('CONTACT_INFO', res.data.contact_text);
                    ctx.commit('CATEGORIES', res.data.category)
                })
                .catch(e => console.log(e))
        }
    },
    getters: {}
}