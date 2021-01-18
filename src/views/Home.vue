<template>
    <div class="home">
        <navBar :website_logo="website_logo"/>
        <NavWrapper/>
        <tabs :companies="companies.companies"
              :products="products.products"
              :topCompanies="topCompany.top_companies"
        />
        <footer-wrapper :footer_title="footer_title" :footer_content="footer_content"/>
    </div>
</template>

<script>
    import navBar from '../components/Navbar'
    import tabs from '../components/home/Tabs'
    import footer from '../components/Footer'
    import NavWrapper from '../components/Wraper-categories'

    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'Home',
        components: {
            navBar,
            tabs,
            'footer-wrapper': footer,
            NavWrapper,
        },
        methods: {
            ...mapActions(['GET_ALL_COMPANIES', 'GET_ALL_PRODUCTS_IN_COMPANIES', 'GET_TOP_COMPANIES', 'GET_SETTINGS'])
        },
        computed: {
            ...mapState(['companies', 'products', 'topCompany', 'settings']),
            website_logo() {
                return this.settings.website_logo
            },
            footer_title() {
                return this.settings.footer_title
            },
            footer_content() {
                return this.settings.footer_content
            }
        },
        async created() {
            await this.GET_ALL_COMPANIES();
            await this.GET_ALL_PRODUCTS_IN_COMPANIES()
            await this.GET_TOP_COMPANIES()
            this.GET_SETTINGS()
        }
    }
</script>

<style>
    .tabs .indicator {
        background-color: #777;
    }
</style>