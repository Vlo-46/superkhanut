export default {
    state: {
        products: [
            {
                id: 1,
                img: require('@/assets/no-img.jpg'),
                category: 'category',
                product_name: 'Product name',
                price: '1000',
                discount_price: 'Discount Price',
                tag: 'business',
                top: false,
                best: false,
            },
            {
                id: 2,
                img: require('@/assets/no-img.jpg'),
                category: 'category',
                product_name: 'Product name',
                price: '500',
                discount_price: 'Discount Price',
                tag: 'business',
                top: false,
                best: false,
            },
            {
                id: 3,
                img: require('@/assets/no-img.jpg'),
                category: 'category',
                product_name: 'Product name',
                price: '450',
                discount_price: 'Discount Price',
                tag: 'creative',
                top: false,
                best: false,
            },
            {
                id: 4,
                img: require('@/assets/no-img.jpg'),
                category: 'category',
                product_name: 'Product name',
                price: '14000',
                discount_price: 'Discount Price',
                tag: 'clean',
                top: false,
                best: false,
            },
            {
                id: 5,
                img: require('@/assets/no-img.jpg'),
                category: 'category',
                product_name: 'Product name',
                price: '1750',
                discount_price: 'Discount Price',
                tag: 'portfolio',
                top: false,
                best: false,
            },
            {
                id: 6,
                img: require('@/assets/no-img.jpg'),
                category: 'category',
                product_name: 'Product name',
                price: '3500',
                discount_price: 'Discount Price',
                tag: 'agency',
                top: false,
                best: false,
            },
            {
                id: 7,
                img: require('@/assets/no-img.jpg'),
                category: 'category',
                product_name: 'Product name',
                price: '5800',
                discount_price: 'Discount Price',
                tag: 'blog',
                top: false,
                best: false,
            },
            {
                id: 8,
                img: require('@/assets/no-img.jpg'),
                category: 'category',
                product_name: 'Product name',
                price: '9600',
                discount_price: 'Discount Price',
                tag: 'marketing',
                top: false,
                best: false,
            },
        ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        // FILTER_BY_PRICE: state => (prices, tag) => {
        //     const filtered = state.products.filter(i => {
        //         if (Number(i.price) >= prices.price && Number(i.price) <= prices.max || i.tag === tag) {
        //             return true;
        //         }
        //         return false;
        //     });
        //     return filtered;
        // },
    }
}