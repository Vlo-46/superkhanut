<template>
    <div class="company-about">
        <NavWrapper :website_logo="website_logo"/>
        <template v-if="schema === 'example-1'">
            <Header_1 :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"/>
        </template>
        <template v-else-if="schema === 'example-2'">
            <Header_2 :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"/>
        </template>
        <template v-else>
            <Header_3 :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"/>
        </template>

        <NavBar :company_name="company_name"/>
        <div class="container">
            <About :border="header_info.button.color" :icon_style="footer_info.icon_style" :about="company_admin_settings.about_field"/>
        </div>


        <template v-if="schema === 'example-1'">
            <Footer_1 :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"
                      :company_name="company_name"/>
        </template>
        <template v-else-if="schema === 'example-2'">
            <Footer_2 :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"
                      :company_name="company_name"/>
        </template>
        <template v-else>
            <Footer_3 :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"
                      :company_name="company_name"/>
        </template>
    </div>
</template>

<script>
    import NavWrapper from '../../components/Navbar';
    import Header_1 from '../../components/Created-shop-1-components/Header'
    import Header_2 from '../../components/Created-shop-2-components/Header'
    import Header_3 from '../../components/Created-shop-3-components/Header'
    import NavBar from '../../components/Created-shop-1-components/Navbar';
    import About from '../../components/Created-shop-1-components/About'
    import Footer_1 from '../../components/Created-shop-1-components/Footer'
    import Footer_2 from '../../components/Created-shop-2-components/Footer'
    import Footer_3 from '../../components/Created-shop-3-components/Footer'

    import {mapActions, mapState} from "vuex";

    export default {
        data() {
            return {
                company_name: ''
            }
        },
        components: {
            NavWrapper,
            Header_1,
            Header_2,
            Header_3,
            NavBar,
            About,
            Footer_1,
            Footer_2,
            Footer_3,
        },
        methods: {
            ...mapActions(['GET_SHOP_INFO', 'GET_COMPANY_SETTINGS', 'GET_SETTINGS'])
        },
        computed: {
            ...mapState(['company_admin_settings', 'schema', 'header_info', 'footer_info', 'settings']),
            website_logo() {
                return this.settings.website_logo
            },
        },
        async created() {
            this.company_name = this.$route.params.pathMatch;
            let company_name = this.$route.params.pathMatch;
            await this.GET_SHOP_INFO(company_name);
            await this.GET_COMPANY_SETTINGS(company_name);
            this.GET_SETTINGS()
        }
    }
</script>

