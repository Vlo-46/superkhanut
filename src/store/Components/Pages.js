export default {
    state: {
        pages: ['home', 'shop', 'contact'],
        page: 'home'
    },
    mutations: {
        PAGE(state, page) {
            const x = state.pages.filter(i => {
                return i === page
            });
            state.page = x.toString()
        },

    },
    actions: {
        NEXT_PAGE(ctx, page) {
            ctx.commit('PAGE', page)
        },

    },
    getters: {}
}