<template>
    <div class="col s12 m12 l12">
        <!--        <price_filter :all_prices="all_prices"-->
        <!--                      :max_price="max_price"-->
        <!--                      :min_price="min_price"-->
        <!--        />-->
        <component :is="currentPriceFilterComponent">
            :all_prices="all_prices"
            :max_price="max_price"
            :min_price="min_price"
        </component>
    </div>

</template>

<script>
    import price_filter_1 from '../Created-shop-elements/Price-filters/Price-filter-1';
    import price_filter_2 from '../Created-shop-elements/Price-filters/Price-filter-2';
    import price_filter_3 from '../Created-shop-elements/Price-filters/Price-filter-3';
    import price_filter_4 from '../Created-shop-elements/Price-filters/Price-filter-4';

    import {mapState, mapActions} from 'vuex'

    export default {
        props: ['all_prices', 'max_price', 'min_price'],
        data() {
            return {
                currentPriceFilterComponent: '',
                priceFilters: [
                    {name: 'price-filter-1'},
                    {name: 'price-filter-2'},
                    {name: 'price-filter-3'},
                    {name: 'price-filter-4'},
                ]
            }
        },
        components: {
            'price-filter-1': price_filter_1,
            'price-filter-2': price_filter_2,
            'price-filter-3': price_filter_3,
            'price-filter-4': price_filter_4,
        },
        methods: {
            ...mapActions(['GET_SHOP_INFO'])
        },
        computed: {
            ...mapState(['shop_page_info'])
        },
        beforeMount() {
            this.GET_SHOP_INFO()
        },
        created() {
            let x = [];
            this.priceFilters.filter(i => {
                x.push(i.name)
            });
            const y = Object.keys(this.shop_page_info).filter(j => {
                return x.includes(j)
            });
            this.currentPriceFilterComponent = y.toString()
        }
    }
</script>

<style scoped>

</style>