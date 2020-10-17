<template>
    <div class="product" id="product-6">
        <div class="product-img" @click.prevent="OPEN_RIGHT_PANEL('product')">
            <img src="../../../assets/no-img.jpg" height="420" width="327">
        </div>
        <div class="product-info">
            <div class="product-text" @click.prevent="OPEN_RIGHT_PANEL('product')">
                <h1 :style="right_panel.product.product_name">Title</h1>
                <h2 :style="right_panel.product.product_category">Category</h2>
                <p :style="right_panel.product.product_price"><span>20000&nbsp;</span>AMD</p>
            </div>
            <div class="product-price-btn">
                <button type="button" @click.prevent="OPEN_RIGHT_PANEL('button')" :style="right_panel.button">View detail</button>
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
        },
    }
</script>

<style scoped>
    .product {
        height: 370px;
        max-height: 370px;
        width: 100%;
        border-radius: 7px 7px 7px 7px;
        /* VIA CSS MATIC https://goo.gl/cIbnS */
        -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
        -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
        box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
        margin-bottom: 15px;
    }

    .product-img {
        float: left;
        height: 50%;
        width: 100%;
    }

    .product-img img {
        border-radius: 7px 0 0 7px;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .product-info {
        float: left;
        height: 50%;
        width: 100%;
        border-radius: 0 7px 10px 7px;
        background-color: #ffffff;
    }

    .product-text {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .product-text h1 {
        font-size: 25px;
        color: #474747;
        margin: 7px !important;
    }

    .product-text h2 {
        font-size: 13px;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        color: #d2d2d2;
        letter-spacing: 0.2em;
        margin: 0 !important;
        text-align: center;
    }

    .product-price-btn {
        position: relative;
        display: flex;
        justify-content: center;
    }

    .product-price-btn p {
        display: inline-block;
        position: absolute;
        font-family: 'Trocchi', serif;
        font-size: 24px;
        font-weight: lighter;
        color: #474747;
    }

    span {
        display: inline-block;
        font-family: 'Suranna', serif;
        font-size: 24px;
    }

    .product-price-btn button {
        display: inline-block;
        box-sizing: border-box;
        border: transparent;
        border-radius: 60px;
        font-family: 'Raleway', sans-serif;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        color: #ffffff;
        background-color: #9cebd5;
        cursor: pointer;
        outline: none;
        padding: 8px 20px;
    }

    .product-price-btn button:hover {
        background-color: #79b0a1;
    }
</style>