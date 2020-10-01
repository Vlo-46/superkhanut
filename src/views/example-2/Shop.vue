<template>
    <div class="shop-page">
        <NavWrapper/>
        <Header/>
        <Navbar/>
        <div class="container">
            <div class="row categories">
                <div class="col s3">
                    <h5>Categories</h5>
                    <ul>
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
                            <input type="range" min="100" max="100000" step="1"
                                   class="custom-range">
                            <span class="filtered_price">100&nbsp;Դ&nbsp;-&nbsp;100000&nbsp;Դ</span>
                        </div>
                    </ul>
                </div>
                <div class="col s9">
                    <h5>Amount of products</h5>
                    <div class="row">
                        <div class="col s3" v-for="p in products" :key="p.id">
                            <Product_item :id="p.id"
                                          :img="p.img"
                                          :price="p.price"
                                          :discount="p.discount"
                                          :product_name="p.product_name"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavWrapper from '../../components/Navbar'
    import Navbar from '../../components/company-example-2/Navbar'
    import Header from '../../components/company-example-2/Header'
    import Product_item from '../../components/company-example-2/Product-item'


    export default {
        components: {
            NavWrapper,
            Navbar,
            Header,
            Product_item
        },
        data() {
            return {
                products: [
                    {
                        id: 1,
                        product_name: 'Product name',
                        price: '1000',
                        discount: '1200',
                        img: require('@/assets/about.jpg'),
                        category: 'category'
                    },
                    {
                        id: 2,
                        product_name: 'Product name',
                        price: '1500',
                        discount: '1600',
                        img: require('@/assets/about.jpg'),
                        category: 'category'
                    },
                    {
                        id: 3,
                        product_name: 'Product name',
                        price: '2550',
                        discount: '2700',
                        img: require('@/assets/about.jpg'),
                        category: 'category'
                    },
                    {
                        id: 4,
                        product_name: 'Product name',
                        price: '3400',
                        discount: '3600',
                        img: require('@/assets/about.jpg'),
                        category: 'category'
                    },
                    {
                        id: 5,
                        product_name: 'Product name',
                        price: '6560',
                        discount: '8000',
                        img: require('@/assets/about.jpg'),
                        category: 'category'
                    },
                    {
                        id: 6,
                        product_name: 'Product name',
                        price: '780',
                        discount: '1000',
                        img: require('@/assets/about.jpg'),
                        category: 'category'
                    },
                ],
            }
        },
    }
</script>

<style scoped>
    .categories {
        margin-top: 50px;
    }

    .custom-range::-webkit-slider-thumb {
        background: #0a662e;
    }

    .custom-range::-moz-range-thumb {
        background: #0a662e;
    }

    .custom-range::-ms-thumb {
        background: #0a662e;
    }

    .filtered_price {
        font-size: small;
        color: #777;
    }

    ul {
        margin: 30px 0;
    }
</style>