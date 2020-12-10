<!--CREATED SHOP SHOP PAGE-->
<template>
    <div>
        <!--        HOME EXAMPLE 1 START-->
        <div class="shop-example-1" v-if="schema === 'example-1'">
            <NavWrapper/>
            <Header :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"
                    :company_name="company_name"/>
            <NavBar :company_name="company_name"/>
            <div class="wrapper container">
                <div class="row">
                    <div class="col s12 m3 l3">
                        <div class="row">
                            <template v-for="id in shop_page_filters_ids">
                                <template v-if="id === 'category-component'">
                                    <!--                    categories-->
                                    <categories :key="id" :categories="company_admin_settings.categories"/>
                                </template>
                                <template v-else-if="id === 'filter-by-tag-component'">
                                    <!--                    filter by tags-->
                                    <filter-by-tag :key="id" :tags="company_tags_computed"/>

                                </template>
                                <template v-else-if="id === 'filter-by-price-component'">
                                    <!--                    filter by price-->
                                    <filter-by-price :key="id"
                                                     :all_prices="all_prices"
                                                     :max_price="max_price"
                                                     :min_price="min_price"
                                                     :company_name="company_name"
                                    />
                                </template>
                            </template>
                        </div>
                    </div>
                    <div class="col s12 m9 l9">
                        <template v-for="id in shop_page_rightBox_ids">
                            <template v-if="id === 'shop_img_component'">
                                <div :key="id" class="row">
                                    <div class="col s12">
                                        <!--                            shop image -->
                                        <shop-image :img="company_admin_settings.shop_page_img"/>
                                        <hr>
                                    </div>
                                </div>
                            </template>
                            <template v-else-if="id === 'shop_products_component'">
                                <div :key="id" class="row products-field">
                                    <h4>Products</h4>
                                    <template
                                            v-if="company_products_computed !== undefined && company_products_computed.length > 0">
                                        <template v-if="Company_filters.filtered === false">
                                            <div class="col s12 m6 l4" v-for="product in company_products.products"
                                                 :key="product.id">
                                                <component :is="currentProductComponent"
                                                           :name="shop_page_info.product_title.product_name_style"
                                                           :price="shop_page_info.product_price.product_price_style"
                                                           :category="shop_page_info.product_category.product_category_style"
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
                                            <div class="col s12 m6 l4"
                                                 v-for="product in Company_filters.filtered_products"
                                                 :key="product.id">
                                                <component :is="currentProductComponent"
                                                           :name="shop_page_info.product_title.product_name_style"
                                                           :price="shop_page_info.product_price.product_price_style"
                                                           :category="shop_page_info.product_category.product_category_style"
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

                                    </template>
                                    <template v-else>
                                        <div class="col s12 m6 l4">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                        <div class="col s12 m6 l4">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                        <div class="col s12 m6 l4">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                        <div class="col s12 m6 l4">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                        <div class="col s12 m6 l4">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                        <div class="col s12 m6 l4">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                    </template>
                                    <!--:button="home_page_info[currentProductBox].button_style"-->
                                </div>
                            </template>
                        </template>
                    </div>
                </div>
                <div class="pagination-field">
                    <pagination :button_style="header_info.button"/>
                </div>
            </div>
            <Footer :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"
                    :company_name="company_name"/>
        </div>
        <!--        HOME EXAMPLE 1 END-->

        <!--        HOME EXAMPLE 2 START-->
        <div class="shop-example-2" v-else-if="schema === 'example-2'">
            <NavWrapper/>
            <Header_2 :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"
                      :company_name="company_name"/>
            <NavBar :company_name="company_name"/>
            <div class="wrapper container">
                <div class="row">
                    <div class="col s12 m3 l3">
                        <div class="row">
                            <template v-for="id in shop_page_filters_ids">
                                <template v-if="id === 'category-component'">
                                    <!--                    categories-->
                                    <categories :key="id" :categories="company_admin_settings.categories"/>
                                </template>
                                <template v-else-if="id === 'filter-by-tag-component'">
                                    <!--                    filter by tags-->
                                    <filter-by-tag :key="id" :tags="company_tags_computed"/>
                                </template>
                                <template v-else-if="id === 'filter-by-price-component'">
                                    <!--                    filter by price-->
                                    <filter-by-price :key="id"
                                                     :all_prices="all_prices"
                                                     :max_price="max_price"
                                                     :min_price="min_price"
                                                     :company_name="company_name"/>
                                </template>
                            </template>
                        </div>
                    </div>
                    <div class="col s12 m9 l9">
                        <template v-for="id in shop_page_rightBox_ids">
                            <template v-if="id === 'shop_img_component'">
                                <div :key="id" class="row">
                                    <div class="col s12">
                                        <!--                            shop image -->
                                        <shop-image :img="company_admin_settings.shop_page_img"/>
                                        <hr>
                                    </div>
                                </div>
                            </template>
                            <template v-else-if="id === 'shop_products_component'">
                                <div :key="id" class="row products-field">
                                    <h4>Products</h4>
                                    <template
                                            v-if="company_products_computed !== undefined && company_products_computed.length > 0">
                                        <template v-if="Company_filters.filtered === false">
                                            <div class="col s12 m6 l4" v-for="product in company_products.products"
                                                 :key="product.id">
                                                <component :is="currentProductComponent"
                                                           :name="shop_page_info.product_title.product_name_style"
                                                           :price="shop_page_info.product_price.product_price_style"
                                                           :category="shop_page_info.product_category.product_category_style"
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
                                                           :button="header_info.button"
                                                />
                                            </div>
                                        </template>
                                        <template v-else>
                                            <div class="col s12 m6 l4"
                                                 v-for="product in Company_filters.filtered_products"
                                                 :key="product.id">
                                                <component :is="currentProductComponent"
                                                           :name="shop_page_info.product_title.product_name_style"
                                                           :price="shop_page_info.product_price.product_price_style"
                                                           :category="shop_page_info.product_category.product_category_style"
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
                                                           :button="header_info.button"
                                                />
                                            </div>
                                        </template>

                                    </template>
                                    <template v-else>
                                        <div class="col s12 m6 l4">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                        <div class="col s12 m6 l4">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                        <div class="col s12 m6 l4">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                        <div class="col s12 m6 l4">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                        <div class="col s12 m6 l4">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                        <div class="col s12 m6 l4">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                    </template>
                                    <!--:button="home_page_info[currentProductBox].button_style"-->
                                </div>
                            </template>
                        </template>
                    </div>
                </div>
                <div class="pagination-field">
                    <pagination :button_style="header_info.button"/>
                </div>

            </div>
            <Footer_2 :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"
                      :company_name="company_name"/>
        </div>
        <!--        HOME EXAMPLE 2 END-->

        <!--        HOME EXAMPLE 3 START-->
        <div class="shop-example-3" v-else>
            <NavWrapper/>
            <Header_3 :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"
                      :company_name="company_name"/>
            <NavBar :company_name="company_name"/>
            <div class="wrapper">
                <div class="row">
                    <div class="col s12 m3 l3 example-3-col">
                        <div class="row">
                            <template v-for="id in shop_page_filters_ids">
                                <template v-if="id === 'category-component'">
                                    <!--                    categories-->
                                    <template
                                            v-if="company_admin_settings_computed !== undefined && company_admin_settings_computed.length > 0">
                                        <categories :key="id" :categories="company_admin_settings.categories"/>
                                    </template>
                                    <template v-else>
                                        <div class="col s6 m12 l12" :key="id">
                                            <h5 style="margin-bottom: 25px">Categories</h5>
                                            <div class="category-item">
                                                <span>Category 1</span>
                                            </div>
                                            <div class="category-item">
                                                <span>Category 2</span>
                                            </div>
                                            <div class="category-item">
                                                <span>Category 3</span>
                                            </div>
                                            <div class="category-item">
                                                <span>Category 4</span>
                                            </div>
                                            <div class="category-item">
                                                <span>Category 5</span>
                                            </div>
                                        </div>
                                    </template>
                                </template>
                                <template v-else-if="id === 'filter-by-tag-component'">
                                    <!--                    filter by tags-->
                                    <template v-if="all_tags.size > 0">
                                        <filter-by-tag :key="id" :tags="company_tags_computed"/>
                                    </template>
                                    <template v-else>
                                        <div class="col s6 m12 l12" :key="id">
                                            <h5 style="margin-bottom: 25px">Tags</h5>
                                            <div class="category-item">
                                                <span>#Tag 1</span>
                                            </div>
                                            <div class="category-item">
                                                <span>#Tag 2</span>
                                            </div>
                                            <div class="category-item">
                                                <span>#Tag 3</span>
                                            </div>
                                        </div>
                                    </template>

                                </template>
                                <template v-else-if="id === 'filter-by-price-component'">
                                    <!--                    filter by price-->
                                    <filter-by-price :key="id"
                                                     :all_prices="all_prices"
                                                     :max_price="max_price"
                                                     :min_price="min_price"
                                                     :company_name="company_name"/>
                                </template>
                            </template>
                        </div>
                    </div>
                    <div class="col s12 m9 l9 example-3-col">
                        <template v-for="id in shop_page_rightBox_ids">
                            <template v-if="id === 'shop_img_component'">
                                <div :key="id" class="row">
                                    <div class="col s12">
                                        <!--                            shop image -->
                                        <shop-image :img="company_admin_settings.shop_page_img"/>
                                        <hr>
                                    </div>
                                </div>
                            </template>
                            <template v-else-if="id === 'shop_products_component'">
                                <div :key="id" class="row products-field">
                                    <h4>Products</h4>
                                    <template
                                            v-if="company_products_computed !== undefined && company_products_computed.length > 0">
                                        <template v-if="Company_filters.filtered === false">
                                            <div class="col s12 m6 l3" v-for="product in company_products.products"
                                                 :key="product.id">
                                                <component :is="currentProductComponent"
                                                           :name="shop_page_info.product_title.product_name_style"
                                                           :price="shop_page_info.product_price.product_price_style"
                                                           :category="shop_page_info.product_category.product_category_style"
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
                                            <div class="col s12 m6 l3"
                                                 v-for="product in Company_filters.filtered_products"
                                                 :key="product.id">
                                                <component :is="currentProductComponent"
                                                           :name="shop_page_info.product_title.product_name_style"
                                                           :price="shop_page_info.product_price.product_price_style"
                                                           :category="shop_page_info.product_category.product_category_style"
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

                                    </template>
                                    <template v-else>
                                        <div class="col s12 m6 l3">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                        <div class="col s12 m6 l3">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                        <div class="col s12 m6 l3">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                        <div class="col s12 m6 l3">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                        <div class="col s12 m6 l3">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                        <div class="col s12 m6 l3">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                        <div class="col s12 m6 l3">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                        <div class="col s12 m6 l3">
                                            <div class="product-item">
                                                <span>Product item</span>
                                            </div>
                                        </div>
                                    </template>

                                    <!--:button="home_page_info[currentProductBox].button_style"-->
                                </div>
                            </template>
                        </template>
                    </div>
                </div>
                <div class="pagination-field">
                    <pagination :button_style="header_info.button"/>
                </div>

            </div>
            <Footer_3 :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"
                      :company_name="company_name"/>
        </div>
        <!--        HOME EXAMPLE 3 END-->
    </div>
