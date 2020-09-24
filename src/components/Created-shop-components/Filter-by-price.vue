<template>
    <div class="col s12 m12 l12">
        <price_filter :all_prices="all_prices"
                      :max_price="max_price"
                      :min_price="min_price"
        />
    </div>

</template>

<script>
    import price_filter from '../Created-shop-elements/Price-filters/Price-filter-1'
    export default {
        props: ['all_prices', 'max_price', 'min_price'],
        components: {
            price_filter
        },

    }
</script>

<style scoped>

</style>