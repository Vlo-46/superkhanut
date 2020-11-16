<template>
    <div class="container" id="product-component">
        <h5 class="center-align">Products</h5>
        <div class="border-bottom"></div>
        <VueSlickCarousel v-bind="settings">
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
        </VueSlickCarousel>
        <div style="display: flex; justify-content: center">
            <a href="#!" class="btn waves-effect waves-green" @click="OPEN_RIGHT_PANEL('button')"  :style="right_panel.button">View more</a>
        </div>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    import product_1 from '../products-box/Product-1'
    import product_2 from '../products-box/Product-2'
    import product_3 from '../products-box/Product-3'
    import product_4 from '../products-box/Product-4'
    import product_5 from '../products-box/Product-5'
    import product_6 from '../products-box/Product-6'
    import product_7 from '../products-box/Product-7'
    import product_8 from '../products-box/Product-8'
    import product_9 from '../products-box/Product-9'

    import {mapActions, mapState} from 'vuex'


    export default {
        data() {
            return {
                settings: {
                    'arrows': true,
                    "infinite": true,
                    "slidesToShow": 3,
                    // "speed": 500,
                    "rows": 3,
                    "slidesPerRow": 1,
                    "autoplay": true,
                    "speed": 4000,
                    "autoplaySpeed": 4000,
                    "variableWidth": true
                }
            }
        },
        components: {
            VueSlickCarousel,
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
            ...mapState(['product_boxs', 'right_panel'])
        },
        methods: {
            ...mapActions(['OPEN_RIGHT_PANEL'])
        },
    }
</script>

<style scoped>
    .product-item {
        position: relative;
        border: dotted;
        height: 365px;
        margin: 10px;
    }

    .product-item span {
        position: absolute;
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    #product-component {
        margin-top: 100px;
        cursor: grab;
    }

    .border-bottom {
        width: 100px;
        height: 2px;
        background-color: #6ba229;
        margin: 10px auto;
        border-radius: 10px;
    }

    .btn {
        background-color: #6ba229;
        margin-top: 20px;
    }
</style>