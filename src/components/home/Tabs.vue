<template>
    <div class="tabs-header container row">
        <div class="col s12">
            <div class="row">
                <div class="col s12 m8 l9">
                    <ul class="tabs">
                        <li class="tab col s3"><a href="#companies">Companies</a></li>
                        <li class="tab col s3"><a href="#products">Products</a></li>
                    </ul>
                </div>
                <div class="col s12 m4 l3">
                    <search/>
                </div>
            </div>
        </div>

        <div class="col s12 tabs-content">
            <div class="row">
                <div class="col s12 m8 l9">
                    <div id="companies" class="col s12 m12 l12">
                        <div class="row company-content">
                            <companies2 v-for="company in companies.company_item"
                                        :key="company.id"
                                        :company_name="company.company_name"
                                        :rate="company.rate"
                                        :views="company.views"
                                        :sales="company.sales"
                                        :id="company.id"
                            />
                        </div>
                    </div>
                    <div id="products" class="col s12 m12 l12">
                        <div class="row">
                            <products v-for="product in products.product_item"
                                      :key="product.id"
                                      :title="product.title"
                                      :company_name="product.company_name"
                                      :price="product.price"
                                      :id="product.id"
                                      :description="product.description"
                                      :tag="product.tag"
                            />
                        </div>
                    </div>
                </div>
                <div class="col s12 m4 l3" style="padding: 0 30px;">
                    <div class="top-company-box">
                        <p class="top">TOP COMPANIES</p>
                        <top-companies v-for="top in topCompany.top_company_item"
                                       :key="top.id"
                                       :company_name="top.company_name"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import companies2 from './Companies'
    import products from './Products'
    import topCompanies from './TopCompanies'
    import search from './Search'

    import SkeletonCard from 'vue-ultimate-skeleton-cards/Components/SkeletonCard'

    import {mapState} from 'vuex'

    const asyncComponent = ()=> ({
        component: import('./Companies'),
        loading: SkeletonCard,
        delay: 200,
        timeout: 3000
    });

    export default {
        components: {
            // companies2,
            products,
            'top-companies': topCompanies,
            search,
            'companies2': asyncComponent
        },
        computed: {
            ...mapState(['companies', 'products', 'topCompany']),
        },
    }
</script>

<style scoped>
    .tabs-header {
        margin-top: 40px;
        /*padding: 0 100px;*/
    }

    .tabs {
        background-color: #fafafa;
    }

    .tabs li a {
        color: #b9b3b3;
    }

    .tabs li a:hover {
        color: #666;
    }

    .tabs .tab a.active {
        background-color: transparent;
        color: #666;
    }

    .tabs-content {
        margin-top: 25px;
    }

    .company-content {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .top-company-box {
        padding: 20px;
        background-color: #f2f2f2;
        border: 1px solid #e6e6e6;
        border-radius: 20px;
    }

    .top {
        color: #545454;
        font-size: 18px;
        text-align: center;
        font-weight: bold;
        border-bottom: 1px solid #e6e6e6;
    }
</style>