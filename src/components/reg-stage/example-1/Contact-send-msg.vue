<template>
    <div class="col s12 m6 l6" id="contact-send-msg-component">
        <contact-msg-field-1 v-if="contact_send_msg_field.contact_send_msg === 'contact-send-msg-1'"/>

        <div class="contact-box" v-else>
            <span>Message field</span>
        </div>
    </div>
</template>

<script>
    import contact_msg_field_1 from '../Contact-msg-fields/Contact-msg-field-1'
    import {mapState} from 'vuex'

    export default {
        components: {
            'contact-msg-field-1': contact_msg_field_1
        },

        computed: {
            ...mapState(['contact_send_msg_field'])
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