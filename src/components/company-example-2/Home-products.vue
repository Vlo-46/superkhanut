<template>
    <div class="wrapper container">
        <div class="row">
            <div class="col s4">
                <div class="special-offer">
                    <h4>Special offer</h4>
                    <div class="special-offer-slide">
                        <special-product v-for="s in GET_SPECIAL_PRODUCTS" :key="s.id"
                                         :product_name="s.product_name"
                                         :price="s.price"
                                         :discount="s.discount"
                                         :quantity="s.quantity"
                                         :img="s.img"
                                         :id="s.id"
                        />
                    </div>
                </div>
            </div>
            <div class="col s8">
                <div class="row">
                    <div class="col s12">
                        <ul class="tabs">
                            <li class="tab col s3"><a href="#new">NEW PRODUCTS</a></li>
                            <li class="tab col s3"><a href="#discounts">DISCOUNTED PRODUCTS</a></li>
                            <li class="tab col s3"><a href="#tops">TOP PRODUCTS</a></li>
                        </ul>
                    </div>
                    <div id="new" class="col s12">
                        <div class="row">
                            <div class="col s4" v-for="product in GET_ALL_PRODUCTS" :key="product.id">
                                <product-item :product_name="product.product_name"
                                              :price="product.price"
                                              :discount="product.discount"
                                              :quantity="product.quantity"
                                              :img="product.img"
                                              :id="product.id"
                                />
                            </div>
                        </div>
                    </div>
                    <div id="discounts" class="col s12">
                        <div class="row">
                            <div class="col s4" v-for="product in GET_DISCOUNTS_PRODUCTS" :key="product.id">
                                <product-item :product_name="product.product_name"
                                              :price="product.price"
                                              :discount="product.discount"
                                              :quantity="product.quantity"
                                              :img="product.img"
                                              :id="product.id"
                                />
                            </div>
                        </div>
                    </div>
                    <div id="tops" class="col s12">
                        <div class="row">
                            <div class="col s4" v-for="product in GET_TOP_PRODUCTS" :key="product.id">
                                <product-item :product_name="product.product_name"
                                              :price="product.price"
                                              :discount="product.discount"
                                              :quantity="product.quantity"
                                              :img="product.img"
                                              :id="product.id"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import product_item from './Product-item'
    import special from './Special'
    import {mapGetters} from 'vuex'
    import {tns} from "../../../node_modules/tiny-slider/src/tiny-slider"

    export default {
        data() {
            return {
                products: [
                    {
                        id: 1,
                        product_name: 'Product name',
                        price: '1000',
                        discount: '1200',
                        quantity: 1,
                        img: require('@/assets/about.jpg')
                    },
                    {
                        id: 2,
                        product_name: 'Product name',
                        price: '1500',
                        discount: '1600',
                        quantity: 1,
                        img: require('@/assets/about.jpg')
                    },
                    {
                        id: 3,
                        product_name: 'Product name',
                        price: '2550',
                        discount: '2700',
                        quantity: 1,
                        img: require('@/assets/about.jpg')
                    },
                    {
                        id: 4,
                        product_name: 'Product name',
                        price: '3400',
                        discount: '3600',
                        quantity: 1,
                        img: require('@/assets/about.jpg')
                    },
                    {
                        id: 5,
                        product_name: 'Product name',
                        price: '6560',
                        discount: '8000',
                        quantity: 1,
                        img: require('@/assets/about.jpg')
                    },
                    {
                        id: 6,
                        product_name: 'Product name',
                        price: '780',
                        discount: '1000',
                        quantity: 1,
                        img: require('@/assets/about.jpg')
                    },
                ],
            }
        },
        components: {
            'product-item': product_item,
            'special-product': special
        },
        computed: {
            ...mapGetters(['GET_ALL_PRODUCTS', 'GET_TOP_PRODUCTS', 'GET_DISCOUNTS_PRODUCTS', 'GET_SPECIAL_PRODUCTS'])
        },
        mounted() {
            let slider = tns({
                "container": ".special-offer-slide",
                items: 1,
                "speed": 1000,
                autoplay: true,
                slideBy: 1,
                autoplayButtonOutput: false,
                mouseDrag: true,
                autoHeight: true,
                "swipeAngle": false,
            });
            slider.play();
        }
    }
</script>

<style scoped>
    .wrapper {
        margin-top: 100px;
        background-color: #fff;
    }

    .tabs {
        display: block;
    }

    .tabs li a {
        color: #0a662e;
    }

    .tabs li a:hover {
        color: #0a662e;
    }

    .tabs .tab a.active {
        background-color: transparent;
        color: #0a662e;
        font-weight: bold;
    }

    .tabs .indicator {
        background-color: #0a662e !important;
    }
</style>