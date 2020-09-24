export default {
    state: {
        contact_send_msgs: ['contact-send-msg-1'],
        contact_send_msg: []
    },
    mutations: {
        SEND_MESSAGE(state, contact) {
            const x = state.contact_send_msgs.filter(i => {
                return i === contact
            });
            state.contact_send_msg = x.toString()
        }
    },
    actions: {
        CONTACT_SEND_MESSAGE(ctx, contact) {
            ctx.commit('SEND_MESSAGE', contact)
        }
    },
    getters: {}
}