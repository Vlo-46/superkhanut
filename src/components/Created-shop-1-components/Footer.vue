<template>
    <footer>
        <div class="row">
            <template v-for="id in footer_ids">
                <template v-if="id === 'footer-logo-component'">
                    <div :key="id" class="col s12 m12 l4">
                        <div class="imgBox">
                            <img v-if="logo" :src="logo" alt="" class="responsive-img">
                            <img v-else src="../../assets/logo-comp.png" alt="">
                        </div>
                        <ul class="links">
                            <div>
                                <a :href="support.instagram" target="_blank" v-if="support_computed">
                                    <i class="fab fa-instagram" :style="footer_info.icon_style"></i>
                                </a>
                                <a href="your_instagram_link" target="_blank" v-else>
                                    <i class="fab fa-instagram" :style="footer_info.icon_style"></i>
                                </a>
                            </div>
                            <div>
                                <a :href="support.facebook" target="_blank" v-if="support_computed">
                                    <i class="fab fa-facebook-f" :style="footer_info.icon_style"></i>
                                </a>
                                <a href="your_facebook_link" target="_blank" v-else>
                                    <i class="fab fa-facebook-f" :style="footer_info.icon_style"></i>
                                </a>
                            </div>
                        </ul>
                    </div>
                </template>
                <template v-else-if="id === 'footer-contact-component'">
                    <div :key="id" class="col s12 m6 l4">
                        <div>
                            <p>Address</p>
                            <span v-if="support_computed" v>{{support.address}}</span>
                            <span v-else>Company address</span>
                        </div>
                        <div>
                            <p>Need Help?</p>
                            <span v-if="support_computed">Call: {{support.phone}}</span>
                            <span v-else>Call: example +374 123 456</span>
                        </div>
                        <div>
                            <p>Email</p>
                            <span v-if="support_computed">{{support.email}}</span>
                            <span v-else>example@gmail.com</span>
                        </div>
                    </div>
                </template>
                <template v-else-if="id === 'footer-info-component'">
                    <div :key="id" class="col s12 m6 l4 information-box">
                        <p>Information</p>
                        <ul>
                            <li>
                                <a :href="`/${company_name}/home`" :style="footer_info.a_style">Home</a>
                            </li>
                            <li>
                                <a :href="`/${company_name}/shop`" :style="footer_info.a_style">Shop</a>
                            </li>
                            <li>
                                <a :href="`/${company_name}/about`" :style="footer_info.a_style">About</a>
                            </li>
                            <li>
                                <a :href="`/${company_name}/contact`" :style="footer_info.a_style">Contact</a>
                            </li>
                        </ul>
                    </div>
                </template>
            </template>
        </div>
        <div class="row bottom-footer">
            <div class="col s12 m6 l6"><p>© ArmCoding 2020</p></div>
            <div class="col s12 m6 l6" style="margin-top: 15px">
                <img src="../../assets/payment.png" alt="" class="responsive-img">
            </div>
        </div>
    </footer>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        props: ['logo', 'support', 'company_name'],
        computed: {
            ...mapState(['footer_info', 'footer_ids']),
            support_computed() {
                return this.support
            }
        }
    }
</script>

<style scoped>
    footer {
        border-top: 1px solid #ccc;
        margin-top: 100px;
        padding: 20px 50px;
    }

    .s4 {
        padding: 30px;
    }

    .information-box ul li {
        margin-bottom: 7px;
    }

    a {
        color: #49b14d;
    }

    a:hover {
        color: orange;
        transition: 0.5s;
    }

    .links {
        display: flex;
        /*justify-content: center;*/
    }

    .links div {
        margin: 0 10px;
    }

    i {
        font-size: 20px;
    }

    p {
        font-weight: bold;
    }

    span {
        font-size: small;
        color: #888;
    }

    .bottom-footer {
        /*display: flex;*/
        /*align-items: center;*/
        /*width: 100%;*/
        /*justify-content: space-between;*/
        border-top: 1px solid #ccc;
    }
</style>