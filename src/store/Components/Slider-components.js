export default {
    state: {
        sliders: 'component'
    },
    mutations: {
        SLIDERS(state, component) {
            state.sliders = component
        }
    },
    actions: {
        SLIDER_COMPONENTS(ctx, component) {
            ctx.commit('SLIDERS', component)
        }
    },
    getters: {}
}