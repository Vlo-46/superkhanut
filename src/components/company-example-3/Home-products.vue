<template>
    <div class="home-products">
        <div class="row">
            <div class="col s12">
                <ul class="tabs">
                    <li class="tab col s3"><a href="#new">New</a></li>
                    <li class="tab col s3"><a href="#best">Best</a></li>
                    <li class="tab col s3"><a href="#top">Top</a></li>
                </ul>
            </div>

            <div id="new" class="col s12">
                <div class="row">
                    <div class="col s3" v-for="p in products" :key="p.id">
                        <product :product_name="p.product_name"
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
            <div id="best" class="col s12">Test 2</div>
            <div id="top" class="col s12">Test 3</div>
        </div>
    </div>
</template>

<script>
    import product from './Product'
    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                products: [],
                best_products: []
            }
        },
        components: {
            product
        },
        computed: {
            ...mapState(['example_3_products'])
        },
        methods: {
            ...mapActions(['GET_BEST_PRODUCTS'])
        },
        mounted() {
            this.products = this.example_3_products.products
        }
    }
</script>

<style scoped>
    .home-products {
        margin-top: 100px;
    }

    .tabs {
        background-color: #f3f3f3;
    }

    .tabs a {
        color: #333;
    }

    .tabs a:hover {
        background-color: transparent;
        color: #000;
        font-weight: bold;
    }

    .tabs .tab a.active {
        background-color: transparent;
        color: #000;
        font-weight: bold;
    }

</style>