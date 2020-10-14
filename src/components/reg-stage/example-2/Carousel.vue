<template>
    <div class="container">
        <div class="carousel-items">
            <div>
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Product item</span>
                </div>
            </div>
            <div>
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Product item</span>
                </div>
            </div>
            <div>
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Product item</span>
                </div>
            </div>
            <div>
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Product item</span>
                </div>
            </div>
            <div>
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Product item</span>
                </div>
            </div>
            <div>
                <product-1 v-if="product_boxs.product_box === 'product-box-1'"/>
                <product-2 v-else-if="product_boxs.product_box === 'product-box-2'"/>
                <product-3 v-else-if="product_boxs.product_box === 'product-box-3'"/>
                <product-4 v-else-if="product_boxs.product_box === 'product-box-4'"/>
                <product-5 v-else-if="product_boxs.product_box === 'product-box-5'"/>
                <product-6 v-else-if="product_boxs.product_box === 'product-box-6'"/>
                <product-7 v-else-if="product_boxs.product_box === 'product-box-7'"/>
                <product-8 v-else-if="product_boxs.product_box === 'product-box-8'"/>
                <product-9 v-else-if="product_boxs.product_box === 'product-box-9'"/>
                <div class="product-item" v-else>
                    <span>Product item</span>
                </div>
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
    import product_6 from '../../../components/reg-stage/products-box/Product-6'
    import product_7 from '../../../components/reg-stage/products-box/Product-7'
    import product_8 from '../../../components/reg-stage/products-box/Product-8'
    import product_9 from '../../../components/reg-stage/products-box/Product-9'

    import {tns} from "../../../../node_modules/tiny-slider/src/tiny-slider"
    import {mapState} from "vuex";

    export default {
        components: {
            'product-1': product_1,
            'product-2': product_2,
            'product-3': product_3,
            'product-4': product_4,
            'product-5': product_5,
            'product-6': product_6,
            'product-7': product_7,
            'product-8': product_8,
            'product-9': product_9,
        },
        computed: {
            ...mapState(['product_boxs']),
        },
        mounted() {
            let slider = tns({
                autoplay: true,
                slideBy: 1,
                autoplayButtonOutput: false,
                mouseDrag: true,
                autoHeight: true,
                rewind: true,
                "items": 4,
                "controls": false,
                "responsive": {
                    "350": {
                        "items": 1,
                        "controls": true,
                        "edgePadding": 30
                    },
                    "500": {
                        "items": 4
                    }
                },
                "container": ".carousel-items",
                // "swipeAngle": false,
                "speed": 1000
            });
            slider.play();
        }
    }
</script>

<style scoped>
    .container {
        margin: 80px 0;
    }
</style>