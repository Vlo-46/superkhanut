<template>
    <div class="col s12 m6 l6">
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
                <button class="btn" :style="button_style">Send<i class="material-icons right" :style="icon_style">send</i></button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['icon_style', 'button_style']
    }

</script>


<style scoped>
    .l6 {
        margin-bottom: 20px;
    }

</style>