<template>
    <div class="profile">
        <div class="infoBox" v-if="modal ? null : infoBox">
            <div v-if="type === 'USER'">
                <img v-if="!user.avatar" src="../../assets/user.png" alt="">
                <img v-else :src="user.avatar" alt="">
            </div>
            <div v-else>
                <img v-if="!user['store'].logo_uri" src="../../assets/user.png" alt="">
                <img v-else :src="user['store'].logo_uri" alt="">
            </div>
            <div v-if="type === 'USER'">
                <p class="username">{{user.name}}&nbsp;{{user.surname}}</p>
                <p class="info"><span v-if="user.address">{{user.address}},</span>{{user.created_at}}</p>
            </div>
            <div v-else>
                <p>{{company_name}}</p>
                <p class="info">
                    <!--                    <span v-if="user.address">{{user.address}}</span>,-->
                    {{user.created_at}}
                </p>
                <p v-if="type === 'COMPANY' && company.in_process === false">
                    <router-link :to="`/${company_name}/admin`">Admin page</router-link>
                </p>
                <p v-if="type === 'COMPANY' && company.in_process === false">
                    <router-link :to="`/${company_name}/home`">Website</router-link>
                </p>
                <template v-if="company.in_process === true">
                    <p style="color: green">Please fill out the registration form</p>
                    <router-link class="btn green" to="/registration-stage">To continue registration</router-link>
                    <br>
                    <button class="btn red cancel_button" @click="modal = true">CANCEL REGISTRATION</button>
                </template>
            </div>
        </div>
        <tabs v-if="type === 'USER'"/>
        <div class="modal_delete_field" v-if="modal === true">
            <div class="delete_box">
                <p class="modal-text">Do you really want to cancel your registration?</p>
                <div class="input-field">
                    <label for="email">Email</label>
                    <input type="text" id="email" v-model="data_of_the_user_being_deleted.email">
                </div>
                <div class="input-field">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="data_of_the_user_being_deleted.password">
                </div>
                <div class="input-field">
                    <button class="btn green" @click="DELETE_ACCOUNT(data_of_the_user_being_deleted)">OK</button>
                </div>
                <p class="close_modal" @click="modal = false">&times;</p>
            </div>
        </div>
    </div>
</template>

<script>
    import tabs from './Tabs'
    import keys from "../../keys";
    import axios from "axios";
    import Swal from "sweetalert2";

    export default {
        props: ['type', 'company_name', 'user'],
        data() {
          return {
              modal: false,
              infoBox: {
                  display: 'none'
              },
              data_of_the_user_being_deleted: {
                  email: '',
                  password: ''
              },
          }
        },
        components: {
            tabs
        },
        computed: {
            company() {
                return this.user
            }
        },
        methods: {
            DELETE_ACCOUNT(data) {
                let token = localStorage.getItem(keys.API_TOKEN)
                axios.delete(`${keys.baseURI}/api/account`, {
                    headers: {
                        'Authorization': `bearer ${token}`
                    },
                    data: data
                })
                    .then(() => {
                        localStorage.removeItem(keys.API_TOKEN)
                        this.$router.push('/signin')
                        Swal.fire({
                            icon: 'success',
                            title: 'Your account successfully deleted',
                            // text: 'Your account successfully deleted',
                            // footer: '<a href>Why do I have this issue?</a>'
                        })
                    })
                    .catch(e => {
                        console.log(e)
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                        })
                    })
            },
        }
    }

</script>

<style scoped>
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .infoBox {
        display: flex;
        align-items: center;
    }

    .profile {
        margin-top: 50px;
    }

    .profile div {
        margin-left: 20px;
    }

    .username {
        font-size: 24px;
        font-weight: bold;
        line-height: 0px;
    }

    .info {
        color: #666666;
        font-size: 14px;
    }
    .cancel_button {
        margin-top: 5px;
    }

    .modal_delete_field {
        display: flex;
        justify-content: center;
    }

    .delete_box {
        width: 500px;
        position: relative;
        border: 1px solid #ccc;
        padding: 20px;
        border-radius: 15px;

    }
    .close_modal {
        position: absolute;
        top: -30px;
        right: 5px;
        cursor: pointer;
        font-weight: bold;
        font-size: 28px;
    }
    .modal-text {
        color: red;
        text-align: center;
    }
</style>