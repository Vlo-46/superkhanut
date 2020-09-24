<template>
    <div class="header-slider">
        <div v-for="item in items" :key="item.id" class="slider-item">
            <img :src="item.src" alt="">
            <div class="slider-text-content">
                <p>{{item.text}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {tns} from "../../../../node_modules/tiny-slider/src/tiny-slider"

    export default {
        data() {
            return {
                items: [
                    {
                        id: 1,
                        src: require(`@/assets/no-img.jpg`),
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consequuntur ex iure nihil\n' +
                            'optio quidem sed ullam veniam vitae voluptas?'
                    },
                    {
                        id: 2,
                        src: require(`@/assets/no-img.jpg`),
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consequuntur ex iure nihil\n' +
                            'optio quidem sed ullam veniam vitae voluptas?'
                    },
                ],
            }
        },
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
</style>