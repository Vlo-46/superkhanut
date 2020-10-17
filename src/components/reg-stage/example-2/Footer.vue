<template>
    <footer class="container-fluid" v-dragula="footer_components" :bag="footer_components">
        <hr>
        <h5 class="center-align">CONTACT INFORMATION</h5>
        <hr>
        <div class="col s12 m4 l4">
            <div class="footer-content">
                <span @click.prevent="OPEN_RIGHT_PANEL('icon')"><i class="material-icons" :style="right_panel.icon">local_phone</i></span>
                <span>CALL</span>
                <p>+374 12 34 56</p>
                <p>+374 56 45 32</p>
            </div>
        </div>
        <div class="col s12 m4 l4">
            <div class="footer-content">
                <span @click.prevent="OPEN_RIGHT_PANEL('icon')"><i class="material-icons" :style="right_panel.icon">location_on</i></span>
                <span>FIND US</span>
                <p>Hahnenmoos strasse 20C, 3715</p>
                <p>Adelboden, Switzerland</p>
            </div>
        </div>
        <div class="col s12 m4 l4">
            <div class="footer-content">
                <span @click.prevent="OPEN_RIGHT_PANEL('icon')"><i class="material-icons" :style="right_panel.icon">email</i></span>
                <span>EMAIL</span>
                <p>example@gmail.com</p>
                <p>example@mail.ru</p>
            </div>
        </div>
    </footer>
</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        data() {
            return {
                footer_components: []
            }
        },
        methods: {
            ...mapActions(['OPEN_RIGHT_PANEL'])
        },
        computed: {
            ...mapState(['right_panel'])
        },
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
</style>

