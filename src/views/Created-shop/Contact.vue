<template>
    <div class="contact-example-1">
        <NavWrapper/>
        <Header :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"/>
        <NavBar :company_name="company_name"/>
        <div class="container contact">
            <div class="row">
                <template v-for="id in contact_page_ids">
                    <template v-if="id === 'contact-send-msg-component'">
                        <contact-send-msg :key="id"/>
                    </template>
                    <template v-else-if="id === 'contact-information-component'">
                        <contact-information :key="id" :text="company_admin_settings.contact_text" :support="company_admin_settings.support_field"/>
                    </template>
                </template>
            </div>
        </div>
        <Footer :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"/>
    </div>
</template>

<script>
    import NavWrapper from '../../components/Navbar'

    import NavBar from '../../components/Created-shop-components/Navbar'
    import Header from '../../components/Created-shop-components/Header'
    import Footer from '../../components/Created-shop-components/Footer'

    import contact_send_mgs from '../../components/Created-shop-components/Contact-send-msg'
    import contact_information from '../../components/Created-shop-components/Contact-information'

    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                company_name: ''
            }
        },
        components: {
            NavWrapper,
            NavBar,
            Header,
            Footer,
            'contact-send-msg': contact_send_mgs,
            'contact-information': contact_information
        },
        computed: {
            ...mapState(['contact_page_ids', 'company_admin_settings'])
        },
        methods: {
            ...mapActions(['GET_SHOP_INFO', 'GET_COMPANY_SETTINGS'])
        },
        async created() {
            let company_name = this.$route.params.pathMatch;
            await this.GET_SHOP_INFO(company_name);
            await this.GET_COMPANY_SETTINGS(company_name);
            this.company_name = this.$route.params.pathMatch
        }
    }
</script>

<style scoped>
    .contact {
        margin: 100px auto;
    }

</style>