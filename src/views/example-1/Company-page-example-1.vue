<template>
    <div class="example-1">
<!--        <NavWrapper/>-->
        <Header/>
        <CompanyNavBar/>
        <div class="container">
            <Slider/>
            <Banner/>
            <div class="NewProducts">
                <h4>New Products</h4>
                <div class="new-products row">
                    <div class="col s3" v-for="p in products" :key="p.id">
                        <NewProducts :id="p.id"
                                     :category="p.category"
                                     :img="p.img"
                                     :product_name="p.product_name"
                                     :price="p.price"
                                     :discount_price="p.discount_price"
                                     :tag="p.tag"
                        />
                    </div>
                </div>
            </div>
            <Advertising/>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import CompanyNavBar from '../../components/company-example-1/Navbar'
    import Slider from '../../components/company-example-1/Slider'
    import NewProducts from '../../components/company-example-1/NewProducts'
    import Header from '../../components/company-example-1/Header'
    import Advertising from '../../components/company-example-1/Advertising'
    import Banner from '../../components/company-example-1/Banner'
    import Footer from '../../components/company-example-1/Footer'
    // import NavWrapper from '../../components/Navbar'

    import {mapState} from 'vuex'


    export default {
        data() {
            return {
                products: []
            }
        },
        components: {
            CompanyNavBar,
            Slider,
            NewProducts,
            Header,
            Advertising,
            Banner,
            Footer,
            // NavWrapper
        },
        mounted() {
            this.products = this.example_1_products.products
        },
        computed: {...mapState(['example_1_products'])},
    }
</script>

<style scoped>
    h4 {
        color: #333c4a;
        font-size: 28px;
        font-weight: 800;
    }

    .NewProducts {
        margin-top: 50px;
    }
</style>