<template>
    <div class="col s6 m12 l12" id="category-component">
        <category_1 v-if="categories.category === 'category-1'"/>
        <ul class="categories-box" v-else>
            <p>Categories</p>
        </ul>
    </div>

</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import category_1 from '../Catrgory-filters/Category-filter-1'

    export default {
        components: {
            category_1
        },
        computed: {
            ...mapState(['categories'])
        },
        methods: {
            ...mapActions(['OPEN_RIGHT_PANEL'])
        }
    }

</script>

<style scoped>
    .categories-box {
        height: 250px;
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