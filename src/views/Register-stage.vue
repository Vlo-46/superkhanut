<template>
    <div class="register-stage">
        <div class="row" style="display:flex;">
            <!--            WEBSITE EXAMPLE 1-->
            <div class="col s2 left-box" @click="CLOSE_RIGHT_PANEL(null)" v-if="pages.page === 'home'">
                <!--                components-->
                <ul v-if="header_components.headers === 'header_components'" class="header_components">
                    <div class="close" @click="GO_TO_BACK"><i class="material-icons">arrow_back</i></div>
                    <li><p>Header components</p></li>
                    <li class="input-img">
                        <button class="panel-button" @click="INPUTS('input-1')">INPUT 1</button>
                    </li>
                    <li class="input-img">
                        <button class="panel-button" @click="INPUTS('input-2')">INPUT 2</button>
                    </li>
                    <li class="input-img">
                        <button class="panel-button" @click="INPUTS('input-3')">INPUT 3</button>
                    </li>
                </ul>
                <ul v-else-if="slider_components.sliders === 'slider_components'" class="slider_components">
                    <div class="close" @click="GO_TO_BACK"><i class="material-icons">arrow_back</i></div>
                    <li>Slider components</li>
                    <li>
                        <button @click="CHANGE_SLIDER('slider-1')"><img src="../assets/slider-1.gif" alt=""></button>
                    </li>
                </ul>
                <ul v-else-if="banner_components.banners === 'banner_components'">
                    <div class="close" @click="GO_TO_BACK"><i class="material-icons">arrow_back</i></div>
                    <li>Banner components</li>
                    <li>
                        <button class="panel-button" @click="BANNER('banner-1')">BANNER 1</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="BANNER('banner-2')">BANNER 2</button>
                    </li>
                </ul>
                <ul v-else-if="products_components.products === 'product_components'" class="product-components">
                    <div class="close" @click="GO_TO_BACK"><i class="material-icons">arrow_back</i></div>
                    <li>Product components</li>
                    <li>
                        <button class="panel-button" @click="PRODUCT_BOXS('product-box-1')">PRODUCT BOX 1</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="PRODUCT_BOXS('product-box-2')">PRODUCT BOX 2</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="PRODUCT_BOXS('product-box-3')">PRODUCT BOX 3</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="PRODUCT_BOXS('product-box-4')">PRODUCT BOX 4</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="PRODUCT_BOXS('product-box-5')">PRODUCT BOX 5</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="PRODUCT_BOXS('product-box-6')">PRODUCT BOX 6</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="PRODUCT_BOXS('product-box-7')">PRODUCT BOX 7</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="PRODUCT_BOXS('product-box-8')">PRODUCT BOX 8</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="PRODUCT_BOXS('product-box-9')">PRODUCT BOX 9</button>
                    </li>
                </ul>
                <ul v-else-if="footer_components.footers === 'footer_components'">
                    <div class="close" @click="GO_TO_BACK"><i class="material-icons">arrow_back</i></div>
                    <li>Footer components</li>
                </ul>
                <!--                covers-->
                <ul v-else>
                    <h5>Select your cover</h5>
                    <hr>
                    <li>
                        <button class="panel-button" @click="example('example-1')">
                            COVER 1
                        </button>
                    </li>
                    <li>
                        <button class="panel-button" @click="example('example-2')">
                            COVER 2
                        </button>
                    </li>
                    <li>
                        <button class="panel-button" @click="example('example-3')">
                            COVER 3
                        </button>
                    </li>
                </ul>
            </div>
            <div class="col s2 left-box" @click="CLOSE_RIGHT_PANEL(null)" v-if="pages.page === 'shop'">
                <p>Shop components</p>
                <ul v-if="category_components.category === 'category_components'">
                    <h6>Category components</h6>
                    <li>
                        <button class="panel-button" @click="CATEGORY_FILTER('category-1')">CATEGORY 1</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="CATEGORY_FILTER('category-2')">CATEGORY 2</button>
                    </li>
                </ul>
                <ul v-else-if="price_filter_components.price_filter === 'price_filter_components'">
                    <h6>Price filter components</h6>
                    <li>
                        <button class="panel-button" @click="$PRICE_FILTER('price-filter-1')">PRICE FILTER 1</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="$PRICE_FILTER('price-filter-2')">PRICE FILTER 2</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="$PRICE_FILTER('price-filter-3')">PRICE FILTER 3</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="$PRICE_FILTER('price-filter-4')">PRICE FILTER 4</button>
                    </li>
                </ul>
                <ul v-else-if="tag_filter_components.tag_filter === 'tag_filter_components'">
                    <h6>Tag filter components</h6>
                    <li>
                        <button class="panel-button" @click="$TAG_FILTER('tag-filter-1')">TAG FILTER 1</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="$TAG_FILTER('tag-filter-2')">TAG FILTER 2</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="$TAG_FILTER('tag-filter-3')">TAG FILTER 3</button>
                    </li>
                </ul>
            </div>
            <!--            END WEBSITE EXAMPLE 1-->

            <!--            WEBSITE EXAMPLE 2-->
            <div class="col s2 left-box" @click="CLOSE_RIGHT_PANEL(null)" v-if="pages.page === 'shop-2'">
                <p>Shop components</p>
                <ul v-if="category_components.category === 'category_components'">
                    <h6>Category components</h6>
                    <li>
                        <button class="panel-button" @click="CATEGORY_FILTER('category-1')">CATEGORY 1</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="CATEGORY_FILTER('category-2')">CATEGORY 2</button>
                    </li>
                </ul>
                <ul v-else-if="price_filter_components.price_filter === 'price_filter_components'">
                    <h6>Price filter components</h6>
                    <li>
                        <button class="panel-button" @click="$PRICE_FILTER('price-filter-1')">PRICE FILTER 1</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="$PRICE_FILTER('price-filter-2')">PRICE FILTER 2</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="$PRICE_FILTER('price-filter-3')">PRICE FILTER 3</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="$PRICE_FILTER('price-filter-4')">PRICE FILTER 4</button>
                    </li>
                </ul>
                <ul v-else-if="tag_filter_components.tag_filter === 'tag_filter_components'">
                    <h6>Tag filter components</h6>
                    <li>
                        <button class="panel-button" @click="$TAG_FILTER('tag-filter-1')">TAG FILTER 1</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="$TAG_FILTER('tag-filter-2')">TAG FILTER 2</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="$TAG_FILTER('tag-filter-3')">TAG FILTER 3</button>
                    </li>
                </ul>
            </div>
            <!--            END WEBSITE EXAMPLE 2-->

            <!--            WEBSITE EXAMPLE 3 -->
            <div class="col s2 left-box" @click="CLOSE_RIGHT_PANEL(null)" v-if="pages.page === 'shop-3'">
                <p>Shop components</p>
                <ul v-if="category_components.category === 'category_components'">
                    <h6>Category components</h6>
                    <li>
                        <button class="panel-button" @click="CATEGORY_FILTER('category-1')">CATEGORY 1</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="CATEGORY_FILTER('category-2')">CATEGORY 2</button>
                    </li>
                </ul>
                <ul v-else-if="price_filter_components.price_filter === 'price_filter_components'">
                    <h6>Price filter components</h6>
                    <li>
                        <button class="panel-button" @click="$PRICE_FILTER('price-filter-1')">PRICE FILTER 1</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="$PRICE_FILTER('price-filter-2')">PRICE FILTER 2</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="$PRICE_FILTER('price-filter-3')">PRICE FILTER 3</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="$PRICE_FILTER('price-filter-4')">PRICE FILTER 4</button>
                    </li>
                </ul>
                <ul v-else-if="tag_filter_components.tag_filter === 'tag_filter_components'">
                    <h6>Tag filter components</h6>
                    <li>
                        <button class="panel-button" @click="$TAG_FILTER('tag-filter-1')">TAG FILTER 1</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="$TAG_FILTER('tag-filter-2')">TAG FILTER 2</button>
                    </li>
                    <li>
                        <button class="panel-button" @click="$TAG_FILTER('tag-filter-3')">TAG FILTER 3</button>
                    </li>
                </ul>
            </div>
            <!--            END WEBSITE EXAMPLE 3-->

            <div class="col s10" v-if="pages.page === 'home'">
                <example-1 v-if="reg_navigation.page === 'example-1'"/>
                <example-2 v-else-if="reg_navigation.page === 'example-2'"/>
                <example-3 v-else-if="reg_navigation.page === 'example-3'"/>
                <p v-else class="select_cover">Select your cover</p>
            </div>
            <!--            WEBSITE EXAMPLE 1-->
            <div class="col s10" v-if="pages.page === 'shop'">
                <example-1-shop-page/>
            </div>
            <!--            WEBSITE EXAMPLE 2-->
            <div class="col s10" v-if="pages.page === 'shop-2'">
                <example-2-shop-page/>
            </div>
            <!--            WEBSITE EXAMPLE 3-->
            <div class="col s10" v-if="pages.page === 'shop-3'">
                <example-3-shop-page/>
            </div>
        </div>
        <!--        RIGHT PANEL-->
        <br v-if="right_panel.element === null">
        <button-panel v-else-if="right_panel.element.type === 'button'"/>
        <icon-panel v-else-if="right_panel.element.type === 'icon'"/>
        <span-panel v-else-if="right_panel.element.type === 'span'"/>
        <input-panel v-else-if="right_panel.element.type === 'input'"/>
        <product-panel v-else-if="right_panel.element.type === 'product'"/>
        <category-panel v-else-if="right_panel.element.type === 'categoryElements'"/>
    </div>
