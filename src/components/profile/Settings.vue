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
            <div class="settingsPageField" v-else>
                <div class="input-field">
                    <label for="current_password">Current password</label>
                    <input type="password" id="current_password">
                </div>
                <div class="input-field">
                    <label for="new_password">New password</label>
                    <input type="password" id="new_password">
                </div>
                <div>
                    <button class="save_settings_button">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import {mapActions, mapState} from 'vuex'
    import keys from "../../keys";
    import axios from 'axios'

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
                ],
                styles: {
                    color: '#6ba229',
                    fontWeight: 'bold'
                },
                currentSettingsPage: 1,
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
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(e => console.log(e))
            }
        },
        computed: {
            ...mapState(['profile']),
            user() {
                return this.profile.user
            }
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

</style>