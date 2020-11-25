<template>
    <ul class="collapsible col s12 m12 l12">
        <li class="active">
            <div class="collapsible-header">Filter by price <i class="material-icons">arrow_drop_down</i></div>
            <div class="collapsible-body">
                <div>
                    <input type="range" :min="min" :max="max" step="1"
                           class="custom-range" v-model="price" @change="$WRAPPER_FILTER_BY_PRICE({min: price, max})">
                    <span class="filtered_price">{{price}}&nbsp;Դ&nbsp;-&nbsp;{{max}}&nbsp;Դ</span>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        props: ['min', 'max'],
        data() {
            return {
                price: 0
            }
        },
        methods: {...mapActions(['$WRAPPER_FILTER_BY_PRICE'])},
    }
</script>

<style scoped>

    label {
        font-size: 11px;
    }

    .collapsible-header {
        background-color: #fafafa;
        position: relative;
    }

    .material-icons {
        position: absolute;
        right: 0;
    }

    .custom-range::-webkit-slider-thumb {
        background: #49b14d;
    }

    .custom-range::-moz-range-thumb {
        background: #49b14d;
    }

    .custom-range::-ms-thumb {
        background: #49b14d;
    }

    .filtered_price {
        font-size: small;
        color: #777;
    }
</style>