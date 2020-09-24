<template>
    <div class="col s12 m6 l6" id="contact-information-component">
        <contact-information-1 v-if="contact_information_field.contact_information === 'contact-information-1'"/>

        <div class="contact-box" v-else>
            <span>Contact information</span>
        </div>
    </div>
</template>

<script>
    import contact_information_1 from '../Contact-information/Contact-information'

    import {mapState} from 'vuex'

    export default {
        components: {
            'contact-information-1': contact_information_1
        },
        computed: {
            ...mapState(['contact_information_field'])
        }
    }
</script>

<style scoped>
    .l6 {
        margin-bottom: 20px;
    }

    .contact-box {
        height: 400px;
        border: dotted;
        position: relative;
        cursor: pointer;
    }

    .contact-box span {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>