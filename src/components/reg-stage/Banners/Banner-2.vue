<template>
    <div class="banner-item" @click="OPEN_RIGHT_PANEL('product')">
        <div class="img-box">
            <img :src="img" alt="">
        </div>
        <div class="info-box">
            <div class="title"><span :style="right_panel.product.product_name">{{title}}</span></div>
            <div class="info-inner-box">
                <div class="category"><span :style="right_panel.product.product_category">{{category}}</span></div>
                <div class="price"><span :style="right_panel.product.product_price">{{price}}&nbsp;Դ</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

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
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid #ccc;
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

    .img-box {
        height: 70%;
    }

    .info-box {
        padding: 15px;
        display: flex;
        flex-direction: column;
        height: 30%;
    }

    .info-inner-box {
        display: flex;
        justify-content: space-evenly;
    }
    /*.info-box div {*/
    /*    height: 33.3%;*/
    /*}*/

    .title {
        font-size: 18px;
        color: #262626;
        font-weight: bold;
        text-align: center;
    }

    .category span {
        font-size: small;
        color: #4d4d4d;
    }

    .price span {
        color: #6ba229;
        font-size: 18px;
    }
</style>