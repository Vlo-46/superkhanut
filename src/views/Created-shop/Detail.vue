<template>
    <div class="company-detail">
        <navbar-wrapper/>
        <NavBar :company_name="this.$route.params.pathMatch"/>
        <div class="detail-field container">
            <div class="row">
                <div class="col s12 m6 l6">
                    <div class="detail-img-field">
                        <img :src="product.file" alt="">
                    </div>
                </div>
                <div class="col s12 m6 l6 product-info-field">
                    <div class="product-title">
                        <h2>{{product.company_name}}</h2>
                    </div>
                    <div class="product-price">
                        <h4>{{product.price}}&nbsp; AMD &nbsp;
                            <span v-if="product.discount_price" class="discount">
                                {{product.discount_price}}&nbsp;AMD
                            </span>
                        </h4>
                    </div>
                    <div class="product-description">
                        <p>{{product.description}}</p>
                    </div>
                    <div class="product-quantity">
                        <div class="sub" @click="sub"><i class="material-icons">remove_circle_outline</i></div>
                        <div class="quantity">
                            <input type="number" min="1" max="99" step="1" v-model="quantity">
                        </div>
                        <div class="add" @click="add"><i class="material-icons">add_circle_outline</i></div>
                        <div class="product-buy">
                            <button class="buy-btn btn" @click="ADD_TO_BASKET">Buy</button>
                        </div>
                    </div>
                    <div class="product-category">
                        <span><b>Category:</b>&nbsp; <span class="category-style">{{product.category}}</span></span>
                    </div>
                    <div class="product-id">
                        <span><b>ID:</b>&nbsp; <span class="id-style">AC&nbsp;{{product.id}}</span></span>
                    </div>
                    <div class="share">
                        <p class="title">Share Links</p>
                        <div class="hr"></div>
                        <ul>
                            <div><a href=""><i class="fab fa-instagram"/></a></div>
                            <div><a href=""><i class="fab fa-facebook-f"/></a></div>
                            <div><a href=""><i class="fab fa-twitter"/></a></div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <company-footer/>
    </div>
</template>

<script>
    import NavWrapper from '../../components/Navbar'
    import NavBar from '../../components/Created-shop-components/Navbar'
    import footer from '../../components/Created-shop-components/Footer'
    import axios from 'axios'
    import keys from "../../keys";

    export default {
        props: ['id'],
        data() {
            return {
                quantity: 1,
                product: {}
            }
        },
        components: {
            'navbar-wrapper': NavWrapper,
            NavBar,
            'company-footer': footer
        },
        methods: {
            sub() {
                if (this.quantity > 1) {
                    this.quantity--
                } else {
                    this.quantity = 1
                }
            },
            add() {
                this.quantity++
            },
            ADD_TO_BASKET() {
                let basket_list = keys.basket;

                let basket_item = {
                    company_name: this.$route.params.pathMatch,
                    id: this.product.id,
                    file: this.product.file,
                    product_name: this.product.product_name,
                    price: this.product.price,
                    discount_price: this.product.discount_price,
                    product_category: this.product.product_category,
                    quantity: this.quantity
                };

                let array = [];

                let local_item = localStorage.getItem(basket_list);

                array = JSON.parse(local_item) || [];

                for (let i = 0; i < array.length; i++) {
                    if (array[i].id === basket_item.id) {
                        let index = array.indexOf(array[i]);
                        // console.log(index)
                        array.splice(index, 1)
                    }
                }

                array.push(basket_item);
                localStorage.setItem(basket_list, JSON.stringify(array))
            }
        },
        created() {
            let data = {
                company: this.$route.params.pathMatch,
                id: this.$route.params.id
            };

            axios.post(`${keys.baseURI}/api/store/item/details`, {data})
                .then(res => {
                    this.product = res.data
                })
                .catch(e => console.log(e))
        }
    }
</script>

<style scoped>
    .detail-field {
        margin-top: 100px;
    }

    .product-description {
        font-size: 15px;
        font-weight: 400;
        line-height: 180%;
        color: #aaa;
        margin-top: 20px;
    }

    .discount {
        color: #a9a9a9;
        font-size: small;
        font-weight: 400;
        text-decoration: line-through;
    }

    h2 {
        font-size: 25px;
        font-weight: 500;
        color: #111;
    }

    h4 {
        font-size: 22px;
        font-weight: 500;
        color: #111;
    }

    img {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .product-info-field div {
        margin-bottom: 20px;
    }

    .category-style {
        list-style-type: none;
        display: inline-block;
        color: #aaa;
        font-weight: 500;
    }

    .id-style {
        list-style-type: none;
        display: inline-block;
        color: #aaa;
        font-weight: 500;
    }

    .product-quantity {
        display: flex;
        border-bottom: 1px solid #eee;
    }


    .quantity input {
        /*border: 2px solid #eee;*/
        text-align: center;
        margin: 0;
        border: none;
    }

    .add, .sub {
        /*border: 2px solid #eee;*/
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .buy-btn {
        height: 100%;
        cursor: pointer;
        border: 1px solid #aaa;
        color: #111;
        background-color: #fff;
    }

    .add, .sub > i {
        cursor: pointer;
    }


    .share {
        margin-top: 40px;
    }

    .hr {
        width: 100px;
        height: 3px;
        background-color: #6ba229;
        border-radius: 5px;
    }

    .title {
        color: #111;
        font-size: 20px;
        font-weight: 400;
    }

    .share ul {
        display: flex;
        background: #f1f1f1;
        height: 50px;
    }

    .share ul div {
        margin-left: 20px;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .share a {
        color: #6b6b6b;
    }

    .share i {
        font-size: 15px;
    }

    .share a:hover {
        color: #6ba229;
    }
</style>