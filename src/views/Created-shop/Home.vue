<template>
    <div class="home-example-1" v-if="schema === 'example-1'">
        <NavWrapper/>
        <!--        header-->
        <Header :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"/>
        <NavBar :company_name="company_name"/>
        <div>
            <template v-for="id in home_page_ids">
                <template v-if="id === 'slider-component'">
                    <!--        slider-->
                    <Slider :key="id" :slider="company_admin_settings.slider_field"/>
                </template>
                <template v-else-if="id === 'banner-component'">
                    <!--        banner-->
                    <Banner :key="id"/>
                </template>
                <template v-else-if="id === 'product-component'">
                    <!--        products-->
                    <Product :key="id"/>
                </template>
            </template>
        </div>
        <!--        footer-->
        <Footer :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"/>
    </div>
</template>

<script>
    import NavWrapper from '../../components/Navbar';
    import NavBar from '../../components/Created-shop-components/Navbar';
    import Header from '../../components/Created-shop-components/Header';
    import Slider from '../../components/Created-shop-components/Slider';
    import Banner from '../../components/Created-shop-components/Banner';
    import Product from '../../components/Created-shop-components/Product';
    import Footer from '../../components/Created-shop-components/Footer';

    import {mapState, mapActions} from 'vuex'


    export default {
        data() {
            return {
                sections: [],
                company_name: ''
            }
        },
        components: {
            NavWrapper,
            NavBar,
            Header,
            Slider,
            Banner,
            Product,
            Footer
        },
        methods: {
            ...mapActions(['GET_SHOP_INFO', 'GET_COMPANY_SETTINGS'])
        },
        computed: {
            ...mapState(['schema', 'home_page_ids', 'company_admin_settings'])
        },
        async created() {
            let company_name = this.$route.params.pathMatch;
            await this.GET_SHOP_INFO(company_name);
            await this.GET_COMPANY_SETTINGS(company_name);
            this.company_name = this.$route.params.pathMatch;
        }
    }
</script>

<style scoped>

</style>