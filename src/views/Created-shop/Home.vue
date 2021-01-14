<!--CREATED SHOP HOME PAGE-->

<template>
    <div>
        <!--        HOME PAGE EXAMPLE 1 START-->
        <div class="home-example-1" v-if="schema === 'example-1'">
            <NavWrapper/>
            <!--        header-->
            <Header :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"
                    :company_name="company_name"/>
            <NavBar :company_name="company_name"/>
            <div>
                <template v-for="id in home_page_ids">
                    <template v-if="id === 'slider-component'">
                        <!--        slider-->
                        <Slider v-if="slider_computed.length > 0" :key="id" :slider="slider_computed"/>
                    </template>
                    <template v-else-if="id === 'banner-component'">
                        <!--        banner-->
                        <Banner :key="id" :advertising="company_admin_settings.advertising"/>
                    </template>
                    <template v-else-if="id === 'product-component'">
                        <!--        products-->
                        <Product :key="id"/>
                    </template>
                </template>
            </div>
            <!--        footer-->
            <Footer :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"
                    :company_name="company_name"/>
        </div>
        <!--        HOME EXAMPLE 1 END-->

        <!--        HOME PAGE EXAMPLE 2 START-->
        <div class="home-example-2" v-else-if="schema === 'example-2'">
            <NavWrapper/>
            <Header_2 :support="company_admin_settings.support_field"
                      :logo="company_admin_settings.company_logo"
                      :company_name="company_name"/>
            <NavBar_2 :company_name="company_name"/>
            <div>
                <template v-for="id in home_page_ids">
                    <template v-if="id === 'slider-component'">
                        <!--        slider-->
                        <Slider_2 v-if="slider_computed.slider_img.length > 0" :key="id" :slider="slider_computed"/>
                    </template>
                    <template v-else-if="id === 'banner-component'">
                        <!--        banner-->
                        <Banner_2 :key="id"/>
                    </template>
                    <template v-else-if="id === 'product-component'">
                        <!--        products-->
                        <Product_2 :key="id"/>
                    </template>
                </template>
            </div>
            <Footer_2 :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"
                      :company_name="company_name"/>
        </div>
        <!--        HOME PAGE EXAMPLE 2 END-->

        <!--        HOME PAGE EXAMPLE 3 START-->
        <div class="home-example-3" v-else>
            <NavWrapper/>
            <Header_3 :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"
                      :company_name="company_name"/>
            <NavBar_3 :company_name="company_name"/>
            <div>
                <template v-for="id in home_page_ids">
                    <template v-if="id === 'slider-component'">
                        <!--        slider-->
                        <Slider_3 v-if="slider_computed.slider_img.length > 0" :key="id" :slider="slider_computed"/>
                    </template>
                    <template v-else-if="id === 'banner-component'">
                        <!--        banner-->
                        <Banner_3 :key="id"/>
                    </template>
                    <template v-else-if="id === 'product-component'">
                        <!--        products-->
                        <Product_3 :key="id"/>
                    </template>
                </template>
            </div>
            <Footer_3 :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"
                      :company_name="company_name"/>
        </div>
        <!--        HOME PAGE EXAMPLE 3 END-->
    </div>
</template>

<script>
    import NavWrapper from '../../components/Navbar';

    //CREATED SHOP, HOME PAGE 1
    import NavBar from '../../components/Created-shop-1-components/Navbar';
    import Header from '../../components/Created-shop-1-components/Header';
    import Slider from '../../components/Created-shop-1-components/Slider';
    import Banner from '../../components/Created-shop-1-components/Banner';
    import Product from '../../components/Created-shop-1-components/Product';
    import Footer from '../../components/Created-shop-1-components/Footer';

    //CREATED SHOP, HOME PAGE 2
    import NavBar_2 from '../../components/Created-shop-2-components/Navbar';
    import Header_2 from '../../components/Created-shop-2-components/Header';
    import Slider_2 from '../../components/Created-shop-2-components/Slider';
    import Product_2 from '../../components/Created-shop-2-components/Tabs';
    import Banner_2 from '../../components/Created-shop-2-components/Carousel';
    import Footer_2 from '../../components/Created-shop-2-components/Footer';

    //CREATED SHOP, HOME PAGE 3
    import NavBar_3 from '../../components/Created-shop-3-components/Navbar';
    import Header_3 from '../../components/Created-shop-3-components/Header';
    import Slider_3 from '../../components/Created-shop-3-components/Slider';
    import Banner_3 from '../../components/Created-shop-3-components/Carousel';
    import Product_3 from '../../components/Created-shop-3-components/Product';
    import Footer_3 from '../../components/Created-shop-3-components/Footer'


    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                sections: [],
                company_name: ''
            }
        },
        components: {
            //CREATED SHOP HOME PAGE 1
            NavWrapper,
            NavBar,
            Header,
            Slider,
            Banner,
            Product,
            Footer,
            //CREATED SHOP HOME PAGE 2
            NavBar_2,
            Header_2,
            Slider_2,
            Product_2,
            Banner_2,
            Footer_2,
            //CREATED SHOP HOME PAGE 3
            NavBar_3,
            Header_3,
            Slider_3,
            Banner_3,
            Product_3,
            Footer_3,
        },
        methods: {
            ...mapActions(['GET_SHOP_INFO', 'GET_COMPANY_SETTINGS'])
        },
        computed: {
            ...mapState(['schema', 'home_page_ids', 'company_admin_settings']),
            slider_computed() {
                return this.company_admin_settings.slider_field
            }
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