<template>
    <div class="banner">
        <div class="row">
            <div class="col s4" v-for="banner in banner_items" :key="banner.id">
                <div class="banner-item">
                    <img :src="banner.img" alt="">
                    <div class="info-box">
                        <div><p class="title">{{banner.title}}</p></div>
                        <div class="category"><p>{{banner.category}}</p></div>
                        <div class="price"><p>{{banner.price}}&nbsp;Դ</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                banner_items: [
                    {id: 1, title: 'title', category: 'category', price: '1000', img: require('@/assets/banner3.jpg')},
                    {id: 2, title: 'title', category: 'category', price: '1000', img: require('@/assets/banner4.jpg')},
                    {id: 3, title: 'title', category: 'category', price: '1000', img: require('@/assets/banner5.jpg')},
                ]
            }
        }
    }
</script>

<style scoped>
    .banner {
        margin: 50px 0;
    }

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