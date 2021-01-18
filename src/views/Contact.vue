<template>
    <div class="contact-page">
        <NavBar :website_logo="website_logo"/>
        <Header/>
        <div class="contact row container">
            <div class="col s12 m5 l5" style="padding: 30px">
                <div class="row contact-box">
                    <div class="col s3">
                        <i class="material-icons">call</i>
                    </div>
                    <div class="col s9">
                        <p class="title-contact">Call Us</p>
                        <p class="content-contact" v-if="contact_call_us">{{contact_call_us.value}}</p>
                    </div>
                </div>
                <div class="row contact-box">
                    <div class="col s3">
                        <i class="material-icons">message</i>
                    </div>
                    <div class="col s9">
                        <p class="title-contact">Message</p>
                        <p class="content-contact" v-if="contact_message">{{contact_message.value}}</p>
                    </div>
                </div>
                <div class="row contact-box">
                    <div class="col s3">
                        <i class="material-icons">place</i>
                    </div>
                    <div class="col s9">
                        <p class="title-contact">Our Location</p>
                        <p class="content-contact" v-if="contact_location">{{contact_location.value}}</p>
                    </div>
                </div>
                <div class="row contact-box">
                    <div class="col s3">
                        <i class="material-icons">query_builder</i>
                    </div>
                    <div class="col s9">
                        <p class="title-contact">Working Hours</p>
                        <p class="content-contact" v-if="contact_working_hours">{{contact_working_hours.value}}</p>
                    </div>
                </div>
            </div>
            <div class="col s12 m7 l7" style="padding: 30px">
                <div>
                    <p class="title">Let's Talk about Your Business</p>
                    <div class="hr"></div>
                </div>
                <div class="input-field">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject">
                </div>
                <div class="input-field">
                    <label for="name-contact">Name</label>
                    <input type="text" id="name-contact">
                </div>
                <div class="input-field">
                    <label for="email-contact">E-mail</label>
                    <input type="text" id="email-contact">
                </div>
                <div class="input-field">
                    <label for="message-contact">Message</label>
                    <input type="text" id="message-contact">
                </div>
                <div class="send-message">
                    <button>Send Message</button>
                </div>
            </div>
        </div>
        <Footer :footer_title="footer_title" :footer_content="footer_content"/>
    </div>
</template>

<script>
    import NavBar from '../components/Navbar'
    import Footer from '../components/Footer'
    import Header from '../components/contact/header'
    import axios from "axios";
    import keys from "../keys";

    import {mapActions, mapState} from 'vuex'

    export default {
        data() {
            return {
                info: []
            }
        },
        components: {
            NavBar,
            Footer,
            Header
        },
        methods: {
            ...mapActions(['GET_SETTINGS'])
        },
        computed: {
            ...mapState(['settings']),
            contact_call_us() {
                const call_us = this.info.filter(i => {
                    return i.key === 'contact_call_us'
                })[0]
                return call_us
            },
            contact_message() {
                const message = this.info.filter(i => {
                    return i.key === 'contact_message'
                })[0]
                return message
            },
            contact_location() {
                const location = this.info.filter(i => {
                    return i.key === 'contact_location'
                })[0]
                return location
            },
            contact_working_hours() {
                const working_hours = this.info.filter(i => {
                    return i.key === 'contact_working_hours'
                })[0]
                return working_hours
            },
            website_logo() {
                return this.settings.website_logo
            },
            footer_title() {
                return this.settings.footer_title
            },
            footer_content() {
                return this.settings.footer_content
            }
        },
        created() {
            axios.get(`${keys.baseURI}/api/superstore`)
                .then(res => {
                    this.info = res.data
                })
                .catch(e => console.log(e))
            this.GET_SETTINGS()
        }
    }
</script>

<style scoped>
    .contact {
        margin-top: 100px;
    }

    .hr {
        width: 100px;
        height: 3px;
        background-color: #6ba229;
        border-radius: 5px;
    }

    .title {
        font-size: 30px;
        font-weight: 600;
        color: #111;
    }

    .send-message {
        display: flex;
    }

    .send-message button {
        background-color: #6ba229;
        color: #fff;
        cursor: pointer;
        width: 100%;
        border-radius: 3px;
        padding: 10px;
        border: 1px solid #6ba229;
    }

    .send-message button:hover {
        background-color: #fff;
        color: #6ba229;
        border: 1px solid #6ba229;
    }

    .title-contact {
        color: #111;
        font-size: 18px;
        font-weight: 500;
    }

    .content-contact {
        color: #999;
        font-size: 15px;
        font-weight: 400;
    }

    .contact-box {
        border-bottom: 1px solid #6b6b6b;
        display: flex;
        align-items: center;
    }

    i {
        font-size: 40px;
        color: #6ba229;
    }
</style>