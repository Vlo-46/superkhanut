import Vue from 'vue';
import Vuex from 'vuex';


import companies from './Companies/company';
import products from './Products/products';
import topCompany from './Companies/top-companies';
import navigation from "./navigation";
import blog_item from './Blog/blog-item';
import blog_navigation from './Blog/navigation';
import comments from "./Blog/comments";
import example_1_products from './Example-1/Products';
import example_2_products from './Example-2/Products';
import example_3_products from './Example-3/Products';
import reg_navigation from './reg-navigation';
import favorite_list from './Favorite'
import basket_list from './Basket'


import header_components from './Components/Header-components';
import products_components from './Components/Product-box-components';
import slider_components from './Components/Slider-components';
import banner_components from './Components/Banner-components';
import footer_components from './Components/Footer-components';
import category_components from './Components/Category-components';
import price_filter_components from './Components/Price-filter-components';
import tag_filter_components from './Components/Tag-filter-components';
import contact_information_components from './Components/Contact-information-components';
import contact_send_msg_components from './Components/Contact-send-msg-components';


import dragula_header_components from './Dragula-components/Header'
import home_components from './Dragula-components/Home'
import shop_components from './Dragula-components/Shop'
import shop_rightBox_component from './Dragula-components/Shop-rightBox'
import contact_components from './Dragula-components/Contact'
import dragula_footer_components from './Dragula-components/Footer'


import pages from './Components/Pages';


import inputs from './Elements/inputs';
import product_boxs from './Elements/Product-boxs';
import sliders from './Elements/Sliders';
import banners from './Elements/Banners';
import categories from './Elements/Categories';
import price_filters from './Elements/Price-filters';
import tag_filters from './Elements/Tag-filters';
import contact_information_field from './Elements/Contact-information-fields';
import contact_send_msg_field from './Elements/Contact-send-msg-fields';


import right_panel from './Components/Right-panel';


import registerCompany from './Auth/RegisterCompany';
import registerUser from './Auth/RegisterUser';
import login from './Auth/Login';


import profile from './Profile/Profile';

import company_products from './Company-admin/Products'
import company_admin_settings from './Company-admin/Settings'


