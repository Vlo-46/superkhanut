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
    mutations: {},
    actions: {
        ADD_QUANTITY(ctx, id) {
            const add = this.state.example_2_products.products.find(i => {
                return i.id === id
            });
            add.quantity++
        },
        SUB_QUANTITY(ctx, id) {
            const sub = this.state.example_2_products.products.find(i => {
                return i.id === id
            })
            if (sub.quantity === 1) {
                sub.quantity = 1
            } else {
                sub.quantity--
            }
        }
    },
    getters: {
        GET_ALL_PRODUCTS: (state) => {
            return state.products
        },
        GET_BEST_PRODUCTS: (state) => {
            const best_products = state.products.filter(i => {
                return i.best === true
            })
            return best_products
        },
        GET_TOP_PRODUCTS: (state) => {
            const top_products = state.products.filter(i => {
                return i.top === true
            })
            return top_products
        },
        GET_DISCOUNTS_PRODUCTS: (state) => {
            const discount_products = state.products.filter(i => {
                return i.discount !== null
            })
            return discount_products
        },
        GET_SPECIAL_PRODUCTS(state) {
            const special_products = state.products.filter(i => {
                return i.special === true
            })
            return special_products
        }
    }
}