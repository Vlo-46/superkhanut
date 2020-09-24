export default {
    state: {
        footers: 'component'
    },
    mutations: {
        FOOTERS(state, component) {
            state.footers = component
        }
    },
    actions: {
        FOOTER_COMPONENTS(ctx, component) {
            ctx.commit('FOOTERS', component)
        }
    },
    getters: {}
}