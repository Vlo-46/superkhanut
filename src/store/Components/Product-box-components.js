export default {
    state: {
        products: 'component'
    },
    mutations: {
        PRODUCTS(state, component) {
            state.products = component
        }
    },
    actions: {
        PRODUCT_COMPONENTS(ctx, component) {
            ctx.commit('PRODUCTS', component)
        }
    },
    getters: {}
}