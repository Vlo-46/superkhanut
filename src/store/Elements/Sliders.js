export default {
    state: {
        sliders: ['slider-1', 'slider-2'],
        slider: []
    },
    mutations: {
        SLIDER(state, component) {
            const x = state.sliders.filter(i => {
                return i === component
            })
            state.slider = x.toString()
        }
    },
    actions: {
        CHANGE_SLIDER(ctx, component) {
            ctx.commit('SLIDER', component)
        }
    },
    getters: {}
}