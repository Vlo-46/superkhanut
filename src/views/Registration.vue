<template>
    <div class="register">
        <nav>
            <div class="container">
                <ul>
                    <li><a href="/"><img :src="website_logo.value" alt="" class="responsive-img"></a></li>
                    <li><a href="">
                        <router-link to="/signin" class="signin_btn btn">Sign in</router-link>
                    </a></li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <div class="row">
                <div class="col s12 m12 l6">
                    <h4 v-if="registration_title">{{registration_title.value}}</h4>
                    <p v-if="registration_text">{{registration_text.value}}</p>
                </div>
                <div class="col s12 m12 l6">
                    <div class="row">
                        <div class="col s12 m12 l12">
                            <ul class="tabs">
                                <li class="tab col s6 m6 l6"><a href="#user">User</a></li>
                                <li class="tab col s6 m6 l6"><a href="#company">Company</a></li>
                            </ul>
                        </div>
                        <div id="user" class="col s12">
                            <RegUser/>
                        </div>
                        <div id="company" class="col s12">
                            <RegCompany/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <footer>
                <router-link to="/help">Help Center</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/conditions">Conditions</router-link>
            </footer>
        </div>
    </div>
</template>

<script>
    import RegCompany from '../components/auth/RegCompany'
    import RegUser from '../components/auth/RegUser'
    import keys from "../keys";
    import axios from 'axios'

    import {mapActions, mapState} from 'vuex'

    export default {
        data() {
            return {
                info: []
            }
        },
        components: {
            RegCompany,
            RegUser
        },
        methods: {
            ...mapActions(['GET_SETTINGS'])
        },
        computed: {
            ...mapState(['settings']),
            website_logo() {
                return this.settings.website_logo
            },
            registration_title() {
                const reg_title = this.info.filter(i => {
                    return i.key === 'registration_title'
                })[0]
                return reg_title
            },
            registration_text() {
                const reg_text = this.info.filter(i => {
                    return i.key === 'registration_text'
                })[0]
                return reg_text
            }
        },
        beforeMount() {
            let API_TOKEN = keys.API_TOKEN;
            let LOCALSTORAGE_TOKEN = localStorage.getItem(API_TOKEN);

            if (LOCALSTORAGE_TOKEN) {
                this.$router.push('/profile')
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
    nav {
        background-color: #111;
    }

    ul {
        display: flex;
        justify-content: space-between;
    }

    .row {
        margin-top: 50px;
    }


    .btn {
        background-color: #85b54a;
        border: none;
        border-radius: 5px;
        color: white;
        outline: none;
        text-align: center;
        transition: background-color 0.1s;
    }

    p {
        line-height: 35px;
        font-size: 14px;
    }

    footer {
        display: flex;
        justify-content: center;
        margin-top: 80px;
        border-top: 1px solid #bababa;
    }

    footer a {
        padding: 5px 22px;
        color: #bababa;
        font-size: 15px;
    }


    input[type="checkbox"]:checked + span:not(.lever):before {
        top: -4px;
        left: -5px;
        width: 12px;
        height: 22px;
        border-top: 2px solid transparent;
        border-left: 2px solid transparent;
        border-right: 2px solid #85b54a;
        border-bottom: 2px solid #85b54a;
        -webkit-transform: rotate(40deg);
        transform: rotate(40deg);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
    }

    .tabs {
        display: block;
    }

    .tabs li a {
        color: #b9b3b3;
    }

    .tabs li a:hover {
        color: #666;
    }

    .tabs .tab a.active {
        background-color: transparent;
        color: #666;
    }

    img {
        width: 110px;
    }
</style>