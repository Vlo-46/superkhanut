<template>
    <div id="slider-component">
        <div class="header-slider">
            <div v-for="item in items" :key="item.id" class="slider-item">
                <img :src="item.src" alt="">
                <div class="slider-text-content">
                    <div v-if="active === false" style="position: relative">
                        <p>{{item.text}}</p>
                        <i class="material-icons edit_icon" @click="active = true">edit</i>
                    </div>
                    <!--                    <div class="col s12" v-else style="position: relative">-->
                    <!--                        <label for="textarea1">Change slider text</label>-->
                    <!--                        <textarea id="textarea1" class="materialize-textarea" v-model="item.text"/>-->
                    <!--                        <i class="material-icons check_icon" @click="active = false">check</i>-->
                    <!--                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {tns} from "../../../node_modules/tiny-slider/src/tiny-slider"

    export default {
        data() {
            return {
                active: false,
                items: [
                    {
                        id: 1,
                        src: require(`@/assets/no-img.jpg`),
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consequuntur ex iure nihil\n' +
                            'optio quidem sed ullam veniam vitae voluptas?'
                    },
                    // {
                    //     id: 2,
                    //     src: require(`@/assets/no-img.jpg`),
                    //     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consequuntur ex iure nihil\n' +
                    //         'optio quidem sed ullam veniam vitae voluptas?'
                    // },
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
    #slider-component {
        cursor: grab;
    }

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