<template>
    <footer>
        <div class="row">
            <template v-for="id in footer_ids">
                <template v-if="id === 'footer-logo-component'">
                    <div class="col s12 m4 l4" :key="id" id="footer-logo-component">
                        <div class="company_logo">
                            <img v-if="logo" :src="logo" alt="">
                            <img v-else src="../../assets/logo-comp.png" alt="">
                        </div>
                        <div style="padding: 0 20px;">
                    <span>
                        <small>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis delectus
                            dolores eveniet maxime nam nobis totam. Maxime nulla quas saepe
                            similique sint. Consequuntur molestias neque similique ut, velit voluptatum!
                        </small>
                    </span>
                        </div>
                    </div>
                </template>
                <template v-else-if="id === 'footer-info-component'">
                    <div class="col s12 m4 l4" :key="id" id="footer-info-component">
                        <ul>
                            <h6>COMPANY PAGES</h6>
                            <div class="hr"></div>
                            <li><a :href="`/${company_name}/home`">Home</a></li>
                            <li><a :href="`/${company_name}/shop`">Shop</a></li>
                            <li><a :href="`/${company_name}/about`">About</a></li>
                            <li><a :href="`/${company_name}/contact`">Contact</a></li>
                        </ul>
                    </div>
                </template>
                <template v-else-if="id === 'footer-contact-component'">
                    <div class="col s12 m4 l4" :key="id" id="footer-contact-component">
                        <ul class="footer-contact-field">
                            <h6>CONTACT US</h6>
                            <div class="hr"></div>
                            <li>
                                <span v-if="support_computed && support_computed.address">
                                    <i class="material-icons" :style="footer_info.icon_style">location_on</i>
                                    <small>{{support.address}}</small>
                                </span>
                                <span v-else>
                                    <i class="material-icons" :style="footer_info.icon_style">location_on</i>
                                    <small>Armenia, erevan</small>
                                </span>
                            </li>
                            <li>
                                <span v-if="support_computed && support_computed.phone">
                                    <i class="material-icons" :style="footer_info.icon_style">local_phone</i>
                                    <small>{{support.phone}}</small>
                                </span>
                                <span>
                                    <i class="material-icons" :style="footer_info.icon_style">local_phone</i>
                                    <small>+374 12 34 56 (example)</small>
                                </span>
                            </li>
                            <li>
                                <span v-if="support_computed && support_computed.email">
                                    <i class="material-icons" :style="footer_info.icon_style">message</i><small>{{support.email}}</small>
                                </span>
                                <span v-else>
                                    <i class="material-icons" :style="footer_info.icon_style">message</i><small>example@gmail.com</small>
                                </span>
                            </li>
                            <!--                            <li>-->
                            <!--                                <span>-->
                            <!--                                    <i class="material-icons" :style="footer_info.icon_style">access_time</i>-->
                            <!--                                    Mon - Sat : 0900 - 1900&nbsp;Sun : Closed-->
                            <!--                                </span>-->
                            <!--                            </li>-->
                        </ul>
                    </div>
                </template>
            </template>
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
        margin-top: 100px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        padding: 20px 50px;
    }

    img {
        width: 200px;
        height: 80px;
        display: block;
    }

    .company_logo {
        display: flex;
        justify-content: center;
    }

    .hr {
        width: 200px;
        height: 2px;
        background-color: #6ba229;
        border-radius: 20px;
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
    }

    ul li {
        margin: 8px 0;
    }

    ul li a {
        color: #666666;
        text-decoration: none;
        display: block;
    }

    ul li span {
        color: #666666;
        text-decoration: none;
        display: block;
    }

    .footer-contact-field li span {
        display: flex;
        align-items: center;
    }

    i {
        padding-right: 10px;
    }
</style>