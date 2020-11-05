<template>
    <div class="col s12 m6 l6">
        <contact-information-1 :text="text" :support="support"/>

    </div>
</template>

<script>
    import contact_information_1 from '../Created-shop-elements/Contact-information/Contact-information'

    export default {
        props: ['text', 'support'],
        components: {
            'contact-information-1': contact_information_1
        },

    }
</script>

<style scoped>
    .l6 {
        margin-bottom: 20px;
    }

</style>