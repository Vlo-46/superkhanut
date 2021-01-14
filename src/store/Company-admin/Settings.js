import keys from "../../keys";
import axios from 'axios'
import Swal from "sweetalert2";

export default {
    state: {
        support_field: {},
        slider_field: [],
        company_logo: '',
        shop_page_img: '',
        about_field: '',
        contact_info: '',
        categories: [],
        advertising: []
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
            state.contact_info = data
        },
        CATEGORIES(state, data) {
            state.categories = data
        },
        ADVERTISING_FIELD(state, data) {
            state.advertising = data
        },
        DELETE_ADD(state, id) {
            const x = state.advertising.filter(i => {
                return i.id !== id
            })
            state.advertising = x
        },
        UPDATE_CATEGORIES(state, category) {
            state.categories.push(category)
        },
        DELETE_CATEGORY_ITEM(state, category) {
            const x = state.categories.filter(i => {
                return i !== category
            })
            state.categories = x
        },
        UPDATE_ADVERTISING(state, advertising) {
            state.advertising.unshift(advertising)
        },
        UPDATE_COMPANY_LOGO(state, company_logo) {
            state.company_logo = company_logo
        },
        UPDATE_SHOP_IMG(state, shop_page_img) {
            state.shop_page_img = shop_page_img
        },
        UPDATE_SLIDER(state, slider_images) {
            state.slider_field = slider_images
        },
        DELETE_SLIDER_ITEM(state, img) {
            const x = state.slider_field.filter(i => {
                return i !== img
            })
            state.slider_field = x
        }
    },
    actions: {
        GET_COMPANY_SETTINGS(ctx, company_name) {
            axios.get(`${keys.baseURI}/api/store/${company_name}`)
                .then(res => {
                    // console.log(res.data);
                    ctx.commit('ADVERTISING_FIELD', res.data.advertising)
                    ctx.commit('SUPPORT_FIELD', res.data.support_field);
                    ctx.commit('SLIDER_FIELD', res.data.slider_field);
                    ctx.commit('COMPANY_LOGO', res.data.company_logo);
                    ctx.commit('SHOP_PAGE_IMG', res.data.shop_page_img);
                    ctx.commit('ABOUT_INFO', res.data.about_field);
                    ctx.commit('CONTACT_INFO', res.data.contact_text);
                    ctx.commit('CATEGORIES', res.data.category)
                })
                .catch(e => console.log(e))
        },
        ADD_CATEGORY(ctx, category) {
            let url = keys.baseURI;
            let token = localStorage.getItem(keys.API_TOKEN);

            axios.patch(`${url}/api/store`, {category}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((res) => {
                    ctx.commit('UPDATE_CATEGORIES', category)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Category successfully added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    console.log(res.data)
                })
                .catch(e => {
                    console.log(e)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong',
                        // footer: '<a href>Why do I have this issue?</a>'
                    })
                })
        },
        DELETE_CATEGORY(ctx, category_name) {
            let url = keys.baseURI;
            let token = localStorage.getItem(keys.API_TOKEN);
            axios.delete(`${url}/api/store/generic/category/${category_name}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(() => {
                    ctx.commit('DELETE_CATEGORY_ITEM', category_name)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Category successfully deleted',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(e => {
                    console.log(e)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong',
                        // footer: '<a href>Why do I have this issue?</a>'
                    })
                })
        },
        ADD_ADVERTISING(ctx, advertising) {
            let token = localStorage.getItem(keys.API_TOKEN)
            axios.post(`${keys.baseURI}/api/store/advertising`, advertising, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
                .then(res => {
                    ctx.commit('UPDATE_ADVERTISING', advertising)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Advertising successfully added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    console.log(res.data)
                })
                .catch(e => {
                    console.log(e)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong',
                        // footer: '<a href>Why do I have this issue?</a>'
                    })
                })
        },
        DELETE_ADVERTISING(ctx, id) {
            let token = localStorage.getItem(keys.API_TOKEN)
            axios.delete(`${keys.baseURI}/api/store/advertising/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }).then(res => {
                console.log(res.data)
                ctx.commit('DELETE_ADD', id)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Advertising successfully deleted',
                    showConfirmButton: false,
                    timer: 1500
                })
            }).catch(e => {
                console.log(e)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong',
                    // footer: '<a href>Why do I have this issue?</a>'
                })
            })

        },
        COMPANY_LOGO(ctx, company_logo) {
            let url = keys.baseURI;
            let token = localStorage.getItem(keys.API_TOKEN)

            // console.log({company_logo})

            axios.patch(`${url}/api/store`, {company_logo}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => {
                    console.log(res.data)
                    ctx.commit('UPDATE_COMPANY_LOGO', company_logo)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Company logo successfully changed',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(e => {
                    console.log(e)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong',
                        // footer: '<a href>Why do I have this issue?</a>'
                    })
                })
        },
        SHOP_IMG(ctx, shop_page_img) {
            let url = keys.baseURI;
            let token = localStorage.getItem(keys.API_TOKEN)

            // console.log(JSON.stringify({shop_page_img}))

            axios.patch(`${url}/api/store`, {shop_page_img}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((res) => {
                    console.log(res.data)
                    ctx.commit('UPDATE_SHOP_IMG', shop_page_img)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Shop page image successfully changed',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(e => {
                    console.log(e)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong',
                        // footer: '<a href>Why do I have this issue?</a>'
                    })
                })
        },
        SLIDER(ctx, files) {
            let url = keys.baseURI;
            let token = localStorage.getItem(keys.API_TOKEN);

            let slider_images = files
            console.log(files)
            // console.log(JSON.stringify({slider_field}))

            axios.post(`${url}/api/store/slider/img`, {slider_images}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then((res) => {
                    ctx.commit('UPDATE_SLIDER', slider_images)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Data successfully changed',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    if(res.data.error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong',
                            // footer: '<a href>Why do I have this issue?</a>'
                        })
                    }
                    console.log(res.data)
                })
                .catch(e => {
                    console.log(e)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong',
                        // footer: '<a href>Why do I have this issue?</a>'
                    })
                })
        },
        DELETE_SLIDER(ctx, img) {
            let url = keys.baseURI;
            let token = localStorage.getItem(keys.API_TOKEN);
            let slider_image_name = img
            axios.delete(`${url}/api/store/generic/slider_image/${slider_image_name}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(() => {
                    ctx.commit('DELETE_SLIDER_ITEM', slider_image_name)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Image successfully deleted',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(e => {
                    console.log(e)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong',
                        // footer: '<a href>Why do I have this issue?</a>'
                    })
                })
        }
    },
    getters: {}
}