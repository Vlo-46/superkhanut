export default {
    state: {
        contact_send_msg: 'component'
    },
    mutations: {
        SEND_MSG(state, component) {
            state.contact_send_msg = component
        }
    },
    actions: {
        CONTACT_SEND_MSG_COMPONENTS(ctx, component) {
            ctx.commit('SEND_MSG', component)
        }
    },
    getters: {}
}