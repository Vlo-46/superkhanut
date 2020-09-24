<template>
    <div class="col s6 m12 l12">
        <tag_filter_1 :tags="tags"/>
    </div>
</template>

<script>
    import tag_filter_1 from '../Created-shop-elements/Tag-filters/Tag-filter-1'


    export default {
        props: ['tags'],
        components: {
            tag_filter_1
        },

    }
</script>

<style scoped>

</style>