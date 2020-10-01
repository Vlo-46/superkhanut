<template>
    <div class="product">
        <div class="imgBox">
            <img :src="img" alt="">
        </div>
        <div class="product-body">
            <div><span class="product_name">{{product_name}}</span></div>
            <div>
                <p class="product_price">{{price}}&nbsp;Դ</p>
                <span class="discount" v-if="discount != null">{{discount}}&nbsp;Դ</span>
            </div>
            <div>
                <button class="btn">View</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        props: ['product_name', 'price', 'discount', 'img', 'id'],
        methods: {
            ...mapActions(['ADD_QUANTITY', 'SUB_QUANTITY'])
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
    }

    .product {
        border-top: 1px solid #dee2e6 !important;
        box-shadow: 0 0 10px #a2a0a0;
        margin: 10px 0;
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