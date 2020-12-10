<template>
    <div class="row">
        <div class="col s12 m6 l4">
            <ul>
                <h5>Your details</h5>
                <li v-for="link in links" :key="link.id">
                    <!--                    <router-link exact :to="link.path">{{link.name}}</router-link>-->
                    <button @click="change(link.id)">{{link.name}}</button>
                </li>
            </ul>
        </div>
        <div class="col s12 m6 l8">
            <div class="settingsPageField" v-if="currentSettingsPage === 1">
                <div>
                    <label for="name">Name</label>
                    <input type="text" id="name" v-model="user.name">
                </div>
                <div>
                    <label for="surname">Surname</label>
                    <input type="text" id="surname" v-model="user.surname">
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="text" id="email" v-model="user.email">
                </div>
                <div>
                    <label for="phone">Phone</label>
                    <input type="text" id="phone" v-model="user.phone">
                </div>
                <div>
                    <label for="address">Address</label>
                    <input type="text" id="address" v-model="user.address">
                </div>
                <div>
                    <button class="save_settings_button" @click="UPDATE_USER_INFO(user)">Save</button>
                </div>
            </div>
            <div class="settingsPageField" v-else-if="currentSettingsPage === 2">
                <div v-if="profile.user.avatar" class="image-field">
                    <img :src="profile.user.avatar" alt="" class="responsive-img">
                </div>
                <div class="file-field input-field">
                    <div class="btn">
                        <span>Avatar</span>
                        <input type="file" ref="file" @change="onSelect">
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text">
                    </div>
                </div>
                <div>
                    <button class="save_settings_button" @click="UPDATE_USER_INFO(user)">Save</button>
                </div>
            </div>
            <div class="settingsPageField" v-else-if="currentSettingsPage === 3">
                <div class="input-field">
                    <label for="current_password">Current password</label>
                    <input type="password" id="current_password" v-model="change_password.current_password">
                </div>
                <div class="input-field">
                    <label for="new_password">New password</label>
                    <input type="password" id="new_password" v-model="change_password.new_password">
                </div>
                <div>
                    <button class="save_settings_button" @click="CHANGE_PASSWORD(change_password)">Save</button>
                </div>
            </div>
            <div class="settingsPageField" v-else>
                <p class="condition_1">In this section you will be able to delete your profile.</p>
                <p class="condition_2">Warning!</p>
                <p class="condition_3">After deleting your profile, all your data will be deleted and cannot be
                    restored.</p>
                <div class="delete-field">
                    <div class="input-field">
                        <label>Email</label>
                        <input type="text" v-model="data_of_the_user_being_deleted.email">
                    </div>
                    <div class="input-field">
                        <label>Password</label>
                        <input type="password" v-model="data_of_the_user_being_deleted.password">
                    </div>
                    <div class="confirm-the-deletion">
                        <button class="btn" :disabled="disabled"
                                @click="DELETE_ACCOUNT(data_of_the_user_being_deleted)">Delete account
                        </button>
                        <p>
                            <label @change="disabled = !disabled">
                                <input type="checkbox"/>
                                <span>You definitely want to delete your profile?</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import {mapActions, mapState} from 'vuex'
    import keys from "../../keys";
    import axios from 'axios'
    import Swal from "sweetalert2";

    export default {
        data() {
            return {
                user_info: {
                    address: ''
                },
                links: [
                    {id: 1, path: '/personal-info', active: false, name: 'Personal information'},
                    {id: 2, path: '/edit-profile', active: true, name: 'Profile'},
                    {id: 3, path: '/change-password', active: false, name: 'Change password'},
                    {id: 4, path: '/delete-account', active: false, name: 'Delete account'},
                ],
                styles: {
                    color: '#6ba229',
                    fontWeight: 'bold'
                },
                currentSettingsPage: 1,
                disabled: true,
                data_of_the_user_being_deleted: {
                    email: '',
                    password: ''
                },
                change_password: {
                    current_password: '',
                    new_password: ''
                }
            }
        },
        methods: {
            ...mapActions(['GET_USER']),
            change(id) {
                this.currentSettingsPage = id
            },
            onSelect() {
                const file = this.$refs.file.files[0];
                let reader = new FileReader();
                reader.onloadend = () => {
                    this.profile.user.avatar = reader.result
                };
                reader.readAsDataURL(file);
            },
            UPDATE_USER_INFO(user) {
                let token = localStorage.getItem(keys.API_TOKEN)
                // console.log(user)
                axios.patch(`${keys.baseURI}/api/account`, user, {
                    headers: {
                        'Authorization': `bearer ${token}`
                    }
                })
                    .then(() => {
                        // console.log(res.data)
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'The data was changed successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
                    .catch(e => {
                        console.log(e)
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Incorrect data',
                            // footer: '<a href>Why do I have this issue?</a>'
                        })
                    })
            },
            CHANGE_PASSWORD(data) {
                // console.log(JSON.stringify(data))
                let token = localStorage.getItem(keys.API_TOKEN)
                axios.patch(`${keys.baseURI}/api/account/password`, data, {
                    headers: {
                        'Authorization': `bearer ${token}`
                    }
                })
                    .then(() => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your password successfully changed',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
                    .catch(e => {
                        console.log(e)
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Incorrect data',
                            // footer: '<a href>Why do I have this issue?</a>'
                        })
                    })
            },
            DELETE_ACCOUNT(data) {
                let token = localStorage.getItem(keys.API_TOKEN)
                // console.log(JSON.stringify(data))
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
        },
        computed: {
            ...mapState(['profile']),
            user() {
                return this.profile.user
            },
        },
        created() {
            const token = localStorage.getItem(keys.API_TOKEN);
            this.GET_USER(token);
        }
    }
</script>

<style scoped>
    h5 {
        padding-bottom: 10px;
    }

    ul li button {
        color: #666;
        padding: 10px 5px;
        display: block;
        border: none;
        cursor: pointer;
        width: 100%;
        text-align: left;
    }

    ul li button:hover {
        color: #262626;
        background: #ededed;
        border-left: 3px solid #6ba229;
    }

    ul {
        background-color: #f5f5f5;
        padding: 20px;
        border: 1px solid #e1e8ed;
    }

    .settingsPageField {
        background-color: #f5f5f5;
        margin: 20px;
        padding: 20px 45px;
        border: 1px solid #e1e8ed;
    }

    .save_settings_button {
        background-color: #6ba229;
        margin-top: 20px;
        border: 1px solid #6ba229;
        color: #fff;
        padding: 5px 35px;
        border-radius: 1px;
        cursor: pointer;
    }

    .save_settings_button:hover {
        background-color: #fff;
        color: #6ba229;
        transition: 0.5s;
    }

    .btn {
        background-color: #6ba229;
    }

    .delete-field {
        margin-top: 40px;
    }

    .condition_1 {
        color: #000;
        font-weight: bold;
    }

    .condition_2 {
        color: red;
        font-size: 20px;
        font-weight: bold;
    }

    .condition_3 {
        color: red;
        font-weight: bold;
        font-size: small;
    }

    .confirm-the-deletion {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .image-field {
        height: 200px;
        max-height: 200px;
        display: flex;
        justify-content: center;
    }

    .image-field img {
        width: 50%;
        height: 100%;
        display: block;
    }
</style>