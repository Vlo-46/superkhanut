// import axios from 'axios'

export default {
    state: {
        product_item: [
            {
                id: 1,
                company_name: 'Amazon',
                title: 'Beef',
                price: '850',
                description: 'lorem aaalorem lorem',
                tag: 'beef'
            },
            {
                id: 2,
                company_name: 'Google',
                title: 'Eggs',
                price: '1000',
                description: 'lorem aaalorem lorem',
                tag: 'egg'
            },
            {
                id: 3,
                company_name: 'AliExpress',
                title: 'Milk',
                price: '400',
                description: 'lorem lorem lorem',
                tag: 'milk'
            },
            {
                id: 4,
                company_name: 'Facebook',
                title: 'Table',
                price: '5000',
                description: 'lorem lorem lorem',
                tag: 'table'
            },
            {
                id: 5,
                company_name: 'Instagram',
                title: 'Chair',
                price: '3500',
                description: 'lorem lorem lorem',
                tag: 'chair'
            },
            {
                id: 6,
                company_name: 'Fifa',
                title: 'Ball',
                price: '500',
                description: 'lorem lorem loremaaa',
                tag: 'ball'
            },
            {
                id: 7,
                company_name: 'Mozila',
                title: 'Bag',
                price: '8500',
                description: 'lorem lorem loremaaa',
                tag: 'bag'
            },
            {
                id: 8,
                company_name: 'Yandex',
                title: 'Coffee',
                price: '150',
                description: 'lorem lorem lorem',
                tag: 'coffe'
            },
            {
                id: 9,
                company_name: 'ArmCoding',
                title: 'Computer',
                price: '36000',
                description: 'lorem lorem lorem',
                tag: 'computer'
            },
        ],
    },
    mutations: {
        UPDATE_FILTER_BY_PRICE(state, filtred_products) {
            state.product_item = filtred_products
        },
    },
    actions: {
        FILTER_BY_PRICE(ctx, price) {
            let min = Number(price.min);
            let max = Number(price.max);

            let products = this.state.products.product_item;

            let filtred_products = [];

            products.forEach(i => {
                if (Number(i.price) >= min && Number(i.price) <= max) {
                    filtred_products.push(i)
                }
            });

            // let min_price = Math.max.apply(null, filtred_products);
            // let max_price = Math.min.apply(null, filtred_products);

            ctx.commit('UPDATE_FILTER_BY_PRICE', filtred_products)
        },
        ADD_TO_CART(ctx, {product}) {
            if (localStorage.getItem(product.id)) {
                alert('The product is already in the cart')
            } else {
                localStorage.setItem(product.id, JSON.stringify(product))
            }
        },
    },
    getters: {
    }
}