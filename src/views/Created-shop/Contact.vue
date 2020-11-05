<template>
    <div class="contact-example-1">
        <NavWrapper/>
        <Header :support="company_admin_settings.support_field" :logo="company_admin_settings.company_logo"/>

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
        <div class="container contact">
            <div class="row">
                <contact-send-msg/>
                <contact-information :text="company_admin_settings.contact_text"
                                     :support="company_admin_settings.support_field"
                />
            </div>
        </div>
        <div class="map">
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="100%" height="400" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=armenia&t=k&z=9&ie=UTF8&iwloc=&output=embed"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">

                    </iframe>
                    <a href="https://www.whatismyip-address.com/divi-discount/"></a></div>
            </div>
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
    import NavWrapper from '../../components/Navbar'

    import NavBar from '../../components/Created-shop-1-components/Navbar'

    import Header_1 from '../../components/Created-shop-1-components/Header'
    import Header_2 from '../../components/Created-shop-2-components/Header'
    import Header_3 from '../../components/Created-shop-3-components/Header'
    import Footer_1 from '../../components/Created-shop-1-components/Footer'
    import Footer_2 from '../../components/Created-shop-2-components/Footer'
    import Footer_3 from '../../components/Created-shop-3-components/Footer'

    import contact_send_mgs from '../../components/Created-shop-1-components/Contact-send-msg'
    import contact_information from '../../components/Created-shop-1-components/Contact-information'

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
            Header_1,
            Header_2,
            Header_3,
            Footer_1,
            Footer_2,
            Footer_3,
            'contact-send-msg': contact_send_mgs,
            'contact-information': contact_information
        },
        computed: {
            ...mapState(['contact_page_ids', 'company_admin_settings', 'schema'])
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

    .map {
        margin-top: 100px;
    }

    .mapouter {
        position: relative;
        text-align: right;
        height: 400px;
        width: 100%;
    }

    .gmap_canvas {
        overflow: hidden;
        background: none !important;
        height: 400px;
        width: 100%;
    }
</style>