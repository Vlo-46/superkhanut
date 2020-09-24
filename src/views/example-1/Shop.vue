<template>
    <div class="shop-page">
        <NavWrapper/>
        <Header/>
        <NavBar/>
        <div class="container shop">
            <div class="row">
                <div class="col s3">
                    <h5>CATEGORIES</h5>
                    <ul>
                        <li><a href="">Category</a></li>
                        <li><a href="">Category</a></li>
                        <li><a href="">Category</a></li>
                        <li><a href="">Category</a></li>
                        <li><a href="">Category</a></li>
                    </ul>
                    <ul>
                        <h5>FILTER BY PRICE</h5>
                        <div>
                            <input type="range" v-model="price" :min="min_price" :max="max_price" step="1"
                                   class="custom-range"
                                   @change="FILTER_BY_PRICE({min: min_price, max: max_price, price})">
                            <span class="filtered_price">{{price}}&nbsp;Դ&nbsp;-&nbsp;{{max_price}}&nbsp;Դ</span>
                        </div>
                    </ul>
                    <ul class="tag-box">
                        <h5>FILTER BY TAGS</h5>
                        <li v-for="i in filtered_price" :key="i.id">
                            <label>
                                <input type="checkbox" @click="FILTER_BY_PRICE(i.tag)"/>
                                <span>{{i.tag}}</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="col s9">
                    <div class="imgBox">
                        <img src="../../assets/kitchen.jpg" alt="">
                    </div>
                    <hr>
                    <div class="product-items">
                        <div class="row">
                            <h4>Products</h4>
                            <div class="col s4" v-for="p in filtered_price" :key="p.id">
                                <Products :id="p.id"
                                          :category="p.category"
                                          :img="p.img"
                                          :product_name="p.product_name"
                                          :price="p.price"
                                          :discount_price="p.discount_price"
                                          :tag="p.tag"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../../components/company-example-1/Header'
    import NavBar from '../../components/company-example-1/Navbar'
    import Products from '../../components/company-example-1/NewProducts'
    import Footer from '../../components/company-example-1/Footer'
    import NavWrapper from '../../components/Navbar'


    import {mapState, mapGetters} from 'vuex'

    export default {
        data() {
            return {
                max_price: Number,
                min_price: 0,
                price: 0,
                products: [],
                tag: []
            }
        },
        beforeMount() {
            this.example_1_products.products.forEach(i => {
                let array = [];
                array.push(Number(i.price));
                this.max_price = Math.max.apply(null, array)
            })
        },
        components: {
            Header,
            NavBar,
            Products,
            Footer,
            NavWrapper,
        },
        computed: {
            ...mapState(['example_1_products']),
            ...mapGetters(['FILTER_BY_PRICE', 'FILTER_BY_TAGS']),
            filtered_price: function () {
                return this.FILTER_BY_PRICE({min: this.min_price, max: this.max_price, price: this.price})
            }
        },

    }
</script>

<style scoped>
    .shop {
        margin: 100px auto;
    }

    ul {
        padding: 20px;
        background: #f8f8f8;
    }

    ul li a {
        font-size: 15px;
        line-height: 24px;
        position: relative;
        display: block;
        padding: 5px 0;
        text-transform: capitalize;
        color: #333;
    }

    ul li a:hover {
        color: #49b14d;
        transition: 0.5s;
        text-decoration: revert;
    }


    .tag-box li {
        margin: 10px auto;
    }

    h5 {
        margin-bottom: 20px;
    }

    h4 {
        color: #333c4a;
        font-size: 28px;
        font-weight: 800;
    }

    .imgBox img {
        width: 100%;
        height: 200px;
        display: block;
    }

    .product-items {
        margin-top: 50px;
    }

    .custom-range::-webkit-slider-thumb {
        background: #49b14d;
    }

    .custom-range::-moz-range-thumb {
        background: #49b14d;
    }

    .custom-range::-ms-thumb {
        background: #49b14d;
    }

    .filtered_price {
        font-size: small;
        color: #777;
    }
</style>