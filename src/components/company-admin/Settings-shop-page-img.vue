<template>
    <div class="shop-page-img">
        <h5>Խանութի էջի նկար</h5>
        <template v-if="disabled">
            <img :src="img" alt="" class="product-img responsive-img">
        </template>
        <template v-else>
            <div class="file-field input-field">
                <div class="btn">
                    <span>Նկար</span>
                    <input type="file" ref="file" @change="onSelect">
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text">
                </div>
            </div>
        </template>
        <template v-if="disabled === true">
            <button class="waves-effect waves-light btn" @click="disabled = false">
                <i class="material-icons">create</i>
            </button>
        </template>
        <template v-else>
            <button class="waves-effect waves-light btn" @click="SHOP_IMG">
                <i class="material-icons">check</i>
            </button>
        </template>
    </div>
</template>

<script>
    import axios from 'axios'
    import keys from '../../keys'

    export default {
        props: ['img'],
        data() {
            return {
                disabled: true,
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
            SHOP_IMG() {
                let url = keys.baseURI;
                let token = localStorage.getItem(keys.API_TOKEN)

                let shop_page_img = this.file

                // console.log(JSON.stringify({shop_page_img}))

                axios.patch(`${url}/api/store`, {shop_page_img}, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then(() => {
                        this.disabled = true
                        // console.log(res.data)
                    })
                    .catch(e => console.log(e))
            }
        }
    }
</script>

<style scoped>
    .shop-page-img {
        margin-top: 50px;
        width: 400px;
    }
</style>