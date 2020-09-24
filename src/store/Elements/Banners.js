export default {
    state: {
        banners: ['banner-1', 'banner-2'],
        banner: []
    },
    mutations: {
        CHANGE_BANNER(state, banner) {
            const x = state.banners.filter(i => {
                return i === banner
            });
            state.banner = x.toString()
        }
    },
    actions: {
        BANNER(ctx, banner) {
            ctx.commit('CHANGE_BANNER', banner)
        }
    },
    getters: {}
}