export default {
    state: {
        element: null,
        button: {
            'background-color': '#fff',
            'color': '#6ba229',
            'border': '1px solid #6ba229',
            'cursor': 'pointer',
            'border-radius': '3px',
            type: 'button'
        },
        icon: {
            color: '#6ba229',
            type: 'icon'
        },
        span: {
            fontSize: 'small',
            color: '#888',
            type: 'span'
        },
        input: {
            border: 'none',
            padding: '5px',
            label: 'Search',
            textAlign: 'left',
            color: '#000',
            type: 'input',
        },
        product: {
            product_name: {
                fontSize: '16px',
                fontWeight: '600',
                lineHeight: '20px',
                textTransform: 'uppercase',
                color: '#333c4a',
            },
            product_price: {
                color: '#6ba229',
                fontSize: '18px',
                lineHeight: '20px',
                fontWeight: '400'
            },
            product_category: {
                color: '#a9a9a9',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '20px',
                textTransform: 'capitalize',
            },
            type: 'product'
        },
        categoryElements: {
            a: {
                fontSize: '15px',
                lineHeight: '24px',
                position: 'relative',
                display: 'block',
                padding: '5px 0',
                textTransform: 'capitalize',
                color: '#333',
            },
            ul: {
                background: '#f8f8f8',
                marginBottom: '30px',
            },
            type: 'categoryElements'
        }
    },
    mutations: {
        OPEN(state, el) {
            state.element = state[el]
        },
        CLOSE(state, el) {
            state.element = el
        },

        // buttons
        BUTTON_COLOR(state, color) {
            state.button.color = color;
            state.button.border = '1px solid' + color
        },
        BUTTON_BG_COLOR(state, color) {
            state.button["background-color"] = color
        },
        BUTTON_BORDER_RADIUS(state, num) {
            state.button["border-radius"] = num
        },
        // end buttons

        // -------

        // icons
        I_COLOR(state, color) {
            state.icon.color = color
        },
        //end icons

        // ----------------/

        // spans

        SP_COLOR(state, color) {
            state.span.color = color
        },

        // end spans

        // ----------------

        // inputs

        INP_COLOR(state, color) {
            state.input.color = color
        },
        INP_ALIGN(state, align) {
            if (state.input.textAlign === 'left') {
                state.input.textAlign = align
            } else {
                state.input.textAlign = 'left'
            }
        },
        // INP_PLACEHOLDER(state, text) {
        //     state.input.placeholder = text
        // },

        // end inputs

        //products

        PRODUCT_TITLE_COLOR(state, color) {
            state.product.product_name.color = color
        },

        PRICE_COLOR(state, color) {
            state.product.product_price.color = color
        },
        CATEGORY_COLOR(state, color) {
            state.product.product_category.color = color
        },

        //end products

        //category

        A_COLOR(state, color) {
            state.categoryElements.a.color = color
        },

        UL_COLOR(state, color) {
            state.categoryElements.ul.background = color
        }

        //category end
    },
    actions: {
        OPEN_RIGHT_PANEL(ctx, el) {
            ctx.commit('OPEN', el)
        },
        CLOSE_RIGHT_PANEL(ctx, el) {
            ctx.commit('CLOSE', el)
        },

        // buttons
        BTN_COLOR(ctx, color) {
            ctx.commit('BUTTON_COLOR', color)
        },
        BTN_BG_COLOR(ctx, color) {
            ctx.commit('BUTTON_BG_COLOR', color)
        },
        BTN_BORDER_RADIUS(ctx, num) {
            ctx.commit('BUTTON_BORDER_RADIUS', num)
        },

        //end buttons

        // ------------

        // icons

        ICON_COLOR(ctx, color) {
            ctx.commit('I_COLOR', color)
        },

        //end icons

        // -----------------

        // spans

        SPAN_COLOR(ctx, color) {
            ctx.commit('SP_COLOR', color)
        },

        // end spans

        // ----------------

        // inputs

        INPUT_COLOR(ctx, color) {
            ctx.commit('INP_COLOR', color)
        },
        INPUT_ALIGN(ctx, align) {
            ctx.commit('INP_ALIGN', align)
        },
        // INPUT_PLACEHOLDER(ctx, text) {
        //     ctx.commit('INP_PLACEHOLDER', text)
        // },

        // end inputs

        //product

        PRODUCT_NAME_COLOR(ctx, color) {
            ctx.commit('PRODUCT_TITLE_COLOR', color)
        },
        PRODUCT_PRICE_COLOR(ctx, color) {
            ctx.commit('PRICE_COLOR', color)
        },
        PRODUCT_CATEGORY_COLOR(ctx, color) {
            ctx.commit('CATEGORY_COLOR', color)
        },

        //product end

        //category

        CATEGORY_A_COLOR(ctx, color) {
            ctx.commit('A_COLOR', color)
        },

        CATEGORY_UL_COLOR(ctx, color) {
            ctx.commit('UL_COLOR', color)
        }

        //category end

    },
    getters: {}
}