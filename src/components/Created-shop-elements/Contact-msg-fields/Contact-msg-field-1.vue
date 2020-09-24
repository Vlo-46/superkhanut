<template>
    <div>
        <h4>Tell Us Your Message</h4>
        <div class="input-field">
            <input type="text">
            <label>Your name</label>
        </div>
        <div class="input-field">
            <input type="text">
            <label>Your email</label>
        </div>
        <div class="input-field">
            <input type="text">
            <label>Subject</label>
        </div>
        <div class="input-field">
            <textarea class="materialize-textarea"></textarea>
            <label>Your message</label>
        </div>
        <div>
            <button class="btn" :style="right_panel.button">Send<i class="material-icons right" :style="right_panel.icon">send</i></button>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        computed: {
            ...mapState(['right_panel'])
        }
    }

</script>

<style scoped>
    .btn {
        background-color: #49b14d;
        color: #fff;
    }

    .btn i {
        color: #fff;
    }
</style>