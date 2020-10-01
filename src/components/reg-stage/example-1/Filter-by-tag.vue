<template>
    <div class="col s6 m12 l12" id="filter-by-tag-component">
        <tag_filter_1 v-if="tag_filters.tag_filter === 'tag-filter-1'"/>
        <tag_filter_2 v-else-if="tag_filters.tag_filter === 'tag-filter-2'"/>
        <tag_filter_3 v-else-if="tag_filters.tag_filter === 'tag-filter-3'"/>
        <ul class="tag-filter-box" v-else>
            <p>Tags filter</p>
        </ul>
    </div>
</template>

<script>
    import tag_filter_1 from '../Tag-filters/Tag-filter-1'
    import tag_filter_2 from '../Tag-filters/Tag-filter-2'
    import tag_filter_3 from '../Tag-filters/Tag-filter-3'
    import {mapState} from 'vuex'

    export default {
        components: {
            tag_filter_1,
            tag_filter_2,
            tag_filter_3
        },
        computed: {
            ...mapState(['tag_filters'])
        }
    }
</script>

<style scoped>
    .tag-filter-box {
        height: 200px;
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