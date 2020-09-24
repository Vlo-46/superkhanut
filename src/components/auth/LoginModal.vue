<template>
    <!-- Modal Structure -->
    <div id="modal1" class="modal">
        <div class="modal-content">
            <div class="header-modal"><h4 class="center-align">Sign in</h4></div>
            <div class="signin">
                <div class="input-field">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="user.email">
                </div>
                <div class="input-field">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="user.password">
                </div>
                <div>
                    <p>New here? <a href="/registration">Registration</a></p>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn" @click="LOGIN(user)">Sign in</button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

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
    }
</script>

<style scoped>
    .header-modal {
        background-color: #262626;
        padding: 10px 0;
        color: #fff;
    }

    .modal .modal-content {
        padding: 0;
    }

    .signin {
        padding: 28px;
        width: 75%;
        display: flex;
        flex-direction: column;
        margin: auto;
        margin-top: 15px;
    }

    .modal {
        max-height: 100%;
    }

    .modal-footer {
        padding: 0 30px;
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