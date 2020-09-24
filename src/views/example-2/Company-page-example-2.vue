<template>
    <div class="example-2">
<!--        <NavWrapper/>-->
        <Header/>
        <NavBar/>
        <Slider/>
        <div class="best-sales container">
            <h4 class="center-align">Best Sales</h4>
            <div class="best_sales_slider">
                <Best_sales v-for="b in GET_BEST_PRODUCTS" :key="b.id"
                            :product_name="b.product_name"
                            :price="b.price"
                            :discount="b.discount"
                            :quantity="b.quantity"
                            :img="b.img"
                            :id="b.id"
                />
            </div>
        </div>
        <Home_products/>
        <Footer/>
    </div>
</template>

<script>
    // import NavWrapper from '../../components/Navbar'
    import Header from '../../components/company-example-2/Header'
    import NavBar from '../../components/company-example-2/Navbar'
    import Slider from '../../components/company-example-2/Slider'
    import Best_sales from '../../components/company-example-2/BestSales'
    import Home_products from '../../components/company-example-2/Home-products'
    import Footer from '../../components/company-example-2/Footer'

    import {mapGetters} from 'vuex'
    import {tns} from "../../../node_modules/tiny-slider/src/tiny-slider"


    export default {
        components: {
            // NavWrapper,
            Header,
            NavBar,
            Slider,
            Best_sales,
            Home_products,
            Footer
        },
        computed: {
            ...mapGetters(['GET_BEST_PRODUCTS'])
        },
        mounted() {
            let slider = tns({
                autoplay: true,
                slideBy: 1,
                autoplayButtonOutput: false,
                mouseDrag: true,
                autoHeight: true,
                "items": 2,
                "controls": false,
                "responsive": {
                    "350": {
                        "items": 3,
                        "controls": true,
                        "edgePadding": 30
                    },
                    "500": {
                        "items": 4
                    }
                },
                "container": ".best_sales_slider",
                // "swipeAngle": false,
                "speed": 1000
            });
            slider.play();
        }
    }
</script>

<style scoped>
    .best-sales {
        margin-top: 80px;
    }
</style>