export default {
    state: {
        contact_informations: ['contact-information-1'],
        contact_information: []
    },
    mutations: {
        CHANGE_CONTACT_INFORMATION(state, banner) {
            const x = state.contact_informations.filter(i => {
                return i === banner
            });
            state.contact_information = x.toString()
        }
    },
    actions: {
        CONTACT_INFORMATION(ctx, contact) {
            ctx.commit('CHANGE_CONTACT_INFORMATION', contact)
        }
    },
    getters: {}
}