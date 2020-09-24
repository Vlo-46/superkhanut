export default {
    state: {
        section: 'list'
    },
    mutations: {
        list(state, list) {
            state.section = list
        }
    },
    actions: {
        PAGESWITCH(ctx, list) {
            ctx.commit('list', list)
        }
    },
    getters: {}
}