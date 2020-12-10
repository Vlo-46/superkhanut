<template>
    <div id="slider-component">
        <VueSlickCarousel v-bind="settings" v-if="slider.slider_img.length > 0">
            <div v-for="img in slider.slider_img" :key="img"><img :src="img"/></div>
        </VueSlickCarousel>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        props: ['slider'],
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