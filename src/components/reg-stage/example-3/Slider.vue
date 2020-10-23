<template>
    <div id="slider-component">
        <VueSlickCarousel v-bind="settings">
            <div><img src="../../../assets/no-img.jpg"/></div>
            <div><img src="../../../assets/no-img.jpg"/></div>
            <div><img src="../../../assets/no-img.jpg"/></div>
        </VueSlickCarousel>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        data() {
            return {
                settings: {
                    arrows: false,
                    accessibility: false,
                    "lazyLoad": "ondemand",
                    "dots": true,
                    "fade": true,
                    "infinite": true,
                    "speed": 1500,
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    prevArrow: true,
                    nextArrow: true
                }
            }
        },
        components: {
            VueSlickCarousel
        }
    }
</script>

<style scoped>
    .slick-slide img {
        display: block;
        width: 100%;
        height: 400px;
    }

    #slider-component {
        cursor: pointer;
    }
</style>