export default {
    state: {
        ids: ['footer-logo-component', 'footer-contact-component', 'footer-info-component']
    },
    mutations: {
        FOOTER_IDS(state, id) {
            state.ids = id
        }
    },
    actions: {
        GET_FOOTER_COMPONENTS_IDS(ctx, id) {
            ctx.commit('FOOTER_IDS', id)
        },
    },
    getters: {
        FETCH_FOOTER_COMPONENT_IDS(state) {
            return state.ids
        }
    }
}