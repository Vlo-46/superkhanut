<template>
    <div class="company-about">
        <NavWrapper/>
        <Header :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"/>
        <NavBar :company_name="company_name"/>
        <div class="container">
            <About/>
        </div>
        <Footer :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"/>
    </div>
</template>

<script>
    import NavWrapper from '../../components/Navbar';
    import Header from '../../components/Created-shop-components/Header'
    import NavBar from '../../components/Created-shop-components/Navbar';
    import About from '../../components/Created-shop-components/About'
    import Footer from '../../components/Created-shop-components/Footer'

    import {mapActions, mapState} from "vuex";

    export default {
        data() {
            return {
                company_name: ''
            }
        },
        components: {
            NavWrapper,
            Header,
            NavBar,
            About,
            Footer
        },
        methods: {
            ...mapActions(['GET_SHOP_INFO', 'GET_COMPANY_SETTINGS'])
        },
        computed: {
            ...mapState(['company_admin_settings'])
        },
        async created() {
            this.company_name = this.$route.params.pathMatch;
            let company_name = this.$route.params.pathMatch;
            await this.GET_SHOP_INFO(company_name);
            await this.GET_COMPANY_SETTINGS(company_name);
        }
    }
</script>

