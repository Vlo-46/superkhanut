<template>
    <div class="container">
        <div class="banners row">
            <div class="col s12 m6 l4">
                <component :is="currentBannerComponent"
                           :title="home_page_info[currentBanner].product_name_style"
                           :price="home_page_info[currentBanner].product_price_style"
                           :category="home_page_info[currentBanner].product_category_style"
                />
            </div>
            <div class="col s12 m6 l4">
                <component :is="currentBannerComponent"
                           :title="home_page_info[currentBanner].product_name_style"
                           :price="home_page_info[currentBanner].product_price_style"
                           :category="home_page_info[currentBanner].product_category_style"
                />
            </div>
            <div class="col s12 m6 l4">
                <component :is="currentBannerComponent"
                           :title="home_page_info[currentBanner].product_name_style"
                           :price="home_page_info[currentBanner].product_price_style"
                           :category="home_page_info[currentBanner].product_category_style"
                />
            </div>

        </div>
    </div>
</template>

<script>
    import banner_1 from '../Created-shop-elements/Banners/Banner-1'
    import banner_2 from '../Created-shop-elements/Banners/Banner-2'

    import {mapActions, mapState} from 'vuex'

    export default {
        data() {
            return {
                currentBanner: '',
                banners: [
                    {name: 'banner-1'},
                    {name: 'banner-2'},
                ]
            }
        },
        components: {
            'banner-1': banner_1,
            'banner-2': banner_2,
        },
        methods: {
            ...mapActions(['GET_SHOP_INFO'])
        },
        computed: {
            ...mapState(['home_page_info']),
            currentBannerComponent() {
                return this.currentBanner
            }
        },
        beforeMount() {
            this.GET_SHOP_INFO()
        },
        created() {
            let x = [];
            this.banners.filter(i => {
                x.push(i.name)
            });
            const y = Object.keys(this.home_page_info).filter(j => {
                return x.includes(j)
            });
            this.currentBanner = y.toString()
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

</style>