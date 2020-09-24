export default {
    state: {
        products: [
            {
                id: 1,
                product_name: 'Product name',
                price: '1000',
                discount: null,
                quantity: 1,
                img: require('@/assets/about.jpg'),
                top: false,
                best: true,
                special: false,
                tag: 'business',
            },
            {
                id: 2,
                product_name: 'Product name',
                price: '1500',
                discount: null,
                quantity: 1,
                img: require('@/assets/about.jpg'),
                top: false,
                best: true,
                special: false,
                tag: 'business',
            },
            {
                id: 3,
                product_name: 'Product name',
                price: '2550',
                discount: '2700',
                quantity: 1,
                img: require('@/assets/about.jpg'),
                top: false,
                best: true,
                special: false,
                tag: 'creative',
            },
            {
                id: 4,
                product_name: 'Product name',
                price: '3400',
                discount: null,
                quantity: 1,
                img: require('@/assets/about.jpg'),
                top: true,
                best: false,
                special: false,
                tag: 'clean',
            },
            {
                id: 5,
                product_name: 'Product name',
                price: '6560',
                discount: null,
                quantity: 1,
                img: require('@/assets/about.jpg'),
                top: true,
                best: false,
                special: true,
                tag: 'portfolio',
            },
            {
                id: 6,
                product_name: 'Product name',
                price: '780',
                discount: '1000',
                quantity: 1,
                img: require('@/assets/about.jpg'),
                top: false,
                best: false,
                special: true,
                tag: 'agency',
            },
        ],
    },
    mutations: {
        BEST_PRODUCTS(state, best_products) {
            state.products = best_products
        }
    },
    actions: {
        GET_BEST_PRODUCTS(ctx) {
            const best_products = this.state.example_3_products.products.filter(i => {
                return i.best === true
            });
            ctx.commit('BEST_PRODUCTS', best_products)
        }
    },
    getters: {}
}