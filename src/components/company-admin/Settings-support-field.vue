<template>
    <div class="support-field">
        <h5>Կապ</h5>
        <div>
            <label for="title">Վերնագիր</label>
            <input type="text" id="title" :disabled="disabled" v-model="support.title">
        </div>
        <div>
            <label for="phone">Հեռախոսահամար</label>
            <input type="text" id="phone" :disabled="disabled" v-model="support.phone">
        </div>
        <div>
            <label for="address">Հասցե</label>
            <input type="text" id="address" :disabled="disabled" v-model="support.address">
        </div>
        <div>
            <label for="support-email">Email</label>
            <input type="email" id="support-email" :disabled="disabled" v-model="support.email">
        </div>
        <div>
            <label for="fb">Facebook</label>
            <input type="text" id="fb" :disabled="disabled" v-model="support.facebook">
        </div>
        <div>
            <label for="instagram">Instagram</label>
            <input type="text" id="instagram" :disabled="disabled" v-model="support.instagram">
        </div>
        <template v-if="disabled === true">
            <button class="waves-effect waves-light btn" @click="disabled = false">
                <i class="material-icons">create</i>
            </button>
        </template>
        <template v-else>
            <button class="waves-effect waves-light btn" @click="SUPPORT_FIELD">
                <i class="material-icons">check</i>
            </button>
        </template>

    </div>
</template>

<script>
    import axios from 'axios'
    import keys from '../../keys'

    export default {
        props: ['support'],
        data() {
            return {
                disabled: true,
                style: {
                    'border': 'none',
                    'color': '#000'
                },
                support_field: {
                    title: '',
                    phone: '',
                    address: '',
                    email: '',
                    facebook: '',
                    instagram: ''
                }
            }
        },
        methods: {
            SUPPORT_FIELD() {
                let url = keys.baseURI;
                let token = localStorage.getItem(keys.API_TOKEN);

                // let support_field = this.support_field;

                axios.patch(`${url}/api/store`, {support_field: this.support}, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then(res => {
                        this.disabled = true;
                        console.log(res.data)
                    })
                    .catch(e => console.log(e))
            }
        }
    }
</script>

<style scoped>
    .support-field {
        width: 400px;
    }
</style>