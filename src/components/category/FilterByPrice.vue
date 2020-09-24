<template>
    <ul class="collapsible col s12 m12 l12">
        <li class="active">
            <div class="collapsible-header">Filter by price <i class="material-icons">arrow_drop_down</i></div>
            <div class="collapsible-body">
                <div>
                    <input type="range" min="100" max="10000" step="1"
                           class="custom-range">
                    <span class="filtered_price">100&nbsp;Դ&nbsp;-&nbsp;10000&nbsp;Դ</span>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        data() {
            return {
                min_price: '',
                max_price: ''
            }
        },
        methods: {...mapActions(['FILTER_BY_PRICE'])},
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