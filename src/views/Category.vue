<template>
    <div class="wraper">
        <navbar/>
        <Search/>
        <filters/>
        <div class="row filterBoxs container">
            <div class="col s12 m4 l3">
                <div class="row">
                    <FilterByCategory :categories="categories"/>
                    <FilterByTag :tags="tags"/>
                    <FilterByPrice :max="max_price" :min="min_price"/>
                </div>
            </div>
            <div class="col s12 m8 l9">
                <div class="row" v-if="navigation.section === 'grid'">
                    <template v-if="products.filtered === false">
                        <div class="col s12 m6 l4" v-for="product in products.products" :key="product.id">
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
                        <div class="col s12 m6 l4" v-for="product in products.filtered_products" :key="product.id">
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
                    <template v-if="products.filtered === false">
                        <div class="col s12" v-for="product in products.products" :key="product.id">
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
                        <div class="col s12" v-for="product in products.filtered_products" :key="product.id">
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
            </div>
        </div>
        <pagination/>
        <footer-wraper/>
    </div>
</template>

<script>
    import navbar from '../components/Navbar'
    import footer from '../components/Footer'
    import Search from '../components/category/Search'
    import FilterByCategory from '../components/category/FilterByCategory'
    import FilterByTag from '../components/category/FilterByTag'
    import FilterByPrice from '../components/category/FilterByPrice'
    import pagination from '../components/home/Pagination'
    import filters from '../components/category/Filters'
    import ProductList from '../components/category/ProductList'
    import products from '../components/home/Products'
    import {mapState, mapActions} from 'vuex'


    export default {
        data() {
            return {
                categories: [],
                tags: [],
                max_price: [],
                min_price: []
            }
        },
        components: {
            navbar,
            'footer-wraper': footer,
            Search,
            FilterByCategory,
            FilterByTag,
            FilterByPrice,
            products,
            pagination,
            filters,
            ProductList
        },
        methods: {...mapActions(['GET_PRODUCTS', 'GET_ALL_PRODUCTS_IN_COMPANIES'])},
        computed: {
            ...mapState(['products', 'navigation']),
        },
        async created() {
            await this.GET_ALL_PRODUCTS_IN_COMPANIES();

            let category_arr = [];
            let tag_arr = [];
            let price_arr = [];

            await this.products.products.forEach(i => {
                category_arr.push(i.category);
                tag_arr.push(i.tag);
                price_arr.push(Number(i.price))
            });
            this.categories = new Set(category_arr);
            this.tags = new Set(tag_arr);
            this.max_price = Math.max.apply(null, price_arr);
            this.min_price = Math.min.apply(null, price_arr)
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