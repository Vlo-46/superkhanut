<template>
    <div class="product" id="product-1">
        <div class="img-box"><img src="../../../assets/no-img.jpg" @click.prevent="OPEN_RIGHT_PANEL('product')"></div>
        <div class="item-body" @click.prevent="OPEN_RIGHT_PANEL('product')">
            <div class="type-box"><span :style="right_panel.product.product_category">Category</span></div>
            <div class="product-name-box"><a  @click.prevent="" :style="right_panel.product.product_name">Product name</a></div>
            <div class="price-box" @click="OPEN_RIGHT_PANEL('product')">
                <div><span class="price" :style="right_panel.product.product_price">price&nbsp;AMD</span></div>
                <div><span class="discount">Discount price&nbsp;AMD</span></div>
            </div>
        </div>
        <div class="product-action" @click="OPEN_RIGHT_PANEL('icon')">
            <div>
                <button><i class="material-icons" :style="right_panel.icon">visibility</i></button>
            </div>
            <div>
                <button><i class="material-icons" :style="right_panel.icon">favorite_border</i>
                </button>
            </div>
            <div>
                <button><i class="material-icons" :style="right_panel.icon">shopping_cart</i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        computed: {
            ...mapState(['right_panel'])
        },
        methods: {
            ...mapActions(['PRODUCT_NAME_COLOR', 'OPEN_RIGHT_PANEL'])
        }
    }

</script>

<style scoped>
    .product {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
        height: 365px;
        border: 1px solid #eee;
        margin: 15px 0;
    }

    .product:hover {
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.1);
        transition: 0.7s;
    }

    .product:hover .product-action {
        display: block;
        visibility: visible;
        opacity: 1;
    }

    .product div {
        margin: 10px 0;
    }

    .item-body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .img-box {
        height: 60%;
    }

    .item-body {
        height: 40%;
    }

    .type-box span {
        color: #a9a9a9;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-transform: capitalize;
    }

    .product-name-box a {
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        text-transform: uppercase;
        color: #333c4a;
    }

    .price-box {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }

    .price {
        color: #6ba229;
        font-size: 18px;
        line-height: 20px;
        font-weight: 400;
    }

    .discount {
        color: #a9a9a9;
        font-size: small;
        font-weight: 400;
        text-decoration: line-through;

    }

    .add_to_cart i:hover {
        color: #fff;
    }

    .img-box img {
        cursor: pointer;
        width: 100%;
        height: 100%;
        display: block;
    }

    .product-action {
        position: absolute;
        right: 0;
        padding: 0px 15px;
        transition: 0.8s;
        visibility: hidden;
        opacity: 0;
    }

    .product-action button {
        color: #000;
        cursor: pointer;
        border-radius: 50%;
        border: 1px solid;
        padding: 3px 6px;
        background: #fff;
    }

    .product-action button:hover {
        /*background-color: #6ba229;*/
        /*color: #fff;*/
        /*border: 1px solid #6ba229;*/
        transition: 0.5s;
        opacity: 0.6;
    }
</style>