<template>
    <div class="shop-example-3">
        <Header/>
        <div class="wrapper container">
            <div class="row">
                <div class="col s12 m9 l9" v-dragula="shop_products" bag="shop_products" id="dragula_shop">
                    <template v-for="id in FETCH_SHOP_RIGHT_COMPONENT_IDS">
                        <template v-if="id === 'shop_img_component'">
                            <div class="row" :key="id" id="shop_img_component">
                                <div class="col s12">
                                    <!--                            shop image -->
                                    <shop-image/>
                                    <hr>
                                </div>
                            </div>
                        </template>
                        <template v-else-if="id === 'shop_products_component'">
                            <div class="row products-field" :key="id" id="shop_products_component">
                                <h4>Products</h4>
                                <div class="col s12 m6 l4">
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
                                <div class="col s12 m6 l4">
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
                                <div class="col s12 m6 l4">
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
                                <div class="col s12 m6 l4">
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
                                <div class="col s12 m6 l4">
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
                                <div class="col s12 m6 l4">
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
                        </template>
                    </template>
                </div>
                <div class="col s12 m3 l3">
                    <div class="row" v-dragula="shop_filters" bag="shop_filters" id="dragula_shop_category_components">
                        <template v-for="id in FETCH_SHOP_COMPONENT_IDS">
                            <template v-if="id === 'filter-by-price-component'">
                                <!--                    filter by price-->
                                <filter-by-price @click.native="testMethod(2)" :key="id"/>
                            </template>
                            <template v-else-if="id === 'filter-by-tag-component'">
                                <!--                    filter by tags-->
                                <filter-by-tag @click.native="testMethod(3)" :key="id"/>
                            </template>
                            <template v-else-if="id === 'category-component'">
                                <!--                    categories-->
                                <categories @click.native="testMethod(1)" :key="id"/>
                            </template>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        <div class="nextOrPrevPage">
            <button class="btn" @click="NEXT_PAGE('home')">Prev</button>
            <button class="btn" @click="CREATE_SHOP">Save</button>
        </div>
    </div>
</template>

<script>
    import Header from '../../../components/reg-stage/example-2/Header'
    import Footer from '../../../components/reg-stage/example-2/Footer'
    import product_1 from '../../../components/reg-stage/products-box/Product-1'
    import product_2 from '../../../components/reg-stage/products-box/Product-2'
    import product_3 from '../../../components/reg-stage/products-box/Product-3'
    import product_4 from '../../../components/reg-stage/products-box/Product-4'
    import product_5 from '../../../components/reg-stage/products-box/Product-5'
    import product_6 from '../../../components/reg-stage/products-box/Product-6'
    import product_7 from '../../../components/reg-stage/products-box/Product-7'
    import product_8 from '../../../components/reg-stage/products-box/Product-8'
    import product_9 from '../../../components/reg-stage/products-box/Product-9'
    import categories from '../../../components/reg-stage/example-1/Categories'
    import price_filter from '../../../components/reg-stage/example-1/Filter-by-price'
    import tag_filter from '../../../components/reg-stage/example-1/Filter-by-tag'
    import shop_img from '../../../components/reg-stage/example-1/Shop-image'
    import {mapActions, mapState, mapGetters} from 'vuex'
    import Vue from "vue";


    export default {
        data() {
            return {
                shop_filters: [],
                shop_products: []
            }
        },
        components: {
            categories,
            'filter-by-price': price_filter,
            'filter-by-tag': tag_filter,
            'shop-image': shop_img,
            Header,
            Footer,
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
        methods: {
            ...mapActions(['NEXT_PAGE', 'CATEGORY_COMPONENTS', 'PRICE_FILTER_COMPONENTS', 'TAG_FILTER_COMPONENTS', 'OPEN_RIGHT_PANEL', 'GET_SHOP_COMPONENTS_IDS', 'GET_SHOP_RIGHT_BOX_COMPONENTS_IDS', 'CREATE_SHOP']),
            testMethod(sectionId) {
                switch (sectionId) {
                    case 1:
                        this.CATEGORY_COMPONENTS('category_components');
                        this.PRICE_FILTER_COMPONENTS('component');
                        this.TAG_FILTER_COMPONENTS('component');
                        break;
                    case 2:
                        this.CATEGORY_COMPONENTS('component');
                        this.PRICE_FILTER_COMPONENTS('price_filter_components');
                        this.TAG_FILTER_COMPONENTS('component');
                        break;
                    case 3:
                        this.CATEGORY_COMPONENTS('component');
                        this.PRICE_FILTER_COMPONENTS('component');
                        this.TAG_FILTER_COMPONENTS('tag_filter_components');
                        break;
                    case 4:
                        this.CATEGORY_COMPONENTS('component');
                        this.PRICE_FILTER_COMPONENTS('component');
                        this.TAG_FILTER_COMPONENTS('component');
                        break;
                    default:
                        break;
                }
            },
        },
        computed: {
            ...mapState(['product_boxs']),
            ...mapGetters(['FETCH_SHOP_COMPONENT_IDS', 'FETCH_SHOP_RIGHT_COMPONENT_IDS'])
        },
        created() {
            Vue.vueDragula.eventBus.$on('drop', () => {
                let arr = [];
                let wrapper = document.getElementById('dragula_shop_category_components');
                for (let i = 0; i < wrapper.childNodes.length; i++) {
                    let childId = wrapper.childNodes[i].id;
                    arr.push(childId);
                }
                this.GET_SHOP_COMPONENTS_IDS(arr)
                // console.log(arr)
            });
            Vue.vueDragula.eventBus.$on('drop', () => {
                let arr = [];
                let wrapper = document.getElementById('dragula_shop');
                for (let i = 0; i < wrapper.childNodes.length; i++) {
                    let childId = wrapper.childNodes[i].id;
                    arr.push(childId);
                }
                this.GET_SHOP_RIGHT_BOX_COMPONENTS_IDS(arr)
                // console.log(arr)
            })
        },
    }
</script>

<style scoped>
    .center-box {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: dotted;
    }

    .header {
        display: flex;
    }

    nav {
        background-color: #fff;
        color: #262626;
        height: auto;
        line-height: 0;
    }

    .company-logo {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .company-logo:hover {
        background-color: transparent;
    }

    img {
        width: 100%;
        display: block;
        height: 100%;
    }

    input {
        margin: 0;
    }

    .support-box {
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .support-box span {
        font-size: small;
        color: #888;
    }

    .phone-number {
        font-size: 18px;
        color: #333;
    }

    i {
        color: #6ba229;
    }

    .wrapper {
        margin: 100px auto;
    }

    ul {
        margin-bottom: 40px;
    }

    h4 {
        color: #333c4a;
        font-size: 28px;
        font-weight: 800;
        padding: 15px;
    }

    /*footer*/

    /*footer {*/
    /*    height: 300px;*/
    /*    margin-top: 80px;*/
    /*    width: 100%;*/
    /*    padding: 15px;*/
    /*    border: dotted;*/
    /*    position: relative;*/
    /*    display: flex;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*    margin-bottom: 20px;*/
    /*}*/

    .nextOrPrevPage {
        position: absolute;
        bottom: 20px;
        right: 15px;
        position: fixed;
    }

    .nextOrPrevPage button {
        background-color: #6ba229;
        margin: 0 3px;
    }

    .product-item {
        border: dotted;
        height: 370px;
        max-height: 370px;
        margin: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .products-field {
        margin-bottom: 50px;
    }

    #shop_img_component {
        cursor: grab;
    }

    #shop_products_component {
        cursor: grab;
    }
</style>