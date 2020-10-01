<template>
    <div class="example container">
        <div class="row">
            <div class="col s12 m3 l3">
                <tag_filter_2/>
                <category/>
                <tag_filter_3/>
                <price_filter/>
                <price_filter_3/>
                <price_filter_4/>
            </div>
            <div class="col s12 m9 l9"></div>
        </div>

    </div>
</template>

<script>
    import tag_filter_2 from '../components/reg-stage/Tag-filters/Tag-filter-2'
    import tag_filter_3 from '../components/reg-stage/Tag-filters/Tag-filter-3'
    import category from '../components/reg-stage/Category-filters/Category-filter-2'
    import price_filter from '../components/reg-stage/Price-filters/Price-filter-2'
    import price_filter_3 from '../components/reg-stage/Price-filters/Price-filter-3'
    import price_filter_4 from '../components/reg-stage/Price-filters/Price-filter-4'

    export default {
        components: {
            tag_filter_2,
            category,
            tag_filter_3,
            price_filter,
            price_filter_3,
            price_filter_4
        }
    }
</script>