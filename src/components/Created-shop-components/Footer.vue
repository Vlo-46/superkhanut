<template>
    <footer>
        <div class="row">
            <template v-for="id in footer_ids">
                <template v-if="id === 'footer-logo-component'">
                    <div :key="id" class="col s12 m12 l4">
                        <div class="imgBox">
                            <img :src="logo" alt="" class="responsive-img">
                        </div>
                        <ul class="links">
                            <div>
                                <a :href="support.instagram" target="_blank"><i class="fab fa-instagram"
                                                                                :style="footer_info.icon_style"></i></a>
                            </div>
                            <div>
                                <a :href="support.facebook" target="_blank"><i class="fab fa-facebook-f"
                                                                               :style="footer_info.icon_style"></i></a>
                            </div>
                            <!--                            <div>-->
                            <!--                                <a href=""><i class="fab fa-twitter" :style="footer_info.icon_style"></i></a>-->
                            <!--                            </div>-->
                            <!--                            <div>-->
                            <!--                                <a href=""><i class="fab fa-youtube" :style="footer_info.icon_style"></i></a>-->
                            <!--                            </div>-->
                        </ul>
                    </div>
                </template>
                <template v-else-if="id === 'footer-contact-component'">
                    <div :key="id" class="col s12 m6 l4">
                        <div>
                            <p>Address</p>
                            <span>{{support.address}}</span>
                        </div>
                        <div>
                            <p>Need Help?</p>
                            <span>Call: {{support.phone}}</span>
                        </div>
                        <div>
                            <p>Email</p>
                            <span>{{support.email}}</span>
                        </div>
                    </div>
                </template>
                <template v-else-if="id === 'footer-info-component'">
                    <div :key="id" class="col s12 m6 l4 information-box">
                        <p>Information</p>
                        <ul>
                            <li>
                                <router-link to="" :style="footer_info.a_style">Home</router-link>
                            </li>
                            <li>
                                <router-link to="" :style="footer_info.a_style">Shop</router-link>
                            </li>
                            <li>
                                <router-link to="" :style="footer_info.a_style">About</router-link>
                            </li>
                            <li>
                                <router-link to="" :style="footer_info.a_style">Contact</router-link>
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
        props: ['logo', 'support'],
        computed: {
            ...mapState(['footer_info', 'footer_ids'])
        }
    }
</script>

<style scoped>
    footer {
        border-top: 1px solid #ccc;
        margin-top: 100px;
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