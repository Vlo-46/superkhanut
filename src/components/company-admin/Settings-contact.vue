<template>
    <div class="contact-information">
        <h5>"ԿԱՊ" էջի տեղեկություն</h5>
        <div class="col s12">
            <label for="contact-text">Տեղեկատվության տեքստ</label>
            <input id="contact-text"
                   :disabled="disabled"
                   v-model="contact_text"
            />
        </div>
        <template v-if="disabled === true">
            <button class="waves-effect waves-light btn" @click="disabled = false">
                <i class="material-icons">create</i>
            </button>
        </template>
        <template v-else>
            <button class="waves-effect waves-light btn" @click="CONTACT_INFO">
                <i class="material-icons">check</i>
            </button>
        </template>
    </div>
</template>

<script>
    import axios from 'axios'
    import keys from '../../keys'

    export default {
        props: ['contact_text'],
        data() {
            return {
                disabled: true,
                text: ''
            }
        },
        methods: {
            CONTACT_INFO() {
                let url = keys.baseURI;
                let token = localStorage.getItem(keys.API_TOKEN);
                let contact_text = this.contact_text;

                axios.patch(`${url}/api/store`, {contact_text}, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then(() => {
                        this.disabled = true
                        // console.log(res)
                    })
                    .catch(e => console.log(e))
            }
        }
    }
</script>

<style scoped>
    .contact-information {
        width: 400px;
        margin-top: 50px;
    }
</style>