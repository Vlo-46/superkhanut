<template>
    <div class="product">
        <div class="img-box">
            <img :src="img" alt="">
            <div class="details">
                <div class="details-box">
                    <div>
                        <button><i class="material-icons">visibility</i></button>
                    </div>
                    <div>
                        <button><i class="material-icons">favorite_border</i></button>
                    </div>
                    <div>
                        <button><i class="material-icons">shopping_cart</i></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-body">
            <div><a href="" class="product-title">{{product_name}}</a></div>
            <div class="price-box">
                <div><span class="price">{{price}}&nbsp;Դ</span></div>
                <div><span class="discount-price">{{discount}}&nbsp;Դ</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['product_name', 'price', 'discount', 'img', 'tag', 'quantity', 'id']
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