</template>

<script>
    import NavWrapper from '../../components/Navbar';

    //CREATED SHOP 1. SHOP PAGE
    import NavBar from '../../components/Created-shop-1-components/Navbar';
    import categories from '../../components/Created-shop-1-components/Categories';
    import price_filter from '../../components/Created-shop-1-components/Filter-by-price';
    import tag_filter from '../../components/Created-shop-1-components/Filter-by-tag';
    import shop_img from '../../components/Created-shop-1-components/Shop-image';

    import Header from '../../components/Created-shop-1-components/Header';
    import Footer from '../../components/Created-shop-1-components/Footer';

    import Header_2 from '../../components/Created-shop-2-components/Header'
    import Footer_2 from '../../components/Created-shop-2-components/Footer'

    import Header_3 from '../../components/Created-shop-3-components/Header'
    import Footer_3 from '../../components/Created-shop-3-components/Footer'

    import product_1 from '../../components/Created-shop-elements/products-box/Product-1';
    import product_2 from "../../components/Created-shop-elements/products-box/Product-2";
    import product_3 from "../../components/Created-shop-elements/products-box/Product-3";
    import product_4 from "../../components/Created-shop-elements/products-box/Product-4";
    import product_5 from "../../components/Created-shop-elements/products-box/Product-5";
    import product_6 from "../../components/Created-shop-elements/products-box/Product-6";
    import product_7 from "../../components/Created-shop-elements/products-box/Product-7";
    import product_8 from "../../components/Created-shop-elements/products-box/Product-8";
    import product_9 from "../../components/Created-shop-elements/products-box/Product-9";

    import pagination from '../../components/Created-shop-elements/paginations/Pagination-1'
    import {mapActions, mapState} from "vuex";


    export default {
        data() {
            return {
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
                company_name: '',
                all_prices: [],
                max_price: Number,
                min_price: Number,
                all_tags: []
            }
        },
        components: {
            NavWrapper,
            NavBar,
            Header,
            categories,
            'filter-by-price': price_filter,
            'filter-by-tag': tag_filter,
            'shop-image': shop_img,
            'product-box-1': product_1,
            'product-box-2': product_2,
            'product-box-6': product_6,
            'product-box-7': product_7,
            'product-box-8': product_8,
            'product-box-9': product_9,
            'product-box-3': product_3,
            'product-box-4': product_4,
            'product-box-5': product_5,
            Footer,
            Header_2,
            Footer_2,
            Header_3,
            Footer_3,
            pagination
        },
        computed: {
            ...mapState(['footer_info', 'shop_page_filters_ids', 'shop_page_rightBox_ids', 'shop_page_info', 'company_products', 'company_admin_settings', 'schema', 'Company_filters', 'header_info']),
            currentProductComponent() {
                return this.currentProductBox
            },
            company_admin_settings_computed() {
                return this.company_admin_settings.categories
            },
            company_products_computed() {
                return this.Company_filters.products
            },
            company_tags_computed() {
                return this.all_tags
            }
        },
        methods: {
            ...mapActions(['GET_SHOP_INFO', 'GET_COMPANY_PRODUCTS', 'GET_COMPANY_SETTINGS', 'GET_COMPANY_PRODUCTS_FOR_FILTER'])

        },
        async created() {
            let company_name = this.$route.params.pathMatch;
            await this.GET_SHOP_INFO(company_name);
            await this.GET_COMPANY_PRODUCTS(company_name);
            await this.GET_COMPANY_SETTINGS(company_name);
            await this.GET_COMPANY_PRODUCTS_FOR_FILTER(company_name)
            let x = [];
            this.product_boxs.filter(i => {
                x.push(i.name)
            });
            const y = Object.keys(this.shop_page_info).filter(j => {
                return x.includes(j)
            });
            this.currentProductBox = y.toString();

            this.company_name = this.$route.params.pathMatch;
            let arr = [];
            let tags_arr = [];
            this.company_products.products.forEach(i => {
                this.all_prices.push(Number(i.price));
                arr.push(Number(i.price));
                tags_arr.push(i.tag)
            });
            this.max_price = Math.max.apply(null, arr);
            this.min_price = Math.min.apply(null, arr);
            // console.log(tags_arr)
            let set = new Set(tags_arr);

            this.all_tags = set;
        },
    }
</script>

<style scoped>
    img {
        width: 100%;
        display: block;
        height: 100%;
    }

    input {
        margin: 0;
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

    .products-field {
        margin-bottom: 50px;
    }

    .example-3-col {
        padding: 0 50px;
    }

    .category-item {
        margin-bottom: 10px;
    }

    .product-item {
        position: relative;
        border: dotted;
        height: 365px;
        margin: 10px 10px;
    }

    .product-item span {
        position: absolute;
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .pagination-field {
        display: flex;
        justify-content: center;
    }
</style>