export default {
    state: {
        section: ['example-1', 'example-2', 'example-3'],
        page: []
    },
    mutations: {
        example(state, text) {
            const x = state.section.filter(i => {
                return i === text
            });
            state.page = x.toString()
        },
    },
    actions: {
        example(ctx, text) {
            ctx.commit('example', text)
        },
    },
    getters: {}
}