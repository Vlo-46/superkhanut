<template>
    <div class="contact-page">
        <NavWrapper/>
        <Header/>
        <NavBar/>
        <div class="container contact">
            <div class="row">
                <div class="col s6">
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
                        <button class="btn">Send<i class="material-icons right">send</i></button>
                    </div>
                </div>
                <div class="col s6">
                    <div class="contact-info-box">
                        <h5>Contact Us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut dolor doloremque
                            excepturi fugit itaque quibusdam recusandae repellat, tempore veritatis.</p>
                        <div>
                            <p><i class="material-icons">location_on</i>&nbsp; Address</p>
                            <span>123 Main Street, Anytown, CA 12345 – USA</span>
                        </div>
                        <div>
                            <p><i class="material-icons">phone</i>&nbsp; Phone</p>
                            <span>Mobile: (08) 123 456 789</span>
                            <br>
                            <span>Hotline: 1009 678 456</span>
                        </div>
                        <div>
                            <p><i class="material-icons">local_post_office</i>&nbsp; Email</p>
                            <span>yourmail@domain.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>

    </div>
</template>

<script>
    import Header from '../../components/company-example-1/Header'
    import NavBar from '../../components/company-example-1/Navbar'
    import Footer from '../../components/company-example-1/Footer'
    import NavWrapper from '../../components/Navbar'

    export default {
        components: {
            Header,
            NavBar,
            Footer,
            NavWrapper
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

    .contact {
        margin: 100px auto;
    }

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