<template>
    <div class="delete-company-field">
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
</template>

<script>
    import keys from "../../keys";
    import axios from "axios";
    import Swal from "sweetalert2";

    export default {
        data() {
            return {
                data_of_the_user_being_deleted: {
                    email: '',
                    password: ''
                },
                disabled: true,
            }
        },
        methods: {
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
        }
    }
</script>

<style scoped>
    .delete-company-field {
        margin-top: 50px;
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

    .btn {
        background-color: #6ba229;
    }
</style>