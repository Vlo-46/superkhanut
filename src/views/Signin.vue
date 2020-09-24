<template>
    <div class="register">
        <nav>
            <div class="container">
                <ul>
                    <li><a href="/"><img src="../assets/logo.png" alt="" class="responsive-img"></a></li>
                    <li><a href="">
                        <a href="/registration" class="btn">Create Account</a>
                    </a></li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <div class="row">
                <div class="col s12 m6 l6">
                    <h4>Welcome to the Armcoding</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ipsam maiores molestiae quos
                        veniam. Accusantium aliquam animi architecto, asperiores dolores ex expedita facere in libero
                        nesciunt non saepe velit veritatis. Aut corporis cupiditate deleniti dignissimos doloribus ea,
                        id laboriosam minima modi molestiae neque, numquam officia omnis possimus quam, quo ullam! Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam cum debitis dicta distinctio
                        doloremque, ducimus eius incidunt ipsam itaque minus nam nulla obcaecati omnis quisquam tempora
                        veritatis. Beatae distinctio doloremque doloribus ea eligendi nemo quisquam ratione vero.
                        Accusantium adipisci aliquam dicta enim est impedit, quidem reprehenderit sit tempore ullam.</p>
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
    import {mapActions} from 'vuex'
    import keys from '../keys'

    export default {
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions(['LOGIN'])
        },
        beforeMount() {
            let API_TOKEN = keys.API_TOKEN
            let LOCALSTORAGE_TOKEN = localStorage.getItem(API_TOKEN);

            if (LOCALSTORAGE_TOKEN) {
                this.$router.push('/profile')
            }
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
</style>