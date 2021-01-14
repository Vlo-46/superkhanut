<template>
    <div class="home">
        <navBar/>
        <NavWrapper/>
        <tabs :companies="companies.companies"
              :products="products.products"
              :topCompanies="topCompany.top_companies"
        />
        <footer-wrapper/>
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
            ...mapActions(['GET_ALL_COMPANIES', 'GET_ALL_PRODUCTS_IN_COMPANIES', 'GET_TOP_COMPANIES'])
        },
        computed: {
            ...mapState(['companies', 'products', 'topCompany'])
        },
        async created() {
            await this.GET_ALL_COMPANIES();
            await this.GET_ALL_PRODUCTS_IN_COMPANIES()
            await this.GET_TOP_COMPANIES()
        }
    }
</script>

<style>
    .tabs .indicator {
        background-color: #777;
    }
</style>