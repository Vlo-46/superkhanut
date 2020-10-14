<template>
    <div class="container" id="product-component">
        <h4>New products</h4>
        <div class="row" id="products-field">
            <div class="col s12 m6 l3">
                <product_1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product_2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product_3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product_4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product_5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product_6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product_7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product_8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product_9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Product item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product_1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product_2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product_3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product_4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product_5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product_6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product_7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product_8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product_9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Product item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product_1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product_2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product_3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product_4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product_5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product_6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product_7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product_8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product_9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Product item</span>
                </div>
            </div>
            <div class="col s12 m6 l3">
                <product_1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product_2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product_3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product_4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product_5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product_6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product_7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product_8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product_9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Product item</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import product_1 from '../products-box/Product-1'
    import product_2 from '../products-box/Product-2'
    import product_3 from '../products-box/Product-3'
    import product_4 from '../products-box/Product-4'
    import product_5 from '../products-box/Product-5'
    import product_6 from '../products-box/Product-6'
    import product_7 from '../products-box/Product-7'
    import product_8 from '../products-box/Product-8'
    import product_9 from '../products-box/Product-9'

    import {mapState} from 'vuex'


    export default {
        components: {
            product_1,
            product_2,
            product_3,
            product_4,
            product_5,
            product_6,
            product_7,
            product_8,
            product_9,
        },
        computed: {
            ...mapState(['product_boxs'])
        },

    }
</script>

<style scoped>
    h4 {
        color: #333c4a;
        font-size: 28px;
        font-weight: 800;
    }

    .product-item {
        border: dotted;
        height: 370px;
        max-height: 370px;
        margin: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    #products-field .s12 {
        margin-bottom: 15px;
    }
</style>