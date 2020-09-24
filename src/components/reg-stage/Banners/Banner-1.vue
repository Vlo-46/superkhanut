<template>
    <div class="banner-item" @click="OPEN_RIGHT_PANEL('product')">
        <img :src="img" alt="">
        <div class="info-box">
            <div><p class="title" :style="right_panel.product.product_name">{{title}}</p></div>
            <div class="category" :style="right_panel.product.product_category"><p>{{category}}</p></div>
            <div class="price" :style="right_panel.product.product_price"><p>{{price}}&nbsp;Դ</p></div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        props: ['id', 'title', 'category', 'price', 'img'],
        computed: {
            ...mapState(['right_panel'])
        },
        methods: {
            ...mapActions(['OPEN_RIGHT_PANEL'])
        }
    }
</script>

<style scoped>
    .banner-item {
        position: relative;
        height: 220px;
        width: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        display: block;
    }

    img:hover {
        opacity: 0.4;
        cursor: pointer;
    }

    .info-box {
        position: absolute;
        top: 0;
        padding: 15px;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .info-box div {
        height: 33.3%;
    }

    .title {
        font-size: 18px;
        color: #262626;
        font-weight: bold;
    }

    .category {
        font-size: small;
        color: #4d4d4d;
    }

    .price {
        color: #6ba229;
        font-size: 18px;
    }
</style>