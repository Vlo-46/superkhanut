<template>
    <div class="wraper">
        <navbar/>
        <Search/>
        <filters/>
        <div class="row filterBoxs container">
            <div class="col s12 m4 l3">
                <div class="row">
                    <FilterByCategory/>
                    <FilterByTag/>
                    <FilterByPrice/>
                </div>
            </div>
            <div class="col s12 m8 m9">
                <div class="row" v-if="navigation.section === 'grid'">
                    <products v-for="product in products.product_item"
                              :key="product.id"
                              :company_name="product.company_name"
                              :description="product.description"
                              :title="product.title"
                              :price="product.price"
                              :id="product.id"
                    />
                </div>
                <div class="row" v-else>
                    <ProductList v-for="product in products.product_item"
                                 :key="product.id"
                                 :company_name="product.company_name"
                                 :description="product.description"
                                 :title="product.title"
                                 :price="product.price"
                                 :id="product.id"
                    />
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
        methods: {...mapActions(['GET_PRODUCTS'])},
        computed: {
            ...mapState(['products', 'navigation']),
        },
    }

</script>


<style scoped>
    .collapsible {
        border: none;
        box-shadow: 0 0 0 0;
        -webkit-box-shadow: 0 0 0 0;
    }

</style>