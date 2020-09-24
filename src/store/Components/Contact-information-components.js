export default {
    state: {
        contact_informations: 'component'
    },
    mutations: {
        INFORMATIONS(state, component) {
            state.contact_informations = component
        }
    },
    actions: {
        CONTACT_INFORMATION_COMPONENTS(ctx, component) {
            ctx.commit('INFORMATIONS', component)

        }
    },
    getters: {}
}