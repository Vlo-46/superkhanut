<template>
    <div class="banner-item">
        <div class="img-box">
            <img :src="ad_file" alt="" v-if="ad_file">
            <img src="../../../assets/no-img.jpg" alt="" v-else>
        </div>
        <div class="info-box">
            <div class="title">
                <span :style="title" v-if="ad_title">{{ad_title}}</span>
                <span :style="title" v-else>title</span>
            </div>
            <div class="info-inner-box">
                <div class="category">
                    <span :style="category" v-if="ad_category">{{ad_category}}</span>
                    <span :style="category" v-else>category</span>
                </div>
                <div class="price">
                    <span :style="price" v-if="ad_price">{{ad_price}}&nbsp;Դ</span>
                    <span :style="price" v-else>price&nbsp;Դ</span>
                </div>
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
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid #ccc;
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