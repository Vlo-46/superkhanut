<template>
    <div class="banner-item">
        <img :src="ad_file" alt="" v-if="ad_file">
        <img src="../../../assets/no-img.jpg" alt="" v-else>
        <div class="info-box">
            <div>
                <p class="title" :style="title" v-if="ad_title">{{ad_title}}</p>
                <p class="title" :style="title" v-else>title</p>
            </div>
            <div class="category">
                <p :style="category" v-if="ad_category">{{ad_category}}</p>
                <p :style="category" v-else>category</p>
            </div>
            <div class="price">
                <p :style="price" v-if="ad_price">{{ad_price}}&nbsp;Դ</p>
                <p :style="price" v-else>price&nbsp;Դ</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'price', 'category', 'ad_title', 'ad_id', 'ad_category', 'ad_price', 'ad_file']
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
        max-height: 300px;
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