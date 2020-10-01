<template>
    <div class="col s6 m12 l12">
        <!--        <tag_filter_1 :tags="tags"/>-->
        <component :is="currentTagFilterComponent"
                   :tags="tags"
        />
    </div>
</template>

<script>
    import tag_filter_1 from '../Created-shop-elements/Tag-filters/Tag-filter-1'
    import tag_filter_2 from '../Created-shop-elements/Tag-filters/Tag-filter-2'
    import tag_filter_3 from '../Created-shop-elements/Tag-filters/Tag-filter-3'

    import {mapState, mapActions} from 'vuex'

    export default {
        props: ['tags'],
        data() {
            return {
                currentTagFilterComponent: '',
                tagFilters: [
                    {name: 'tag-filter-1'},
                    {name: 'tag-filter-2'},
                    {name: 'tag-filter-3'},
                ]
            }
        },
        components: {
            'tag-filter-1': tag_filter_1,
            'tag-filter-2': tag_filter_2,
            'tag-filter-3': tag_filter_3,
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
            this.tagFilters.filter(i => {
                x.push(i.name)
            });
            const y = Object.keys(this.shop_page_info).filter(j => {
                return x.includes(j)
            });
            this.currentTagFilterComponent = y.toString()
        }
    }
</script>

<style scoped>

</style>