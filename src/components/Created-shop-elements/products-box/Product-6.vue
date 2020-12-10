<template>
    <div class="product" id="product-6">
        <div class="product-img">
            <router-link :to="`/${company_name}/detail/${id}`">
                <img :src="file" height="420" width="327">
            </router-link>
        </div>
        <div class="product-info">
            <div class="product-text">
                <h1 :style="name">{{product_name}}</h1>
                <h2 :style="category">{{product_category}}</h2>
                <p><span :style="price">{{product_price}}&nbsp;AMD</span></p>
            </div>
            <div class="product-price-btn">
                <router-link :to="{path: `/${company_name}/detail/${id}`, params: {id}}" class="view-more"
                             :style="button">View more
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'product-6',
        props: ['name', 'price', 'category', 'button', 'icon', 'id', 'file', 'product_name', 'product_price', 'discount_price', 'product_category', 'tag', 'description', 'top', 'best', 'company_name'],
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
        font-size: 34px;
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