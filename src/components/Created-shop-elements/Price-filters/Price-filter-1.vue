<template>
    <ul>
        <h5>FILTER BY PRICE</h5>
        <div>
            <input type="range" :min="min_price" :max="max_price" step="1"
                   class="custom-range" v-model="price" @change="COMPANY_FILTER_BY_PRICE({min: price, max: max_price})"
            >
            <span class="filtered_price">{{price}}&nbsp;Դ&nbsp;-&nbsp;{{max_price}}&nbsp;Դ</span>
        </div>
    </ul>
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
    ul {
        margin-bottom: 30px;
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