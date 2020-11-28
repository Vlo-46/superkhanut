<template>
    <div class="col s6 m12 l12">
        <template v-if="categories.length > 0">
            <component :is="currentCategoryComponent"
                       :categories="categories"
            />
        </template>
        <template v-else>
            <h5>Categories</h5>
            <div class="s12">
                <p>Category 1</p>
            </div>
            <div class="s12">
                <p>Category 2</p>
            </div>
            <div class="s12">
                <p>Category 3</p>
            </div>
            <div class="s12">
                <p>Category 4</p>
            </div>
        </template>

    </div>
</template>

<script>
    import category_1 from '../Created-shop-elements/Catrgory-filters/Category-filter-1'
    import category_2 from '../Created-shop-elements/Catrgory-filters/Category-filter-2'

    import {mapState, mapActions} from 'vuex'

    export default {
        props: ['categories'],
        data() {
          return {
              currentCategoryComponent: "",
              categories_boxs: [
                  {name: 'category-1'},
                  {name: 'category-2'}
              ]
          }
        },
        components: {
            'category-1': category_1,
            'category-2': category_2,
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
            this.categories_boxs.filter(i => {
                x.push(i.name)
            });
            const y = Object.keys(this.shop_page_info).filter(j => {
                return x.includes(j)
            });
            this.currentCategoryComponent = y.toString()
        }

    }

</script>

<style scoped>

</style>