export default {
    state: {
        ids: ['filter-by-price-component', 'filter-by-tag-component', 'category-component']
    },
    mutations: {
        SHOP_IDS(state, id) {
            state.ids = id
        }
    },
    actions: {
        GET_SHOP_COMPONENTS_IDS(ctx, id) {
            ctx.commit('SHOP_IDS', id)
        },
    },
    getters: {
        FETCH_SHOP_COMPONENT_IDS(state) {
            return state.ids
        }
    }
}