import axios from 'axios';
import keys from '../keys';
// import router from "../router";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        header_info: [],
        footer_info: [],
        home_page_info: [],
        shop_page_info: [],
        contact_page_info: [],
        schema: '',
        header_ids: [],
        home_page_ids: [],
        shop_page_filters_ids: [],
        shop_page_rightBox_ids: [],
        contact_page_ids: [],
        footer_ids: [],
        company_name: ''
    },
    mutations: {
        GET_HEADER_INFO(state, header) {
            state.header_info = header
        },
        GET_FOOTER_INFO(state, footer) {
            state.footer_info = footer
        },
        GET_HOME_PAGE_INFO(state, homePage) {
            state.home_page_info = homePage
        },
        GET_SHOP_PAGE_INFO(state, shopPage) {
            state.shop_page_info = shopPage
        },
        GET_CONTACT_PAGE_INFO(state, contactPage) {
            state.contact_page_info = contactPage
        },
        SCHEMA_INFO(state, schema) {
            state.schema = schema
        },
        GET_HEADER_IDS(state, header_ids) {
            state.header_ids = header_ids
        },
        GET_HOME_PAGE_IDS(state, home_page_ids) {
            state.home_page_ids = home_page_ids
        },
        GET_SHOP_PAGE_FILTERS_IDS(state, shop_page_filters_ids) {
            state.shop_page_filters_ids = shop_page_filters_ids
        },
        GET_SHOP_PAGE_RIGHTBOX_IDS(state, shop_page_rightBox_ids) {
            state.shop_page_rightBox_ids = shop_page_rightBox_ids
        },
        GET_CONTACT_PAGE_IDS(state, contact_page_ids) {
            state.contact_page_ids = contact_page_ids
        },
        GET_FOOTER_IDS(state, footer_ids) {
            state.footer_ids = footer_ids
        },
        COMPANY_NAME(state, company_name) {
            state.company_name = company_name
        }
    },
    actions: {
        async CREATE_SHOP() {
            let cover = reg_navigation.state.page;

            let input = inputs.state.input;
            let product_box = product_boxs.state.product_box;
            let banner = banners.state.banner;
            let category = categories.state.category;
            let price_filter = price_filters.state.price_filter;
            let tag_filter = tag_filters.state.tag_filter;


            let button_style = right_panel.state.button;
            let input_style = right_panel.state.input;
            let icon_style = right_panel.state.icon;
            let span_style = right_panel.state.span;

            let product_name_style = right_panel.state.product.product_name;
            let product_price_style = right_panel.state.product.product_price;
            let product_category_style = right_panel.state.product.product_category;

            let a_style = right_panel.state.categoryElements.a;
            let ul_style = right_panel.state.categoryElements.ul;

            let header_components_ids = dragula_header_components.state.ids;
            let home_components_ids = home_components.state.ids;
            let shop_filters_ids = shop_components.state.ids;
            let shop_rightBox_ids = shop_rightBox_component.state.ids;
            let footer_ids = dragula_footer_components.state.ids;

            let user = registerCompany.state.user;
            console.log(user);

            let GLOBAL_OBJECT = {
                schema: cover,
                header: {
                    [input]: input_style,
                    button: button_style,
                    span: span_style,
                    ids: header_components_ids
                },
                footer: {
                    icon_style,
                    a_style,
                    ids: footer_ids
                },
                mains: {
                    home: {
                        [banner]: {
                            product_name_style,
                            product_price_style,
                            product_category_style
                        },
                        [product_box]: {
                            product_name_style,
                            product_price_style,
                            product_category_style,
                            button_style
                        },
                        ids: home_components_ids
                    },
                    shop: {
                        [category]: {
                            a_style,
                            ul_style
                        },
                        [price_filter]: [],
                        [tag_filter]: {},
                        [product_box]: {
                            product_title: {
                                product_name_style,
                            },
                            product_price: {
                                product_price_style,
                            },
                            product_category: {
                                product_category_style
                            }
                        },
                        filters_ids: shop_filters_ids,
                        rightBox_ids: shop_rightBox_ids
                    }
                }
            };
            console.log(JSON.stringify(GLOBAL_OBJECT))

            // let token = localStorage.getItem(keys.API_TOKEN);
            // let url = keys.baseURI;
            //
            //
            // await axios.post(`${url}/api/builder/store`, {GLOBAL_OBJECT}, {
            //     headers: {
            //         'Content-Type': 'application/json;charset=UTF-8',
            //         'Authorization': `Bearer ${token}`,
            //         'Accept': 'application/json'
            //     },
            //     timeout: 0,
            //     responseType: "json",
            //     maxContentLength: 10000000000
            // })
            //     .then(() => {
            //         router.push(`/${user['store'].name}/home`)
            //     })
            //     .catch(e => console.log(e))
        },
        async GET_SHOP_INFO(ctx, company_name) {
            let url = keys.baseURI;
            let token = localStorage.getItem(keys.API_TOKEN);
            if (!company_name) {
                return
            }
            await axios.post(`${url}/api/builder/show`, {company_name}, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
                .then(res => {
                    let header = res.data.header;
                    let footer = res.data.footer;
                    let homePage = res.data.mains.home;
                    let shopPage = res.data.mains.shop;
                    let contactPage = res.data.mains.contact;
                    let schema = res.data.schema;

                    let header_ids = res.data.header.ids;
                    let home_page_ids = res.data.mains.home.ids;
                    let shop_page_filters_ids = res.data.mains.shop.filters_ids;
                    let shop_page_rightBox_ids = res.data.mains.shop.rightBox_ids;
                    let contact_page_ids = res.data.mains.contact.ids;
                    let footer_ids = res.data.footer.ids;

                    ctx.commit('COMPANY_NAME', company_name);

                    ctx.commit('GET_HEADER_INFO', header);
                    ctx.commit('GET_FOOTER_INFO', footer);
                    ctx.commit('GET_HOME_PAGE_INFO', homePage);
                    ctx.commit('GET_SHOP_PAGE_INFO', shopPage);
                    ctx.commit('GET_CONTACT_PAGE_INFO', contactPage);
                    ctx.commit('SCHEMA_INFO', schema);

                    ctx.commit('GET_HEADER_IDS', header_ids);
                    ctx.commit('GET_HOME_PAGE_IDS', home_page_ids);
                    ctx.commit('GET_SHOP_PAGE_FILTERS_IDS', shop_page_filters_ids);
                    ctx.commit('GET_SHOP_PAGE_RIGHTBOX_IDS', shop_page_rightBox_ids);
                    ctx.commit('GET_CONTACT_PAGE_IDS', contact_page_ids);
                    ctx.commit('GET_FOOTER_IDS', footer_ids)


                })
                .catch(e => console.log(e))
        },
    },
    modules: {
        companies,
        products,
        topCompany,
        navigation,
        blog_item,
        blog_navigation,
        favorite_list,
        basket_list,
        comments,
        example_1_products,
        example_2_products,
        example_3_products,
        reg_navigation,
        header_components,
        products_components,
        slider_components,
        banner_components,
        footer_components,
        category_components,
        price_filter_components,
        tag_filter_components,
        contact_information_components,
        inputs,
        product_boxs,
        sliders,
        categories,
        price_filters,
        tag_filters,
        pages,
        right_panel,
        banners,
        contact_information_field,
        contact_send_msg_components,
        contact_send_msg_field,
        registerCompany,
        registerUser,
        login,
        profile,

        home_components,
        shop_components,
        shop_rightBox_component,
        contact_components,
        dragula_footer_components,
        dragula_header_components,

        company_products,
        company_admin_settings
    }
})