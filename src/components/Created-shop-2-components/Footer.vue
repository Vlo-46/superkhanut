<template>
    <footer>
        <hr>
        <h5 class="center-align">CONTACT INFORMATION</h5>
        <hr>
        <div class="row">
            <template v-for="id in footer_ids">
                <template v-if="id === 'footer-logo-component'">
                    <div class="col s12 m4 l4" :key="id" id="footer-logo-component">
                        <div class="footer-content">
                        <span>
                            <i class="material-icons" :style="footer_info.icon_style">local_phone</i></span>
                            <span>CALL</span>
                            <p v-if="support_computed && support_computed.phone">{{support.phone}}</p>
                            <p v-else>+374 56 45 32 (example)</p>
                        </div>
                    </div>
                </template>
                <template v-else-if="id === 'footer-contact-component'">
                    <div class="col s12 m4 l4" :key="id" id="footer-contact-component">
                        <div class="footer-content">
                            <span><i class="material-icons" :style="footer_info.icon_style">location_on</i></span>
                            <span>FIND US</span>
                            <p v-if="support_computed && support_computed.address">{{support.address}}</p>
                            <p v-else>Adelboden, Switzerland</p>
                        </div>
                    </div>
                </template>
                <template v-else-if="id === 'footer-info-component'">
                    <div class="col s12 m4 l4" :key="id" id="footer-info-component">
                        <div class="footer-content">
                            <span><i class="material-icons" :style="footer_info.icon_style">email</i></span>
                            <span>EMAIL</span>
                            <p v-if="support_computed && support_computed.email">{{support.email}}</p>
                            <p v-else>example@mail.ru</p>
                        </div>
                    </div>
                </template>
            </template>
        </div>
    </footer>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        props: ['logo', 'support', 'company_name'],
        computed: {
            ...mapState(['footer_info', 'footer_ids']),
            support_computed() {
                return this.support
            }
        },

    }
</script>

<style scoped>
    footer {
        margin-top: 80px;
        padding-bottom: 20px;
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        padding-bottom: 20px;
    }

    .footer-content p {
        color: #ababab;
        margin-bottom: 0;
    }

    .footer-content span {
        font-weight: bold;
        color: #111;
    }

    i {
        color: #6ba229;
        font-size: 24px;
    }

</style>

