import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Basket from '../views/Basket'
import Favorite from "../views/Favorite";
import Registration from '../views/Registration';
import Signin from '../views/Signin'
import Category from "../views/Category";
import Blog from '../views/Blog'
import Blog_detail from '../views/Blog-detail'
import Contact from "../views/Contact";
import Profile from '../views/Profile'
import Settings from '../components/profile/Settings'
import MyOrders from '../components/profile/MyOrders'
import Confirmation from '../components/auth/Confirmation-company'
import registration_stage from '../views/Register-stage'
import reg_stage_example_1_home from '../views/reg-stage/example-1/Home'
import reg_stage_example_1_shop from '../views/reg-stage/example-1/Shop'

import crated_shop_home from '../views/Created-shop/Home'
import created_shop_shop from '../views/Created-shop/Shop'
import created_shop_contact from '../views/Created-shop/Contact'
import created_shop_about from '../views/Created-shop/About'
import Detail from '../views/Created-shop/Detail'
import company_admin from '../views/Created-shop/admin/Admin'

import company_admin_products from '../components/company-admin/Products'
import company_add_product from '../components/company-admin/Add-product'
import company_settings from '../components/company-admin/Settings'
import company_admin_orders from '../components/company-admin/Orders'


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/basket',
        component: Basket
    },
    {
        path: '/favorite',
        component: Favorite
    },
    {
        path: "/registration",
        component: Registration
    },
    {
        path: '/signin',
        component: Signin
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: "/blog",
        component: Blog,
    },
    {
        path: "/blog/:id",
        component: Blog_detail
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/profile',
        component: Profile,
        children: [
            {
                path: 'settings',
                component: Settings
            },
            {
                path: 'orders',
                component: MyOrders
            }
        ]
    },
    {
        path: '/confirmations-account',
        component: Confirmation
    },
    {
        path: '/registration-stage',
        component: registration_stage
    },
    {
        path: '/reg-stage-home',
        component: reg_stage_example_1_home
    },
    {
        path: '/reg-stage-shop',
        component: reg_stage_example_1_shop
    },
    {
        path: '/*/home',
        component: crated_shop_home,
    },
    {
        path: '/*/shop',
        component: created_shop_shop,
    },
    {
        path: '/*/contact',
        component: created_shop_contact,
    },
    {
        path: '/*/about',
        component: created_shop_about
    },
    {
        path: '/*/detail/:id',
        component: Detail
    },

    {
        path: '/*/admin',
        component: company_admin,
    },
    {
        path: '/*/admin/products',
        component: company_admin_products
    },
    {
        path: '/*/admin/products/add-product',
        component: company_add_product
    },
    {
        path: '/*/admin/settings',
        component: company_settings
    },
    {
        path: '/*/admin/orders',
        component: company_admin_orders
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

// router.beforeEach((to, from, next) => {
//     let subdir = window.location.host.split('.')[0];
//     let domain = 'localhost:8080';
//     let pageToLoad = '/created-shop';
//
//     if (subdir !== domain && to.name !== pageToLoad) {
//         console.log(true);
//         next({name: pageToLoad, params: {}})
//     } else {
//         console.log(false);
//         // next()
//         window.location.href = 'shop.localhost:8080'
//     }
// });

export default router
