<template>
    <div class="best-sales container" id="product-component">
        <div class="tab-list">
            <button class="btn" :style="header_info.button" v-for="tab in tab_components"
                    :key="tab" @click="change_tab(tab)"
            >
                {{tab}}
            </button>
        </div>
        <h5 class="center-align">{{currentTab.toUpperCase()}}</h5>
        <div class="border-bottom" :style="`background-color: ${header_info.button.color}`"></div>
        <div class="news" v-if="currentTab === 'news'">
            <div class="row">
                <template v-if="company_products_computed !== undefined && company_products_computed.length > 0">
                    <div class="col s12 m6 l3" v-for="product in company_products.products" :key="product.id">
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
                </template>
                <template v-else>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>New item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>New item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>New item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>New item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>New item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>New item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>New item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>New item</span>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="best" v-else-if="currentTab === 'best'">
            <div class="row">
                <template v-if="company_products_computed !== undefined && company_products_computed.length > 0">
                    <div class="col s12 m6 l3" v-for="product in company_products.products" :key="product.id">
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
                </template>
                <template v-else>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>Best item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>Best item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>Best item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>Best item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>Best item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>Best item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>Best item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>Best item</span>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="best" v-else>
            <div class="row">
                <template v-if="company_products_computed !== undefined && company_products_computed.length > 0">
                    <div class="col s12 m6 l3" v-for="product in company_products.products" :key="product.id">
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
                </template>
                <template v-else>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>Top item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>Top item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>Top item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>Top item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>Top item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>Top item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>Top item</span>
                        </div>
                    </div>
                    <div class="col s12 m6 l3">
                        <div class="product-item">
                            <span>Top item</span>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="clear-both" style="clear: both"></div>
        <div style="display: flex; justify-content: center">
            <a :href="`/${company_name}/shop`" class="btn waves-effect waves-green view_more_btn" :style="header_info.button">View more</a>
        </div>
    </div>
</template>

<script>
    import product_1 from '../Created-shop-elements/products-box/Product-1'
    import product_2 from '../Created-shop-elements/products-box/Product-2'
    import product_3 from '../Created-shop-elements/products-box/Product-3'
    import product_4 from '../Created-shop-elements/products-box/Product-4'
    import product_5 from '../Created-shop-elements/products-box/Product-5'
    import product_6 from '../Created-shop-elements/products-box/Product-6'
    import product_7 from '../Created-shop-elements/products-box/Product-7'
    import product_8 from '../Created-shop-elements/products-box/Product-8'
    import product_9 from '../Created-shop-elements/products-box/Product-9'

    import {mapActions, mapState} from "vuex";

    export default {
        data() {
            return {
                tab_components: ['news', 'best', 'top'],
                currentTab: 'news',
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
            'product-box-1': product_1,
            'product-box-2': product_2,
            'product-box-3': product_3,
            'product-box-4': product_4,
            'product-box-5': product_5,
            'product-box-6': product_6,
            'product-box-7': product_7,
            'product-box-8': product_8,
            'product-box-9': product_9,
        },
        computed: {
            ...mapState(['home_page_info', 'footer_info', 'company_products', 'header_info']),
            currentProductComponents() {
                return this.currentProductBox
            },
            company_products_computed() {
                return this.company_products.products
            }
        },
        methods: {
            ...mapActions(['GET_SHOP_INFO', 'GET_COMPANY_PRODUCTS']),
            change_tab(tab) {
                this.currentTab = tab
            }
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
        }
    }
</script>

<style scoped>
    .best-sales {
        margin-top: 80px;
    }

    .product-item {
        position: relative;
        border: dotted;
        height: 365px;
        margin-bottom: 25px;
    }

    .product-item span {
        position: absolute;
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .tab-list {
        display: flex;
        justify-content: center;
    }

    .tab-list button {
        margin: 0 10px;
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
    }

    .view_more_btn {
        margin-top: 20px;
    }
</style>