</template>

<script>
    import example_1 from './reg-stage/example-1/Home';
    import example_1_shop_page from './reg-stage/example-1/Shop';
    import example_2 from './reg-stage/example-2/Home';
    import example_2_shop_page from './reg-stage/example-2/Shop'
    import example_3 from './reg-stage/example-3/Home'
    import example_3_shop_page from './reg-stage/example-3/Shop'

    import {mapActions, mapState} from 'vuex';

    import button_panel from '../components/reg-stage/Right-panel/Button-panel';
    import icon_panel from '../components/reg-stage/Right-panel/Icon-panel';
    import span_panel from '../components/reg-stage/Right-panel/Span-panel';
    import input_panel from '../components/reg-stage/Right-panel/Input-panel';
    import product_panel from '../components/reg-stage/Right-panel/Product-panel';
    import category_panel from '../components/reg-stage/Right-panel/Category-panel';

    export default {

        components: {
            'example-1': example_1,
            'example-2': example_2,
            'example-3': example_3,
            'example-1-shop-page': example_1_shop_page,
            'example-2-shop-page': example_2_shop_page,
            'example-3-shop-page': example_3_shop_page,
            'button-panel': button_panel,
            'icon-panel': icon_panel,
            'span-panel': span_panel,
            'input-panel': input_panel,
            'product-panel': product_panel,
            'category-panel': category_panel
        },
        methods: {
            ...mapActions(['example', 'HEADER_COMPONENTS', 'PRODUCT_COMPONENTS', 'SLIDER_COMPONENTS', 'BANNER_COMPONENTS',
                'FOOTER_COMPONENTS', 'INPUTS', 'PRODUCT_BOXS', 'CHANGE_SLIDER', 'CLOSE_RIGHT_PANEL', 'BANNER',
                'CATEGORY_FILTER', '$PRICE_FILTER', '$TAG_FILTER', 'CONTACT_INFORMATION', 'CONTACT_SEND_MESSAGE',]),
            GO_TO_BACK() {
                this.HEADER_COMPONENTS('component');
                this.SLIDER_COMPONENTS('component');
                this.BANNER_COMPONENTS('component');
                this.PRODUCT_COMPONENTS('component');
                this.FOOTER_COMPONENTS('component');
            },
            updateValue(color) {
                this.style.color = color.hex
            }
        },
        computed: {
            ...mapState(['reg_navigation', 'header_components', 'products_components', 'slider_components', 'banner_components',
                'footer_components', 'pages', 'right_panel', 'category_components', 'price_filter_components',
                'tag_filter_components', 'contact_information_components', 'contact_send_msg_components']),
        },
    }
