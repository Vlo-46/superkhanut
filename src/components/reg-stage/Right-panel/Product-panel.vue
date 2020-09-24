<template>
    <div class="right-box">
        <div class="right-box-element">
            <h5>Color of product names</h5>
            <chrome-picker name="colorPicker"
                           :value="right_panel.product.product_name.color"
                           @change="PRODUCT_NAME_COLOR(color)"
                           :disableFields=true @input="updateProductNameColor"/>
        </div>
        <div class="right-box-element">
            <h5>Color of product prices</h5>
            <chrome-picker name="colorPicker"
                           :value="right_panel.product.product_price.color"
                           @change="PRODUCT_PRICE_COLOR(color)"
                           :disableFields=true @input="updateProductPriceColor"/>
        </div>
        <div class="right-box-element">
            <h6>Color of product categories</h6>
            <chrome-picker name="colorPicker"
                           :value="right_panel.product.product_category.color"
                           @change="PRODUCT_CATEGORY_COLOR(color)"
                           :disableFields=true @input="updateProductCategoryColor"/>
        </div>
        <div class="close-right-panel" @click="CLOSE_RIGHT_PANEL(null)"><span>&#10005;</span></div>
    </div>
</template>

<script>
    import {Chrome} from "vue-color";
    import {mapActions, mapState} from 'vuex'

    export default {
        data() {
            return {
                color: ''
            }
        },
        methods: {
            ...mapActions(['CLOSE_RIGHT_PANEL', 'PRODUCT_NAME_COLOR', 'PRODUCT_PRICE_COLOR', 'PRODUCT_CATEGORY_COLOR']),
            updateProductNameColor(color) {
                const hex = color.hex
                this.PRODUCT_NAME_COLOR(hex)
            },
            updateProductPriceColor(color) {
                const hex = color.hex
                this.PRODUCT_PRICE_COLOR(hex)
            },
            updateProductCategoryColor(color) {
                const hex = color.hex
                this.PRODUCT_CATEGORY_COLOR(hex)
            },
        },
        computed: {
            ...mapState(['right_panel'])
        },
        components: {
            'chrome-picker': Chrome,
        },
    }
</script>

<style scoped>
    .right-box {
        position: fixed;
        bottom: 0;
        right: 15px;
        height: 100%;
        margin: auto;
        top: 30px;
        overflow-y: scroll;
    }

    .right-box-element {
        margin-bottom: 20px;
    }

    .close-right-panel {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px;
        cursor: pointer;
    }

    .close-right-panel span {
        font-weight: bold;
        font-size: 20px;
    }
</style>