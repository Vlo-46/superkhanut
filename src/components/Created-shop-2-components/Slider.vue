<template>
    <div id="slider-component container">
        <div class="header-slider" v-if="slider.slider_img.length > 0">
            <div v-for="img in slider.slider_img" :key="img" class="slider-item">
                <img :src="img" alt="" width="100%; height: 400px">
                <div class="slider-text-content">
                    <div style="position: relative">
                        <p>{{slider.slider_text}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-slider" v-else>
            <div class="slider-item">
                <img src="../../assets/no-img.jpg" alt="" width="100%; height: 400px">
            </div>
        </div>
    </div>
</template>

<script>
    import {tns} from "../../../node_modules/tiny-slider/src/tiny-slider"

    export default {
        props: ['slider'],
        mounted() {
            let slider = tns({
                "container": ".header-slider",
                items: 1,
                "speed": 1000,
                autoplay: true,
                slideBy: 1,
                autoplayButtonOutput: false,
                mouseDrag: true,
                autoHeight: true
            });
            slider.play();
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
        object-fit: fill;
        max-height: 650px;
    }

    .slider-item {
        position: relative;
    }

    .slider-text-content {
        position: absolute;
        top: 0;
        width: 400px;
        padding: 30px;
    }

    .slider-text-content p {
        font-size: 20px;
        font-weight: bold;
        color: #444;
    }

    .edit_icon {
        position: absolute;
        top: 0;
        right: 0;
        color: #6ba229;
        cursor: help;
    }

    .check_icon {
        float: right;
        color: #6ba229;
        font-size: 30px;
        cursor: pointer;
    }

    textarea {
        min-height: 10rem !important;
    }
</style>