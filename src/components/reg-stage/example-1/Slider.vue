<template>
    <div class="container" id="slider-component">
        <div class="slider">
            <slider-1 v-if="sliders.slider === 'slider-1'"/>
            <div class="center-box" v-else>
                <span>SLIDER</span>
            </div>
        </div>
    </div>
</template>

<script>
    import slider_1 from '../Sliders/Slider'
    import {mapState} from 'vuex'


    export default {
        components: {
            'slider-1': slider_1
        },
        computed: {
            ...mapState(['sliders'])
        },

    }

</script>

<style scoped>
    .slider {
        width: 100%;
        height: 480px;
        margin-top: 30px;
    }

    .center-box {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: dotted;
        cursor: pointer;
    }
</style>