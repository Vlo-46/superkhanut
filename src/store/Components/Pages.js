export default {
    state: {
        pages: ['home', 'shop', 'home-2', 'shop-2', 'home-3', 'shop-3'],
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