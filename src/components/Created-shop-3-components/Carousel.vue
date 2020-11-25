<template>
    <div class="container" id="banner-component">
        <h5 class="center-align">Featured products</h5>
        <div class="border-bottom"></div>
        <VueSlickCarousel v-bind="settings"
                          v-if="company_products_computed !== undefined && company_products_computed.length > 0">
            <div v-for="product in company_products.products" :key="product.id">
                <component :is="currentProductComponents"
                           :name="home_page_info[currentProductBox].product_name_style"
                           :price="home_page_info[currentProductBox].product_price_style"
                           :category="home_page_info[currentProductBox].product_category_style"
                           :button="home_page_info[currentProductBox].button_style"
                           :icon="footer_info.icon_style"
                           :id="product.id"
                           :file="product.file"
                           :product_name="product.product_name"
                           :product_price="product.price"
                           :discount_price="product.discount_price"
                           :product_category="product.category"
                           :tag="product.tag"
                           :description="product.description"
                           :top="product.top"
                           :best="product.best"
                           :company_name="company_name"
                />
            </div>
        </VueSlickCarousel>
        <VueSlickCarousel v-bind="settings" v-else>
            <div>
                <div class="product-item">
                    <span>Product item</span>
                </div>
            </div>
            <div>
                <div class="product-item">
                    <span>Product item</span>
                </div>
            </div>
            <div>
                <div class="product-item">
                    <span>Product item</span>
                </div>
            </div>
            <div>
                <div class="product-item">
                    <span>Product item</span>
                </div>
            </div>
            <div>
                <div class="product-item">
                    <span>Product item</span>
                </div>
            </div>
            <div>
                <div class="product-item">
                    <span>Product item</span>
                </div>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    import product_1 from '../Created-shop-elements/products-box/Product-1'
    import product_2 from '../Created-shop-elements/products-box/Product-2'
    import product_3 from '../Created-shop-elements/products-box/Product-3'
    import product_4 from '../Created-shop-elements/products-box/Product-4'
    import product_5 from '../Created-shop-elements/products-box/Product-5'
    import product_6 from '../Created-shop-elements/products-box/Product-6'
    import product_7 from '../Created-shop-elements/products-box/Product-7'
    import product_8 from '../Created-shop-elements/products-box/Product-8'
    import product_9 from '../Created-shop-elements/products-box/Product-9'

    import {mapActions, mapState} from 'vuex'


    export default {
        data() {
            return {
                settings: {
                    "arrows": false,
                    "dots": true,
                    "infinite": true,
                    "slidesToShow": 4,
                    "slidesToScroll": 1,
                    "autoplay": true,
                    "speed": 2500,
                    "autoplaySpeed": 2500,
                    "cssEase": "linear",
                },
                currentProductBox: '',
                product_boxs: [
                    {name: 'product-box-1'},
                    {name: 'product-box-2'},
                    {name: 'product-box-3'},
                    {name: 'product-box-4'},
                    {name: 'product-box-5'},
                    {name: 'product-box-6'},
                    {name: 'product-box-7'},
                    {name: 'product-box-8'},
                    {name: 'product-box-9'},
                ],
                company_name: ''
            }
        },
        components: {
            VueSlickCarousel,
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
        // computed: {
        //     ...mapState(['product_boxs'])
        // },
        computed: {
            ...mapState(['home_page_info', 'footer_info', 'company_products']),
            currentProductComponents() {
                return this.currentProductBox
            },
            company_products_computed() {
                return this.company_products.products
            }
        },
        methods: {
            ...mapActions(['GET_SHOP_INFO', 'GET_COMPANY_PRODUCTS'])
        },
        beforeMount() {
            this.GET_SHOP_INFO()
        },
        async created() {
            this.company_name = this.$route.params.pathMatch;
            await this.GET_COMPANY_PRODUCTS(this.$route.params.pathMatch);
            let x = [];
            this.product_boxs.filter(i => {
                x.push(i.name)
            });
            const y = Object.keys(this.home_page_info).filter(j => {
                return x.includes(j)
            });
            this.currentProductBox = y.toString()
        },
    }
</script>

<style scoped>
    #banner-component {
        cursor: grab;
    }

    .container {
        margin: 80px auto;
    }

    .product-item {
        position: relative;
        border: dotted;
        height: 365px;
        margin: 0 10px;
    }

    .product-item span {
        position: absolute;
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .border-bottom {
        width: 100px;
        height: 2px;
        background-color: #6ba229;
        margin: 10px auto;
        border-radius: 10px;
    }
</style>