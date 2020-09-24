export default {
    state: {
        section: 'grid'
    },
    mutations: {
        grid(state, grid) {
            state.section = grid
        }
    },
    actions: {
        SWITCHPAGE(ctx, grid) {
            ctx.commit('grid', grid)
        }
    },
    getters: {}
}