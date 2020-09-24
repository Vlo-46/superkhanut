<template>
    <div class="product" id="product-4">
        <div class="img-box" @click="OPEN_RIGHT_PANEL('product')">
            <img src="../../../assets/no-img.jpg" alt="">
        </div>
        <div class="product-body">
            <div class="product-title" @click="OPEN_RIGHT_PANEL('product')"><a href="" @click.prevent=""
                                                                               :style="right_panel.product.product_name">Product
                name</a></div>
            <div class="details">
                <div>
                    <button class="view-more" @click="OPEN_RIGHT_PANEL('button')" :style="right_panel.button">View more</button>
                </div>
                <div>
                    <button class="favorite"><i class="material-icons" @click="OPEN_RIGHT_PANEL('icon')" :style="right_panel.icon">favorite</i>
                    </button>
                </div>
                <div @click="OPEN_RIGHT_PANEL('product')">
                    <span class="price" :style="right_panel.product.product_price">Price&nbsp;AMD</span>
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
    img {
        width: 100%;
        height: 100%;
        display: block;
        cursor: pointer;
    }

    .product {
        display: flex;
        flex-direction: column;
        max-height: 370px;
        height: 370px;
        background-color: #fff;
        box-shadow: #ccc 0 0 16px;
    }

    .product:hover {
        box-shadow: #ccc 0 0 5px;
        transition: 0.5s;
    }

    .img-box {
        height: 65%;
    }

    .product-body {
        height: 35%;
        padding: 20px;
    }

    .product-title a {
        color: #333;
        font-size: 15px;
        font-weight: 500;
        line-height: 1.4;
        -webkit-transition-duration: .3s;
        transition-duration: .3s;
    }

    .product-title a:hover {
        font-weight: bold;
        color: #000;
    }

    .details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    .view-more {
        background: #fff;
        border: 1px solid #333;
        padding: 6px 13px;
        border-radius: 5px;
        color: #333;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
    }

    .view-more:hover {
        background-color: #333;
        color: #fff;
    }

    .favorite {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .price {
        color: #333;
    }

    .price:hover {
        font-weight: bold;
        color: #000;
    }
</style>