export default {
    state: {
        headers: 'component',
    },
    mutations: {
        COMPONENTS(state, components) {
            state.headers = components
        },
    },
    actions: {
        HEADER_COMPONENTS(ctx, components) {
            ctx.commit('COMPONENTS', components)
        },
    },
    getters: {}
}