<template>
    <div class="favorite">
        <Navbar/>

        <div class="container favorite-box" v-if="favorite_list.favorite_list.length < 1">
            <h2>You don't have any preferred products</h2>
        </div>

        <div class="container" v-else>
            <div>
                <button class="removeAll" @click="REMOVE_ALL_ITEMS">Remove All</button>
            </div>
            <div class="row">
                <div class="col s12 m6 l4" v-for="item in favorite_list.favorite_list" :key="item.id">
                    <div class="pruduct-item">
                        <div class="imgBox">
                            <a href=""><img :src="item.file" alt=""></a>
                        </div>
                        <div class="product-body row">
                            <div class="col s12 m12 l6" style="align-self: flex-end;">
                                <div><p><a href="" class="product_title">{{item.product_name}}</a></p></div>
                                <div v-if="item.discount_price"><span class="product-discount-price">{{item.discount_price}}&nbsp;AMD</span>
                                </div>
                                <div v-else><span class="product-price">{{item.product_price}}&nbsp;AMD</span></div>
                                <div><a href="" class="by_company"><em>By {{item.company_name}} &nbsp; </em></a></div>
                            </div>
                            <div class="col s12 m12 l6 previewBox">
                                <div>
                                    <button class="preview">Preview</button>
                                </div>
                                <div>
                                    <button class="delete" @click="DELETE_FAVORITE_ITEM(item.id)">Delete</button>
                                </div>
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
    import Navbar from '../components/Navbar'
    import Footer from '../components/Footer'

    import {mapActions, mapState} from 'vuex'

    import keys from "../keys";

    export default {
        data() {
            return {
                favorite_items: []
            }
        },
        methods: {
            ...mapActions(['GET_FAVORITE_LIST_ITEMS', 'DELETE_FAVORITE_ITEM', 'REMOVE_ALL_ITEMS']),
        },
        computed: {
            ...mapState(['favorite_list'])
        },
        components: {
            Navbar,
            Footer
        },
        async created() {
            await JSON.parse(localStorage.getItem(keys.favorite)).forEach(i => {
                this.favorite_items.push(i)
            })
            await this.GET_FAVORITE_LIST_ITEMS(this.favorite_items)
        }
    }
</script>

<style scoped>

    .container {
        margin-top: 50px;
    }

    .favorite-box {
        border: 1px solid #ccc;
        padding: 50px 25px;
        text-align: center;
        margin: 50px auto;
    }

    .favorite-box h2 {
        color: #000;
        font-size: 35px;
        font-weight: 500;
        font-style: italic;
        letter-spacing: 1px;
    }

    img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 5px 5px 0 0;
    }

    .pruduct-item {
        height: auto;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        box-shadow: #ccc 0 0 16px;
        border-radius: 5px;
        margin-bottom: 20px;
    }

    .imgBox {
        height: 50%;
        margin-bottom: 10px;
        display: flex;
        position: relative;
    }

    .product_title {
        color: #4d4d4d;
        font-size: 14px;
        font-weight: bold;
        padding-bottom: 15px;
    }

    .preview {
        color: #666;
        border: 1px solid #ccc;
        background-color: #fafafa;
        padding: 5px;
        cursor: pointer;
        border-radius: 2px;
        float: right;
    }

    .preview:hover {
        background-color: #ccc;
        color: #fff;
    }

    .delete {
        color: #fff;
        border: 1px solid red;
        background-color: red;
        padding: 5px;
        cursor: pointer;
        border-radius: 2px;
    }

    .delete:hover {
        background-color: #fff;
        color: red;
    }

    .previewBox {
        align-self: flex-end;
    }

    .product-body {
        display: flex;
        height: 50%;
        padding: 7px 12px;
        position: relative;
    }

    .by_company {
        color: #4d4d4d;
        font-size: 16px;
        position: absolute;
        top: 0;
    }


    .product-price {
        font-weight: bold;
    }

    .previewBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .removeAll {
        margin: 30px 0;
        color: red;
        border: 1px solid red;
        background-color: #fff;
        padding: 5px;
        cursor: pointer;
        border-radius: 2px;
    }

    .removeAll:hover {
        background-color: red;
        color: #fff;
    }

    .product-discount-price {
        color: #a9a9a9;
        font-size: small;
        font-weight: 400;
        text-decoration: line-through;
    }
</style>