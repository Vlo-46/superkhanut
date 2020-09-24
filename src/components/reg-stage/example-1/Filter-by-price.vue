<template>
    <div class="col s12 m12 l12" id="filter-by-price-component">
        <price_filter v-if="price_filters.price_filter === 'price-filter-1'"/>
        <ul class="price-filter-box" v-else>
            <p>Prices filter</p>
        </ul>
    </div>

</template>

<script>
    import price_filter from '../Price-filters/Price-filter-1'
    import {mapState} from 'vuex'

    export default {
        components: {
            price_filter
        },
        computed: {
            ...mapState(['price_filters'])
        }
    }
</script>

<style scoped>
    .price-filter-box {
        height: 100px;
        width: 100%;
        padding: 15px;
        border: dotted;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
</style>