export default {
    state: {
        ids: ['shop_img_component', 'shop_products_component']
    },
    mutations: {
        SHOP_RIGHT_BOX_IDS(state, id) {
            state.ids = id
        }
    },
    actions: {
        GET_SHOP_RIGHT_BOX_COMPONENTS_IDS(ctx, id) {
            ctx.commit('SHOP_RIGHT_BOX_IDS', id)
        },
    },
    getters: {
        FETCH_SHOP_RIGHT_COMPONENT_IDS(state) {
            return state.ids
        }
    }
}