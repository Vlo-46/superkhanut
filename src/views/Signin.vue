<template>
    <div class="register">
        <nav>
            <div class="container">
                <ul>
                    <li><a href="/"><img :src="website_logo.value" alt="" class="responsive-img"></a></li>
                    <li><a href="">
                        <a href="/registration" class="btn">Create Account</a>
                    </a></li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <div class="row">
                <div class="col s12 m6 l6">
                    <h4 v-if="login_title">{{login_title.value}}</h4>
                    <p v-if="login_text">{{login_text.value}}</p>
                </div>
                <div class="col s12 m6 l6">
                    <div class="signinBox">
                        <h4>Sign in</h4>
                        <div class="input-field">
                            <label for="login_email">Email</label>
                            <input type="email" id="login_email" v-model="user.email">
                        </div>
                        <div class="input-field">
                            <label for="login_password">Password</label>
                            <input type="password" id="login_password" v-model="user.password">
                        </div>
                        <div>
                            <button class="btn" @click="LOGIN(user)">Sign in</button>
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
    import keys from '../keys'
    import axios from "axios";

    import {mapActions, mapState} from 'vuex'

    export default {
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                },
                info: []
            }
        },
        methods: {
            ...mapActions(['LOGIN', 'GET_SETTINGS'])
        },
        computed: {
            ...mapState(['settings']),
            website_logo() {
                return this.settings.website_logo
            },
            login_title() {
                const log_title = this.info.filter(i => {
                    return i.key === 'login_title'
                })[0]
                return log_title
            },
            login_text() {
                const log_text = this.info.filter(i => {
                    return i.key === 'login_text'
                })[0]
                return log_text
            }
        },
        beforeMount() {
            let API_TOKEN = keys.API_TOKEN
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

    .signinBox {
        background-color: #fff;
        padding: 30px;
        border-right: 10px;
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

    img {
        width: 110px;
    }
</style>