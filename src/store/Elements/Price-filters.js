export default {
    state: {
        price_filters: ['price-filter-1'],
        price_filter: []
    },
    mutations: {
        CHANGE_PRICE_FILTER(state, priceFilter) {
            const x = state.price_filters.filter(i => {
                return i === priceFilter
            });
            state.price_filter = x.toString()
        }
    },
    actions: {
        $PRICE_FILTER(ctx, priceFilter) {
            ctx.commit('CHANGE_PRICE_FILTER', priceFilter)
        }
    },
    getters: {}
}