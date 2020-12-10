<template>
    <div class="col s12 m6 l6">
        <div class="contact-info-box">
            <h5>Contact Us</h5>
            <p v-if="$text">{{text}}</p>
            <div>
                <p><i class="material-icons" :style="icon_style">location_on</i>&nbsp; Address</p>
                <span v-if="$support">{{support.address}}</span>
            </div>
            <div>
                <p><i class="material-icons" :style="icon_style">phone</i>&nbsp; Phone</p>
                <span v-if="$support">Mobile: {{support.phone}}</span>
                <br>
            </div>
            <div>
                <p><i class="material-icons" :style="icon_style">local_post_office</i>&nbsp; Email</p>
                <span v-if="$support">{{support.email}}</span>
            </div>
        </div>
        {{$text}}
    </div>
</template>

<script>

    export default {
        props: ['text', 'support', 'button_style', 'icon_style'],
        computed: {
            $text() {
                return this.text
            },
            $support() {
                return this.support
            }
        }

    }
</script>

<style scoped>
    .l6 {
        margin-bottom: 20px;
    }

    .contact-info-box {
        padding: 30px;
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