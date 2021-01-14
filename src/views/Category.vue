<template>
    <div class="wrapper">
        <navbar/>
        <Search/>
        <filters/>
        <div class="row filterBoxs container">
            <div class="col s12 m4 l3">
                <div class="row">
                    <FilterByCategory :categories="WAITING_FOR_DATAS.category_arr"/>
                    <FilterByTag :tags="WAITING_FOR_DATAS.tag_arr"/>
                    <FilterByPrice :max="WAITING_FOR_DATAS.max_price"
                                   :min="WAITING_FOR_DATAS.min_price"
                                   :prices="WAITING_FOR_DATAS.price_arr"/>
                </div>
            </div>
            <div class="col s12 m8 l9">
                <template v-if="filters.company_filtered === false">
                    <div class="row" v-if="navigation.section === 'grid'">
                        <template v-if="filters.filtered_products.length === 0">
                            <div class="col s12 m6 l4" v-for="product in filters.products" :key="product.id">
                                <products :product_name="product.product_name"
                                          :img="product.file"
                                          :company_name="product['store'].name"
                                          :price="product.price"
                                          :id="product.id"
                                          :encoded_name="product['store'].url_encoded_name"
                                />
                            </div>
                        </template>
                        <template v-else>
                            <div class="col s12 m6 l4" v-for="product in filters.filtered_products" :key="product.id">
                                <products :product_name="product.product_name"
                                          :img="product.file"
                                          :company_name="product['store'].name"
                                          :price="product.price"
                                          :id="product.id"
                                          :encoded_name="product['store'].url_encoded_name"
                                />
                            </div>
                        </template>
                    </div>
                    <div class="row" v-else>
                        <template v-if="filters.filtered_products.length === 0">
                            <div class="col s12" v-for="product in filters.products" :key="product.id">
                                <ProductList :product_name="product.product_name"
                                             :img="product.file"
                                             :company_name="product['store'].name"
                                             :price="product.price"
                                             :id="product.id"
                                             :encoded_name="product['store'].url_encoded_name"
                                             :description="product.description"
                                />
                            </div>
                        </template>
                        <template v-else>
                            <div class="col s12" v-for="product in filters.filtered_products" :key="product.id">
                                <ProductList :product_name="product.product_name"
                                             :img="product.file"
                                             :company_name="product['store'].name"
                                             :price="product.price"
                                             :id="product.id"
                                             :encoded_name="product['store'].url_encoded_name"
                                             :description="product.description"
                                />
                            </div>
                        </template>
                    </div>
                </template>
                <template v-else>
                    <div class="row">
                        <div class="col s12 m6 l4" v-for="company in filters.filtered_products" :key="company.id">
                            <company :company_name="company.name"
                                     :sales="company.item_count"
                                     :id="company.id"
                                     :uri="company.store_uri"
                                     :encoded_name="company.url_encoded_name"
                                     :logo="company.logo_uri"
                            />
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <!--        <pagination/>-->
        <paginate
                :page-count="WAITING_FOR_DATAS.pagination.pages"
                :page-range="3"
                :margin-pages="2"
                :click-handler="clickCallback"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'">
        </paginate>
        <h1>{{WAITING_FOR_DATAS.pagination.skip}}</h1>
        <footer-wrapper/>
    </div>
</template>

<script>
    import navbar from '../components/Navbar'
    import footer from '../components/Footer'
    import Search from '../components/category/Search'
    import FilterByCategory from '../components/category/FilterByCategory'
    import FilterByTag from '../components/category/FilterByTag'
    import FilterByPrice from '../components/category/FilterByPrice'
    // import pagination from '../components/home/Pagination'
    import filters from '../components/category/Filters'
    import ProductList from '../components/category/ProductList'
    import products from '../components/home/Products'
    import company from '../components/home/Companies'

    import {mapState, mapActions} from 'vuex'

    import Paginate from 'vuejs-paginate'


    export default {
        data() {
            return {
                categories: [],
                tags: [],
                max_price: [],
                min_price: [],
            }
        },
        components: {
            navbar,
            'footer-wrapper': footer,
            Search,
            FilterByCategory,
            FilterByTag,
            FilterByPrice,
            products,
            // pagination,
            filters,
            ProductList,
            company,
            'paginate': Paginate
        },
        methods: {
            ...mapActions(['GET_PRODUCTS', '$GET_ALL_PRODUCTS', '$GET_ALL_COMPANIES']),
            clickCallback(currentPage) {
                console.log(currentPage)
            }
        },
        computed: {
            // ...mapGetters(['FILTERED_ITEMS']),
            ...mapState(['navigation', 'filters']),
            WAITING_FOR_DATAS() {
                let category_arr = [];
                let tag_arr = [];
                let price_arr = [];
                this.filters.products.forEach(i => {
                    category_arr.push(i.category);
                    tag_arr.push(i.tag);
                    price_arr.push(Number(i.price))
                });
                let postsCount = Number(this.filters.products.length);
                let perPage = 2;
                let pages = postsCount / perPage

                let data = {
                    products: this.filters.products,
                    category_arr: new Set(category_arr),
                    tag_arr: new Set(tag_arr),
                    max_price: Math.max.apply(null, price_arr),
                    min_price: Math.min.apply(null, price_arr),
                    price_arr,
                    pagination: {
                        postsCount,
                        perPage,
                        pages,
                        skip: (perPage * pages) - perPage
                    }
                }
                return data
            },
        },
        async created() {
            await this.$GET_ALL_PRODUCTS();
            await this.$GET_ALL_COMPANIES();
        }
    }

</script>


<style scoped>
    .collapsible {
        border: none;
        box-shadow: 0 0 0 0;
        -webkit-box-shadow: 0 0 0 0;
    }

</style>