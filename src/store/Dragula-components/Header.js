export default {
    state: {
        ids: ['header-logo', 'header-input', 'header-support-box']
    },
    mutations: {
        HEADER_IDS(state, id) {
            state.ids = id
        }
    },
    actions: {
        GET_HEADER_COMPONENTS_IDS(ctx, id) {
            ctx.commit('HEADER_IDS', id)
        },
    },
    getters: {
        FETCH_HEADER_COMPONENT_IDS(state) {
            return state.ids
        }
    }
}