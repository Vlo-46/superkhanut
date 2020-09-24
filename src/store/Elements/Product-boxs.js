export default {
    state: {
        product_boxs: ['product-box-1', 'product-box-2', 'product-box-3', 'product-box-4', 'product-box-5'],
        product_box: []
    },
    mutations: {
        PRODUCTBOX(state, component) {
            const x = state.product_boxs.filter(i => {
                return i === component
            })
            state.product_box = x.toString()
        }
    },
    actions: {
        PRODUCT_BOXS(ctx, component) {
            ctx.commit('PRODUCTBOX', component)
        }
    },
    getters: {}
}