<template>
    <div class="registerBox">
        <div class="input-field">
            <label for="firstname">First name</label>
            <input type="text" id="firstname" v-model="register.name">
        </div>
        <div class="input-field">
            <label for="lastname">Last name</label>
            <input type="text" id="lastname" v-model="register.surname">
        </div>
        <div class="input-field">
            <label for="email_user">Email</label>
            <input type="email" id="email_user" v-model="register.email">
        </div>
        <div class="input-field">
            <label for="password_user">Password</label>
            <input type="password" id="password_user" v-model="register.password">
        </div>
        <div style="float: right">
            <label @change="CHECK_TERMS">
                <input type="checkbox"/>
                <span>I agree to the terms</span>
            </label>
        </div>
        <div>
            <button class="btn" v-if="agree === true" @click="REGISTER_USER(register)">Create Account</button>
            <button class="btn" disabled v-if="agree === false">Create Account</button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        data() {
            return {
                agree: false,
                register: {
                    name: '',
                    surname: '',
                    email: '',
                    password: '',
                    type: 'USER'
                }
            }
        },
        methods: {
            ...mapActions(['REGISTER_USER']),
            CHECK_TERMS() {
                if (this.agree === false) {
                    this.agree = true
                } else {
                    this.agree = false
                }
            }
        }
    }
</script>

<style scoped>
    .registerBox {
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
</style>