<template>
    <div class="contact-page">
        <NavBar/>
        <Header/>
        <div class="contact row container">
            <div class="col s12 m5 l5" style="padding: 30px">
                <div class="row contact-box">
                    <div class="col s3">
                        <i class="material-icons">call</i>
                    </div>
                    <div class="col s9">
                        <p class="title-contact">Call Us</p>
                        <p class="content-contact">(+123) 123-456-789</p>
                    </div>
                </div>
                <div class="row contact-box">
                    <div class="col s3">
                        <i class="material-icons">message</i>
                    </div>
                    <div class="col s9">
                        <p class="title-contact">Message</p>
                        <p class="content-contact">example@gmail.com</p>
                    </div>
                </div>
                <div class="row contact-box">
                    <div class="col s3">
                        <i class="material-icons">place</i>
                    </div>
                    <div class="col s9">
                        <p class="title-contact">Our Location</p>
                        <p class="content-contact">location ArmCoding</p>
                    </div>
                </div>
                <div class="row contact-box">
                    <div class="col s3">
                        <i class="material-icons">query_builder</i>
                    </div>
                    <div class="col s9">
                        <p class="title-contact">Working Hours</p>
                        <p class="content-contact">Mon-Sat 09:00 - 19:00</p>
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
        <Footer/>
    </div>
</template>

<script>
    import NavBar from '../components/Navbar'
    import Footer from '../components/Footer'
    import Header from '../components/contact/header'

    export default {
        components: {
            NavBar,
            Footer,
            Header
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