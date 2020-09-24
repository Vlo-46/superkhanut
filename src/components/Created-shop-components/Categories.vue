<template>
    <div class="col s6 m12 l12">
        <category_1 :categories="categories"/>
    </div>

</template>

<script>
    import category_1 from '../Created-shop-elements/Catrgory-filters/Category-filter-1'

    export default {
        props: ['categories'],
        components: {
            category_1
        },

    }

</script>

<style scoped>

</style>