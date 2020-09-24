<template>
    <div class="product" id="product-2">
        <div class="imgBox" @click="OPEN_RIGHT_PANEL('product')">
            <img src="../../../assets/no-img.jpg" alt="">
        </div>
        <div class="product-body">
            <div @click="OPEN_RIGHT_PANEL('product')"><span class="product_name" :style="right_panel.product.product_name">Product name</span></div>
            <div @click="OPEN_RIGHT_PANEL('product')">
                <p class="product_price" :style="right_panel.product.product_price">Price&nbsp;AMD</p>
                <span class="discount">Discount price&nbsp;AMD</span>
            </div>
            <div @click="OPEN_RIGHT_PANEL('button')">
                <button class="btn" :style="right_panel.button" >Buy</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

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
    img {
        width: 100%;
        height: 100%;
        display: block;
        cursor: pointer;
    }

    .imgBox {
        height: 50%;
    }

    .product {
        border-top: 1px solid #dee2e6 !important;
        box-shadow: 0 0 10px #a2a0a0;
        margin: 10px 0;
        height: 370px;
        max-height: 370px;
    }

    .product:hover {
        box-shadow: 0 3px 10px -5px #333;
        -webkit-transform: translateY(-5px);
        -ms-transform: translateY(-5px);
        transform: translateY(-5px);
        transition: 0.5s;
    }

    .product_name {
        color: #4d4d4d;
    }

    .product_price {
        color: #0a662e;
        font-weight: bold;
    }

    .product-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        height: 50%;
    }

    .discount {
        color: #a9a9a9;
        font-weight: 400;
        text-decoration: line-through;
    }

    .btn {
        background-color: #0a662e;
    }
</style>