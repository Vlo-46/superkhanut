<template>
    <footer>
        <hr>
        <h5 class="center-align">CONTACT INFORMATION</h5>
        <hr>
        <div>
            <template v-for="id in footer_ids">
                <template v-if="id === 'footer-logo-component'">
                    <div class="col s12 m4 l4" :key="id" id="footer-logo-component">
                        <div class="footer-content">
                        <span>
                            <i class="material-icons" :style="footer_info.icon_style">local_phone</i></span>
                            <span>CALL</span>
                            <p>+374 12 34 56</p>
                            <p>+374 56 45 32</p>
                        </div>
                    </div>
                </template>
                <template v-else-if="id === 'footer-contact-component'">
                    <div class="col s12 m4 l4" :key="id" id="footer-contact-component">
                        <div class="footer-content">
                            <span><i class="material-icons" :style="footer_info.icon_style">location_on</i></span>
                            <span>FIND US</span>
                            <p>Hahnenmoos strasse 20C, 3715</p>
                            <p>Adelboden, Switzerland</p>
                        </div>
                    </div>
                </template>
                <template v-else-if="id === 'footer-info-component'">
                    <div class="col s12 m4 l4" :key="id" id="footer-info-component">
                        <div class="footer-content">
                            <span><i class="material-icons" :style="footer_info.icon_style">email</i></span>
                            <span>EMAIL</span>
                            <p>example@gmail.com</p>
                            <p>example@mail.ru</p>
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
        props: ['logo', 'support'],
        computed: {
            ...mapState(['footer_info', 'footer_ids'])
        }
    }
</script>

<style scoped>
    footer {
        margin-top: 80px;
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
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

    #footer-contact-component, #footer-info-component, #footer-logo-component {
        cursor: grab;
    }
</style>

