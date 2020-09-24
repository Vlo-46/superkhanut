export default {
    state: {
        inputs: ['input-1', 'input-2', 'input-3'],
        input: []
    },
    mutations: {
        CHECK_INPUTS(state, component) {
            const x = state.inputs.filter(i => {
                return i === component
            })
            state.input = x.toString()
        }
    },
    actions: {
        INPUTS(ctx, component) {
            ctx.commit('CHECK_INPUTS', component)
        }
    },
    getters: {}
}