<template>
    <div class="price-filter">
        <div class="filter level-filter level-req">
            <div id="rangeSlider" class="range-slider">
                <label>Price:</label>
                <div class="number-group">
                    <input class="number-input" type="number" :min="min_price" :max="max_price" v-model="price"/> to
                    <input class="number-input" type="number" :min="min_price" :max="max_price" :value="max_price" disabled/>
                </div>
                <div class="range-group">
                    <input class="range-input" :min="min_price" :max="max_price" type="range"
                           v-model="price"
                           @change="COMPANY_FILTER_BY_PRICE({min: price, max: max_price})"/>
                    <!--                    <input class="range-input" :min="min_price" :max="max_price" type="range"/>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        data() {
            return {
                price: 0
            }
        },
        props: ['all_prices', 'max_price', 'min_price', 'company_name'],
        methods: {
            ...mapActions(['COMPANY_FILTER_BY_PRICE'])
        },
    }
</script>

<style scoped>
    .range-slider {
        display: -webkit-box;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-flow: row wrap;
        -webkit-box-align: center;
        align-items: center;
    }

    .range-slider label {
        color: #111;
        font-size: 15px;
    }

    .range-slider .number-group {
        -webkit-box-flex: 1;
        flex: 1 0 auto;
        text-align: right;
        height: 30px;
        font-weight: 300;
        font-size: 13px;
        color: #fff;
    }

    .range-slider .number-group .number-input {
        width: 60px;
        height: 30px;
        text-align: center;
        color: #3faffa;
        background-color: #3d3e3f;
        border: 0;
    }

    .range-slider .number-group .number-input:first-of-type {
        margin-right: 7px;
    }

    .range-slider .number-group .number-input:last-of-type {
        margin-left: 7px;
    }

    .range-slider .number-group .number-input::-webkit-outer-spin-button, .range-slider .number-group .number-input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    .range-slider .number-group .number-input:invalid, .range-slider .number-group .number-input:out-of-range {
        border: 2px solid red;
    }

    .range-slider .range-group {
        position: relative;
        -webkit-box-flex: 0;
        flex: 0 0 100%;
        height: 47px;
    }

    .range-slider .range-group .range-input {
        position: absolute;
        left: 0;
        bottom: 0;
        margin-bottom: 0;
        -webkit-appearance: none;
        width: 100%;
        border-bottom: 0;
    }

    .range-slider .range-group .range-input:focus {
        outline: 0;
    }

    .range-slider .range-group .range-input::-webkit-slider-runnable-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        -webkit-animation: 0.2s;
        animation: 0.2s;
        background: #3faffa;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
    }

    .range-slider .range-group .range-input::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background: #3faffa;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -7px;
    }

    .range-slider .range-group .range-input::-moz-range-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        animation: 0.2s;
        background: #3faffa;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
    }

    .range-slider .range-group .range-input::-moz-range-thumb {
        z-index: 2;
        position: relative;
        box-shadow: 0px 0px 0px #000;
        border: 1px solid #2497e3;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background: #3faffa;
        cursor: pointer;
    }

    .range-slider .range-group .range-input::-ms-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        animation: 0.2s;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }

    .range-slider .range-group .range-input::-ms-fill-lower, .range-slider .range-group .range-input::-ms-fill-upper {
        background: #3faffa;
        border-radius: 1px;
        box-shadow: none;
        border: 0;
    }

    .range-slider .range-group .range-input::-ms-thumb {
        z-index: 2;
        position: relative;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background: #3faffa;
        cursor: pointer;
    }

    /* for demo purposes */
    body {
        background-color: #323334;
    }

    .range-slider,
    .filter {
        margin: 0 auto 30px;
    }


</style>