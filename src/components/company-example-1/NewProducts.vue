<template>
    <div class="product-item">
        <div class="img-box"><img :src="img"></div>
        <div class="item-body">
            <div class="type-box"><span>{{category}}</span></div>
            <div class="product-name-box"><a href="">{{product_name}}</a></div>
            <div class="price-box">
                <div><span class="price">{{price}}&nbsp;Դ</span></div>
                <div><span class="discount">{{discount_price}}&nbsp;Դ</span></div>
            </div>
        </div>
        <div class="product-action">
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
</template>

<script>
    export default {
        props: ['category', 'id', 'img', 'product_name', 'discount_price', 'price', 'tag']
    }
</script>

<style scoped>
    .product-item {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
        height: 365px;
        border: 1px solid #eee;
        margin: 15px 0;
    }

    .product-item:hover {
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.1);
        transition: 0.7s;
    }

    .product-item:hover .product-action {
        display: block;
        visibility: visible;
        opacity: 1;
    }

    .product-item div {
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
        background-color: #6ba229;
        color: #fff;
        border: 1px solid #6ba229;
        transition: 0.5s;
    }

    .tns-controls {
        display: flex !important;
        justify-content: flex-end !important;
    }

    .tns-controls button {
        background-color: #fff;
        border: 1px solid #6ba229;
        padding: 5px 20px;
        color: #6ba229;
        margin: 0 5px;
    }

    .tns-controls button:hover {
        background-color: #6ba229;
        color: #fff;
    }

    .row {
        display: block;
    }

    .new-products .s3 {
        margin: 10px 0;
    }

</style>

