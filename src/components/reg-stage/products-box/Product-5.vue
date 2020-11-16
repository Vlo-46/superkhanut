<template>
    <div class="product" id="product-5">
        <div class="img-box">
            <img src="../../../assets/no-img.jpg" alt="" @click="OPEN_RIGHT_PANEL('product')">
            <div class="product-title" @click="OPEN_RIGHT_PANEL('product')"><p :style="right_panel.product.product_name">Product name</p></div>
            <div class="favorite-box">
                <a href="" @click.prevent="OPEN_RIGHT_PANEL('icon')"><i class="material-icons" :style="right_panel.icon">favorite</i></a>
            </div>
        </div>
        <div class="product-body" >
            <div class="info-box">
                <div class="price-box" @click="OPEN_RIGHT_PANEL('product')">
                    <span :style="right_panel.product.product_price">Price&nbsp;AMD</span>
                </div>
                <div class="tag-box"><span>#Tags</span></div>
            </div>
            <div class="buttons-box">
                <div @click="OPEN_RIGHT_PANEL('button')">
                    <button class="view-more" :style="right_panel.button">View more</button>
                </div>
                <div>
                    <button class="buy" :style="right_panel.button" @click="OPEN_RIGHT_PANEL('button')">
                        <i class="material-icons" :style="right_panel.icon" @click="OPEN_RIGHT_PANEL('icon')">shopping_cart</i>
                    </button>
                </div>
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
        max-height: 370px;
        background-color: #fff;
        box-shadow: 0 0 12px inset;
        margin: 10px 0;
    }

    .product:hover {
        box-shadow: 0 0 12px;
        transition: 0.7s;
    }

    .img-box {
        height: 60%;
        position: relative;
    }

    .product-title {
        position: absolute;
        bottom: 0;
        padding: 0 10px;
    }

    .favorite-box {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px;
    }

    img {
        width: 100%;
        height: 100%;
        display: block;
        cursor: pointer;
    }

    .product-title p {
        color: #fff;
        font-weight: bold;
    }

    .product-body {
        padding: 20px;
        height: 40%;
    }

    .info-box {
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        height: 50%;
        align-items: center;
    }

    .tag-box span {
        font-weight: bold;
        font-size: small;
    }

    .price-box span {
        font-weight: bold;
    }

    .favorite-box a {
        color: #262626;
    }

    i {
        font-size: 27px;
    }

    .view-more {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .buttons-box {
        display: flex;
        justify-content: space-between;
        height: 50%;
        align-items: center;
    }

    .buy {
        cursor: pointer;
    }
</style>