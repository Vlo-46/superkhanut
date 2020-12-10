<template>
    <div class="company-admin-dashboard">
        <div class="dashboard row">
            <left-panel/>
            <div class="col s12 m10 l10 right-field">
                <support-field :support="company_admin_settings.support_field"/>
                <hr>
                <company-logo-field :logo="company_admin_settings.company_logo"/>
                <hr>
                <slider-field :slider="company_admin_settings.slider_field"/>
                <hr>
                <!--                <contact-information-field :contact_text="company_admin_settings.contact_info"/>-->
                <!--                <hr>-->
                <about-field :about="company_admin_settings.about_field"/>
                <hr>
                <categories-field :categories="company_admin_settings.categories"/>
                <hr>
                <shop-page-img-field :img="company_admin_settings.shop_page_img"/>
                <hr>
                <delete-account/>
            </div>
        </div>
    </div>
</template>

<script>
    import left_panel from './Left-panel'
    import support_field from './Settings-support-field'
    import company_logo_field from './Settings-company-logo'
    import slider_field from './Settings-slider-field'
    import about_field from './Settings-about'
    import categories_field from './Settings-categories'
    import shop_page_img_field from './Settings-shop-page-img'
    import delete_account from './Settings-delete-account'
    // import contact_information_text_field from './Settings-contact'

    import {mapActions, mapState} from 'vuex'

    export default {
        components: {
            'left-panel': left_panel,
            'support-field': support_field,
            'company-logo-field': company_logo_field,
            'slider-field': slider_field,
            // 'contact-information-field': contact_information_text_field,
            'about-field': about_field,
            'categories-field': categories_field,
            'shop-page-img-field': shop_page_img_field,
            'delete-account': delete_account
        },
        methods: {
            ...mapActions(['GET_COMPANY_SETTINGS'])
        },
        computed: {
            ...mapState(['company_admin_settings']),
        },
        async created() {
            let company_name = this.$route.params.pathMatch;
            await this.GET_COMPANY_SETTINGS(company_name)
        }
    }
</script>


<style scoped>
    .dashboard {
        display: flex;
    }

    .right-field {
        padding: 30px;
    }
</style>