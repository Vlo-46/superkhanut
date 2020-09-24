export default {
    state: {
        price_filter: 'component'
    },
    mutations: {
        PRICE_FILTER(state, component) {
            state.price_filter = component
        }
    },
    actions: {
        PRICE_FILTER_COMPONENTS(ctx, component) {
            ctx.commit('PRICE_FILTER', component)
        }
    },
    getters: {}
}