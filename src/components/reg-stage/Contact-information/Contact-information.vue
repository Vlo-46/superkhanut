<template>
    <div class="contact-info-box">
        <h5>Contact Us</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut dolor doloremque
            excepturi fugit itaque quibusdam recusandae repellat, tempore veritatis.</p>
        <div>
            <p><i class="material-icons" :style="right_panel.icon">location_on</i>&nbsp; Address</p>
            <span>123 Main Street, Anytown, CA 12345 – USA</span>
        </div>
        <div>
            <p><i class="material-icons" :style="right_panel.icon">phone</i>&nbsp; Phone</p>
            <span>Mobile: (08) 123 456 789</span>
            <br>
            <span>Hotline: 1009 678 456</span>
        </div>
        <div>
            <p><i class="material-icons" :style="right_panel.icon">local_post_office</i>&nbsp; Email</p>
            <span>yourmail@domain.com</span>
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
    .contact-info-box {
        padding: 30px;
        background-color: #f2f2f2;
    }

    .contact-info-box span {
        font-size: small;
        color: #666;
    }

    .contact-info-box p {
        display: flex;
    }

    i {
        padding-right: 5px;
        color: #49b14d;;
    }

    .contact-info-box div {
        border-bottom: 1px solid #ccc;
    }
</style>