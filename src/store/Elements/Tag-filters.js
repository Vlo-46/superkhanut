export default {
    state: {
        tag_filters: ['tag-filter-1', 'tag-filter-2', 'tag-filter-3'],
        tag_filter: []
    },
    mutations: {
        CHANGE_TAG_FILTER(state, tag) {
            const x = state.tag_filters.filter(i => {
                return i === tag
            });
            state.tag_filter = x.toString()
        }
    },
    actions: {
        $TAG_FILTER(ctx, tag) {
            ctx.commit('CHANGE_TAG_FILTER', tag)
        }
    },
    getters: {}
}