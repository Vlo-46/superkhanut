export default {
    state: {
        banners: 'component'
    },
    mutations: {
        BANNERS(state, component) {
            state.banners = component
        }
    },
    actions: {
        BANNER_COMPONENTS(ctx, component) {
            ctx.commit('BANNERS', component)
        }
    },
    getters: {}
}