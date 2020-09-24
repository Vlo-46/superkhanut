<template>
    <div class="shop">
        <WrapperNav/>
        <Header/>
        <NavBar/>
        <div class="container shop-content">
            <div class="row">
                <div class="col s3">
                    <ul>
                        <h5>Categories</h5>
                        <li>
                            <p>
                                <label>
                                    <input type="checkbox"/>
                                    <span>Category</span>
                                </label>
                            </p>
                        </li>
                        <li>
                            <p>
                                <label>
                                    <input type="checkbox"/>
                                    <span>Category</span>
                                </label>
                            </p>
                        </li>
                        <li>
                            <p>
                                <label>
                                    <input type="checkbox"/>
                                    <span>Category</span>
                                </label>
                            </p>
                        </li>
                        <li>
                            <p>
                                <label>
                                    <input type="checkbox"/>
                                    <span>Category</span>
                                </label>
                            </p>
                        </li>


                    </ul>
                    <ul>
                        <h5>FILTER BY PRICE</h5>
                        <div>
                            <input type="range" v-model="price" :min="min_price" :max="max_price" step="1"
                                   class="custom-range">
                            <span class="filtered_price">{{price}}&nbsp;Դ&nbsp;-&nbsp;{{max_price}}&nbsp;Դ</span>
                        </div>
                    </ul>
                    <ul>
                        <h5>FILTER BY TAGS</h5>
                        <div class="chip">
                            Tag
                            <i class="close material-icons">close</i>
                        </div>
                        <div class="chip">
                            Tag
                            <i class="close material-icons">close</i>
                        </div>
                        <div class="chip">
                            Tag
                            <i class="close material-icons">close</i>
                        </div>
                        <div class="chip">
                            Tag
                            <i class="close material-icons">close</i>
                        </div>
                    </ul>
                </div>
                <div class="col s9 category-content">
                    <h5>PRODUCTS</h5>
                    <div class="row">
                        <div class="col s4" v-for="p in products" :key="p.id">
                            <products :product_name="p.product_name"
                                     :price="p.price"
                                     :discount="p.discount"
                                     :quantity="p.quantity"
                                     :img="p.img"
                                     :tag="p.tag"
                                     :id="p.id"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import WrapperNav from '../../components/Navbar'
    import Header from '../../components/company-example-3/Header'
    import NavBar from '../../components/company-example-3/NavBar'
    import Footer from '../../components/company-example-3/Footer'
    import products from '../../components/company-example-3/Product'
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                products: [],
                max_price: 0,
                min_price: 0,
                price: 0
            }
        },
        computed: {
            ...mapState(['example_3_products'])
        },
        components: {
            WrapperNav,
            Header,
            NavBar,
            Footer,
            products
        },
        mounted() {
            this.products = this.example_3_products.products
        }
    }

</script>

<style scoped>
    .shop-content {
        margin-top: 80px;
    }

    input[type="checkbox"]:checked + span:not(.lever):before {
        border-right: 2px solid #7a736e;
        border-bottom: 2px solid #7a736e;
    }

    .custom-range::-webkit-slider-thumb {
        background: #7a736e;
    }

    .custom-range::-moz-range-thumb {
        background: #7a736e;
    }

    .custom-range::-ms-thumb {
        background: #7a736e;
    }

    .filtered_price {
        font-size: small;
        color: #777;
    }

    ul {
        margin: 30px 0;
    }

    h5 {
        margin-bottom: 20px;
    }
    .category-content {
        padding: 0 30px;
    }
</style>