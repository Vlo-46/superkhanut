<template>
    <div class="about-information">
        <h5>"ՄԵՐ ՄԱՍԻՆ" էջի տեղեկություն</h5>
        <div class="file-field input-field">
            <div class="btn">
                <span>Նկար</span>
                <input type="file" ref="file" @change="onSelect" :disabled="disabled">
            </div>
            <div class="file-path-wrapper">
                <input class="file-path validate" type="text">
            </div>
        </div>
        <div class="col s12">
            <label for="about-text">Տեղեկություն</label>
            <input id="about-text"
                      :disabled="disabled"
                      v-model="about.about_text"
            />

        </div>
        <template v-if="disabled === true">
            <button class="waves-effect waves-light btn" @click="disabled = false">
                <i class="material-icons">create</i>
            </button>
        </template>
        <template v-else>
            <button class="waves-effect waves-light btn" @click="ABOUT_INFO">
                <i class="material-icons">check</i>
            </button>
        </template>
    </div>
</template>

<script>
    import axios from 'axios'
    import keys from '../../keys'

    export default {
        props: ['about'],
        data() {
            return {
                disabled: true,
                text: '',
                file: ''
            }
        },
        methods: {
            onSelect() {
                const file = this.$refs.file.files[0];
                let reader = new FileReader();
                reader.onloadend = () => {
                    this.file = reader.result
                };
                reader.readAsDataURL(file);
            },
            ABOUT_INFO() {
                let url = keys.baseURI;
                let token = localStorage.getItem(keys.API_TOKEN);
                let text = this.text;
                let file = this.file;

                let about_field = {
                    about_text: text,
                    about_img: file
                }

                axios.patch(`${url}/api/store`, {about_field}, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then(res => {
                        this.disabled = true;
                        console.log(res)
                    })
                    .catch(e => console.log(e))
            }
        }
    }
</script>

<style scoped>
    .about-information {
        width: 400px;
        margin-top: 50px;
    }
</style>