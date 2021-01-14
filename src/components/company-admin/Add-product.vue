<template>
    <div class="admin-dashboard">
        <div class="dashboard row">
            <left-panel/>
            <div class="col s12 m10 l10 add-product-field">
                <div class="add-field">
                    <div class="input-field">
                        <div class="file-field input-field">
                            <div class="btn">
                                <span>File</span>
                                <input type="file" ref="file" @change="onSelect">
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text">
                            </div>
                        </div>
                    </div>
                    <div class="input-field col s12">
                        <label for="product_name">PRODUCT NAME</label>
                        <input type="text" id="product_name" v-model="product.product_name">
                    </div>
                    <div>
                        <label>Categories</label>
                        <select class="browser-default" v-model="product.category">
                            <option value="" disabled selected>Choose product category</option>
                            <option v-for="category in company_categories" :key="category" :value="category">
                                {{category}}
                            </option>
                        </select>
                    </div>
                    <div class="input-field">
                        <label for="description">DESCRIPTION</label>
                        <input type="text" id="description" v-model="product.description">
                    </div>
                    <div class="input-field">
                        <label for="price">PRICE</label>
                        <input type="number" id="price" v-model="product.price">
                    </div>
                    <div class="input-field">
                        <label for="discount_price">DISCOUNT PRICE</label>
                        <input type="number" id="discount_price" v-model="product.discount_price">
                    </div>
                    <div class="input-field">
                        <label for="tag">TAG</label>
                        <input type="text" id="tag" v-model="product.tag">
                    </div>
                    <div>
                        <p>
                            <label>
                                <input type="checkbox" v-model="product.top"/>
                                <span>ADD TO TOP</span>
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <label>
                                <input type="checkbox" v-model="product.best"/>
                                <span>ADD TO BEST</span>
                            </label>
                        </p>
                    </div>
                    <div>
                        <button class="btn" @click="ADD_PRODUCT(product)">CREATE</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    import keys from '../../keys'
    import left_panel from './Left-panel'
    import {mapActions, mapState} from 'vuex'

    export default {
        components: {
            'left-panel': left_panel
        },
        data() {
            return {
                product: {
                    file: '',
                    product_name: '',
                    category: '',
                    description: '',
                    price: '',
                    discount_price: '',
                    tag: '',
                    top: false,
                    best: false
                },
                company_name: ''
            }
        },
        computed: {
            ...mapState(['company_admin_settings']),
            company_categories() {
                return this.company_admin_settings.categories
            }
        },
        methods: {
            ...mapActions(['GET_COMPANY_SETTINGS']),
            onSelect() {
                const file = this.$refs.file.files[0];
                let reader = new FileReader();
                reader.onloadend = () => {
                    this.product.file = reader.result
                };
                reader.readAsDataURL(file);
            },

            ADD_PRODUCT(product) {
                // console.log(product)
                let url = keys.baseURI;
                let API_TOKEN = keys.API_TOKEN;

                let token = localStorage.getItem(API_TOKEN);

                let company_name = this.company_name

                axios.post(`${url}/api/store/item`, {product}, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        // 'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*',
                        'Vary': 'Origin'
                    },
                })
                    .then(() => {
                        this.$router.push(`/${company_name}/admin/products`)
                    })
                    .catch(e => console.log(JSON.stringify(e)))
            }
        },
        created() {
            this.company_name = this.$route.params.pathMatch;
            this.GET_COMPANY_SETTINGS(this.$route.params.pathMatch)
        }
    }
</script>

<style scoped>
    .add-field {
        margin-top: 50px;
        width: 500px;
    }

    .dashboard {
        display: flex;
    }

    .add-product-field {
        display: flex;
        justify-content: center;
    }
</style>