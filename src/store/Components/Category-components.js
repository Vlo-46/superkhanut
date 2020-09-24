export default {
    state: {
        category: 'component'
    },
    mutations: {
        CATEGORY(state, component) {
            state.category = component
        }
    },
    actions: {
        CATEGORY_COMPONENTS(ctx, component) {
            ctx.commit('CATEGORY', component)
        }
    },
    getters: {}
}