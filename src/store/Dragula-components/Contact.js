export default {
    state: {
        ids: ['contact-send-msg-component', 'contact-information-component']
    },
    mutations: {
        CONTACT_IDS(state, id) {
            state.ids = id
        }
    },
    actions: {
        GET_CONTACT_COMPONENTS_IDS(ctx, id) {
            ctx.commit('CONTACT_IDS', id)
        },
    },
    getters: {
        FETCH_CONTACT_COMPONENT_IDS(state) {
            return state.ids
        }
    }
}