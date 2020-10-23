<template>
    <div class="col s12 m12 l12" id="filter-by-price-component">
        <price_filter_1 v-if="price_filters.price_filter === 'price-filter-1'"/>
        <price_filter_2 v-else-if="price_filters.price_filter === 'price-filter-2'"/>
        <price_filter_3 v-else-if="price_filters.price_filter === 'price-filter-3'"/>
        <price_filter_4 v-else-if="price_filters.price_filter === 'price-filter-4'"/>
        <ul class="price-filter-box" v-else>
            <p>Prices filter</p>
        </ul>
    </div>

</template>

<script>
    import price_filter_1 from '../Price-filters/Price-filter-1';
    import price_filter_2 from '../Price-filters/Price-filter-2';
    import price_filter_3 from '../Price-filters/Price-filter-3';
    import price_filter_4 from '../Price-filters/Price-filter-4';
    import {mapState} from 'vuex'

    export default {
        components: {
            price_filter_1,
            price_filter_2,
            price_filter_3,
            price_filter_4,
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
        cursor: grab;
    }

    #filter-by-price-component {
        cursor: grab;
    }
</style>