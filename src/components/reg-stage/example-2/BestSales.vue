<template>
    <div class="best-sales container">
        <h4 class="center-align">Best Sales</h4>
        <div class="best_sales_slider">
            <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
            <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
            <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
            <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
            <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
            <div class="best-sale" v-else>
                <span>BEST PRODUCT</span>
            </div>
        </div>
    </div>
</template>

<script>
    import product_1 from '../../../components/reg-stage/products-box/Product-1'
    import product_2 from '../../../components/reg-stage/products-box/Product-2'
    import product_3 from '../../../components/reg-stage/products-box/Product-3'
    import product_4 from '../../../components/reg-stage/products-box/Product-4'
    import product_5 from '../../../components/reg-stage/products-box/Product-5'

    import {tns} from "../../../../node_modules/tiny-slider/src/tiny-slider"
    import {mapState} from "vuex";

    export default {
        components: {
            'product-1': product_1,
            'product-2': product_2,
            'product-3': product_3,
            'product-4': product_4,
            'product-5': product_5,
        },
        computed: {
            ...mapState(['product_boxs'])
        },
        mounted() {
            let slider = tns({
                autoplay: true,
                slideBy: 1,
                autoplayButtonOutput: false,
                mouseDrag: true,
                autoHeight: true,
                "items": 3,
                "controls": false,
                "responsive": {
                    "350": {
                        "items": 3,
                        "controls": true,
                        "edgePadding": 30
                    },
                    "500": {
                        "items": 4
                    }
                },
                "container": ".best_sales_slider",
                // "swipeAngle": false,
                "speed": 1000
            });
            slider.play();
        }
    }
</script>

<style scoped>
    .best-sales {
        margin-top: 80px;
    }

    .best-sale {
        position: relative;
        border: dotted;
        height: 365px;
    }

    .best-sale span {
        position: absolute;
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
</style>