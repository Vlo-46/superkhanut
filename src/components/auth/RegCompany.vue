<template>
    <div class="companyBox">
        <div class="input-field">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" v-model="register.name">
        </div>
        <div class="input-field">
            <label for="surname">Surname</label>
            <input type="text" id="surname" name="surname" v-model="register.surname">
        </div>
        <div class="input-field">
            <label for="company_name">{{compute_company_name}}</label>
            <input type="text" id="company_name" name="company_name" v-model.trim="register.company_name">
        </div>
        <div class="input-field">
            <label for="company_email">Email</label>
            <input type="email" id="company_email" name="email" v-model="register.email">
        </div>
        <div class="input-field">
            <label for="company_password">Password</label>
            <input type="password" id="company_password" name="password" v-model="register.password">
        </div>
        <div style="float: right">
            <label @change="CHECK_TERMS">
                <input type="checkbox"/>
                <span>I agree to the terms</span>
            </label>
        </div>
        <div>
            <button class="btn" @click="REGISTER_COMPANY(register)" v-if="agree === true">Create Company</button>
            <button class="btn" disabled v-else>Create Company</button>
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
                    company_name: '',
                    email: '',
                    password: '',
                    type: 'COMPANY'
                },
            }
        },
        methods: {
            ...mapActions(['REGISTER_COMPANY']),
            CHECK_TERMS() {
                if (this.agree === false) {
                    this.agree = true
                } else {
                    this.agree = false
                }
            }
        },
        computed: {
            compute_company_name() {
                if (this.register.company_name) {
                    return this.register.company_name.split(' ').join('') + '.superkhanut.com'
                } else {
                    return 'Company name'
                }
            }
        }
    }
</script>

<style scoped>
    .companyBox {
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

    .tabs {
        background-color: #fafafa;
    }
</style>