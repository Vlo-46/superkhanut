export default {
    state: {
        tag_filter: 'component'
    },
    mutations: {
        TAG_FILTER(state, component) {
            state.tag_filter = component
        }
    },
    actions: {
        TAG_FILTER_COMPONENTS(ctx, component) {
            ctx.commit('TAG_FILTER', component)
        }
    },
    getters: {}
}