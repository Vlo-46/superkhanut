<template>
    <div class="container" id="banner-component">
        <div class="banners row">
            <div class="col s12 m6 l4" v-for="item in banner_items" :key="item.id">
                <banner-1 v-if="banners.banner === 'banner-1'"
                          :id="item.id"
                          :title="item.title"
                          :category="item.category"
                          :price="item.price"
                          :img="item.img"
                />
                <banner-2 v-else-if="banners.banner === 'banner-2'"
                          :id="item.id"
                          :title="item.title"
                          :category="item.category"
                          :price="item.price"
                          :img="item.img"
                />
                <div class="banner" v-else>
                    <span>Banner</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import banner_1 from '../Banners/Banner-1'
    import banner_2 from '../Banners/Banner-2'

    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                banner_items: [
                    {
                        id: 1,
                        title: 'title',
                        category: 'category',
                        price: 'Price',
                        img: require('@/assets/no-img.jpg')
                    },
                    {
                        id: 2,
                        title: 'title',
                        category: 'category',
                        price: 'Price',
                        img: require('@/assets/no-img.jpg')
                    },
                    {
                        id: 3,
                        title: 'title',
                        category: 'category',
                        price: 'Price',
                        img: require('@/assets/no-img.jpg')
                    },
                ],
                null_items: [
                    {id: 1, title: 'Banner'},
                    {id: 2, title: 'Banner'},
                    {id: 3, title: 'Banner'},
                ]
            }
        },
        components: {
            'banner-1': banner_1,
            'banner-2': banner_2,
        },
        computed: {
            ...mapState(['banners'])
        }
    }
</script>

<style scoped>
    .banners {
        margin-top: 50px;
        margin-bottom: 70px;
        /*display: flex;*/
    }

    .banners .s12 {
        margin-bottom: 15px;
    }

    .banner {
        position: relative;
        height: 220px;
        width: 100%;
        border: dotted #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        border: dotted;
        cursor: pointer;
    }
</style>