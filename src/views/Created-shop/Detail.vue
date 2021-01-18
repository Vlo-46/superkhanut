<template>
    <div class="company-detail">
        <navbar-wrapper :website_logo="website_logo"/>
        <NavBar :company_name="this.$route.params.pathMatch"/>
        <div class="detail-field container">
            <div class="row">
                <div class="col s12 m12 l6">
                    <VueSlickCarousel
                            ref="c1"
                            :asNavFor="$refs.c2"
                            :focusOnSelect="true">
                        <div class="slider-image-field"><img :src="product.file" alt=""></div>
                        <div class="slider-image-field"><h3>2</h3></div>
                        <div class="slider-image-field"><h3>3</h3></div>
                        <div class="slider-image-field"><h3>4</h3></div>
                    </VueSlickCarousel>
                    <VueSlickCarousel
                            ref="c2"
                            :asNavFor="$refs.c1"
                            :slidesToShow="4"
                            :focusOnSelect="true">
                        <div><img :src="product.file" alt=""></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </VueSlickCarousel>
                </div>
                <div class="col s12 m12 l6">
                    <div class="product-info-field">
                        <div class="product-title">
                            <h2>{{product.product_name}}</h2>
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
                                <button class="buy-btn btn" @click="ADD_TO_BASKET">ADD TO CART</button>
                            </div>
                        </div>
                        <div class="product-category">
                            <span><b>Category:</b>&nbsp; <span class="category-style">{{product.category}}</span></span>
                        </div>
                        <div class="product-tags">
                            <span><b>Tags:</b>&nbsp;<span class="category-style">{{product.tag}}</span></span>
                        </div>
                        <div class="product-id">
                            <span><b>ID:</b>&nbsp; <span class="id-style">AC&nbsp;{{product.id}}</span></span>
                        </div>
                        <div class="share">
                            <p class="title">Share Links</p>
                            <div class="hr"></div>
                            <div class="total-views">
                                <!-- AddToAny BEGIN -->
                                <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
                                    <a class="a2a_button_facebook"></a>
                                    <a class="a2a_button_facebook_messenger"></a>
                                    <a class="a2a_button_pinterest"></a>
                                    <a class="a2a_button_twitter"></a>
                                    <a class="a2a_button_telegram"></a>
                                    <a class="a2a_button_vk"></a>
                                    <a class="a2a_button_odnoklassniki"></a>
                                    <a class="a2a_button_email"></a>
                                    <a class="a2a_button_google_gmail"></a>
                                    <a class="a2a_button_whatsapp"></a>
                                    <a class="a2a_button_viber"></a>
                                    <a class="a2a_button_copy_link"></a>
                                </div>
                                <!-- AddToAny END -->
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <company-footer :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"
                        :company_name="this.$route.params.pathMatch"/>
    </div>
</template>

<script>
    import NavWrapper from '../../components/Navbar'
    import NavBar from '../../components/Created-shop-1-components/Navbar'
    import footer from '../../components/Created-shop-1-components/Footer'
    import axios from 'axios'
    import keys from "../../keys";
    import {mapActions, mapState} from "vuex";

    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import Swal from 'sweetalert2'

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
            'company-footer': footer,
            VueSlickCarousel
        },
        methods: {
            ...mapActions(['GET_SHOP_INFO', 'GET_COMPANY_SETTINGS', 'GET_SETTINGS']),
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
                    quantity: this.quantity,
                    tag: this.product.tag
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
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Product in the shopping cart',
                    showConfirmButton: false,
                    timer: 1500
                })
            },
        },
        computed: {
            ...mapState(['company_admin_settings', 'settings']),
            website_logo() {
                return this.settings.website_logo
            },
        },
        async created() {
            let data = {
                company: this.$route.params.pathMatch,
                id: this.$route.params.id
            };

            this.company_name = this.$route.params.pathMatch;
            let company_name = this.$route.params.pathMatch;
            await this.GET_SHOP_INFO(company_name);
            await this.GET_COMPANY_SETTINGS(company_name);

            axios.post(`${keys.baseURI}/api/store/item/details`, {data})
                .then(res => {
                    this.product = res.data
                })
                .catch(e => console.log(e))
            this.GET_SETTINGS()
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

    .slider-image-field {
        height: 400px;
    }

    .slider-image-field img {
        cursor: ew-resize;
    }
</style>