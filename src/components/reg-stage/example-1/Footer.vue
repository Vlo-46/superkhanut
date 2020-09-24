<template>
    <footer>
        <div class="row" v-dragula="footer_components" bag="footer" id="dragula_footer_components">
            <template v-for="id in FETCH_FOOTER_COMPONENT_IDS">
                <template v-if="id === 'footer-logo-component'">
                    <div class="col s12 m12 l4" :key="id" id="footer-logo-component">
                        <div class="imgBox">
                            <img src="../../../assets/logo-comp.png" alt="" class="responsive-img">
                        </div>
                        <ul class="links" @click="OPEN_RIGHT_PANEL('icon')">
                            <div>
                                <a href="" @click.prevent=""><i class="fab fa-instagram" :style="right_panel.icon"></i></a>
                            </div>
                            <div>
                                <a href="" @click.prevent=""><i class="fab fa-facebook-f" :style="right_panel.icon"></i></a>
                            </div>
                            <div>
                                <a href="" @click.prevent=""><i class="fab fa-twitter" :style="right_panel.icon"></i></a>
                            </div>
                            <div>
                                <a href="" @click.prevent=""><i class="fab fa-youtube" :style="right_panel.icon"></i></a>
                            </div>
                        </ul>
                    </div>
                </template>
                <template v-else-if="id === 'footer-contact-component'">
                    <div class="col s12 m6 l4" :key="id" id="footer-contact-component">
                        <div>
                            <p>Address</p>
                            <span>4710-4890 Breckinridge St, UK Burlington, VT 05401</span>
                        </div>
                        <div>
                            <p>Need Help?</p>
                            <span>Call: 1-800-345-6789</span>
                        </div>
                    </div>
                </template>
                <template v-else-if="id === 'footer-info-component'">
                    <div class="col s12 m6 l4 information-box" :key="id" id="footer-info-component">
                        <p>Information</p>
                        <ul>
                            <li>
                                <router-link to="/example-1">Home</router-link>
                            </li>
                            <li>
                                <router-link to="/example-1/shop">Shop</router-link>
                            </li>
                            <li>
                                <router-link to="/example-1/about">About</router-link>
                            </li>
                            <li>
                                <router-link to="/example-1/contact">Contact</router-link>
                            </li>
                        </ul>
                    </div>
                </template>
            </template>
        </div>
        <div class="row bottom-footer">
            <div class="col s12 m6 l6"><p>© ArmCoding 2020</p></div>
            <div class="col s12 m6 l6" style="margin-top: 15px"><img src="../../../assets/payment.png" alt="" class="responsive-img"></div>
        </div>
    </footer>
</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex'
    import Vue from "vue";

    export default {
        data() {
            return {
                footer_components: []
            }
        },
        methods: {
            ...mapActions(['OPEN_RIGHT_PANEL', 'GET_FOOTER_COMPONENTS_IDS'])
        },
        computed: {
            ...mapState(['right_panel']),
            ...mapGetters(['FETCH_FOOTER_COMPONENT_IDS'])
        },
        created() {
            Vue.vueDragula.eventBus.$on('drop', () => {
                // console.log(args);
                let arr = [];
                let wrapper = document.getElementById('dragula_footer_components');
                for (let i = 0; i < wrapper.childNodes.length; i++) {
                    let childId = wrapper.childNodes[i].id;
                    // console.log(wrapper.childNodes[i])
                    arr.push(childId);
                }
                // console.log(arr)
                this.GET_FOOTER_COMPONENTS_IDS(arr)
            })
        },
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