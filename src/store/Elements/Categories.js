export default {
    state: {
        categories: ['category-1', 'category-2'],
        category: []
    },
    mutations: {
        CHANGE_CATEGORY_FILTER(state, category) {
            const x = state.categories.filter(i => {
                return i === category
            });
            state.category = x.toString()
        }
    },
    actions: {
        CATEGORY_FILTER(ctx, category) {
            ctx.commit('CHANGE_CATEGORY_FILTER', category)
        }
    },
    getters: {}
}