</script>
<style scoped>
    img {
        width: 100%;
        height: 120px;
    }

    .left-box {
        padding: 10px;
        border-right: 1px solid #49b14d;
        position: fixed;
        height: 100%;
    }

    .close {
        position: absolute;
        top: 0;
        right: 0;
        padding: 5px 10px;
    }

    .close i {
        font-size: 28px;
        color: #000;
        cursor: pointer;
    }

    .left-box ul li {
        margin: 10px 0;
    }

    .cover:focus {
        background-color: transparent !important;
    }

    .components-box {
        display: flex;
        box-shadow: 0 0 5px 0 #49b14d;
        justify-content: space-between;
    }

    .header_components li {
        margin: 10px 0;
    }

    .input-img img {
        width: 100%;
        height: 50px;
        cursor: pointer;
    }

    .slider_components li {
        margin: 10px 0;
    }

    .slider_components img {
        width: 100%;
        height: 60px;
        cursor: pointer;
    }

    .product-components li {
        margin: 10px 0;
    }

    .product-components img {
        width: 100%;
        height: 250px;
        cursor: pointer;
    }

    .panel-button {
        width: 100%;
        padding: 6px 0;
        border: 1px solid #6ba229;
        cursor: pointer;
        background-color: #f2f2f2;
        color: #6ba229;
    }

    .panel-button:hover {
        background-color: #6ba229;
        color: #fff;
    }

    .select_cover {
        position: fixed;
        bottom: 50%;
        left: 50%;
        font-size: 36px;
        font-weight: bold;
    }

</style>