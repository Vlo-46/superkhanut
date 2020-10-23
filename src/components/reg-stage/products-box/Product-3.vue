<template>
    <div class="product" id="product-3">
        <div class="img-box">
            <img src="../../../assets/no-img.jpg" alt="" @click="OPEN_RIGHT_PANEL('product')">
            <div class="details">
                <div class="details-box" @click="OPEN_RIGHT_PANEL('icon')">
                    <div>
                        <button><i class="material-icons" :style="right_panel.icon">visibility</i></button>
                    </div>
                    <div>
                        <button><i class="material-icons" :style="right_panel.icon">favorite_border</i></button>
                    </div>
                    <div>
                        <button><i class="material-icons" :style="right_panel.icon">shopping_cart</i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-body" @click="OPEN_RIGHT_PANEL('product')">
            <div><a href="" class="product-title" :style="right_panel.product.product_name" @click.prevent="">Product name</a></div>
            <div class="price-box">
                <div><span class="price" :style="right_panel.product.product_price">Price&nbsp;AMD</span></div>
                <div><span class="discount-price">Discount price&nbsp;AMD</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        methods: {
            ...mapActions(['OPEN_RIGHT_PANEL'])
        },
        computed: {
            ...mapState(['right_panel'])
        }
    }
</script>

<style scoped>
    .product {
        height: 370px;
        margin: 30px 15px 15px 0;
        border: 1px solid #eee;
    }

    .product:hover {
        border: 2px solid #ccc;
    }

    .product:hover .details-box {
        visibility: visible;
        opacity: 1;
    }

    .details {
        position: absolute;
        top: 0;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .img-box img {
        width: 100%;
        height: 100%;
    }

    .img-box {
        height: 70%;
        position: relative;
    }

    .product-body {
        height: 30%;
        padding-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .product-body div {
        margin: 5px 0;
    }

    .product-title {
        color: #333;
    }

    .product-title:hover {
        color: #000;
        font-weight: bold;
    }

    .price-box {
        display: flex;
        justify-content: center;
    }

    .price-box div {
        margin: 5px;
    }

    .discount-price {
        color: #a9a9a9;
        font-size: small;
        font-weight: 400;
        text-decoration: line-through;
    }

    .price {
        font-weight: bold;
    }

    .details button {
        background: transparent;
        border: none;
        cursor: pointer;
    }

    .details-box {
        display: flex;
        background-color: #fff;
        align-items: center;
        padding: 5px 10px;
        border-radius: 20px;
        border: 1px solid #f5f5f5;
        visibility: hidden;
        opacity: 0;
        transition: 0.5s;
    }


    i:hover {
        color: #666;
    }
</style>