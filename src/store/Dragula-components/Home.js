export default {
    state: {
        ids: ['slider-component', 'banner-component', 'product-component']
    },
    mutations: {
        HOME_IDS(state, id) {
            state.ids = id
        }
    },
    actions: {
        GET_HOME_COMPONENTS_IDS(ctx, id) {
            ctx.commit('HOME_IDS', id)
        },
    },
    getters: {
        FETCH_HOME_COMPONENT_IDS(state) {
            return state.ids
        }
    }
}