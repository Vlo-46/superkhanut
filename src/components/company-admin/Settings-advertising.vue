<template>
    <div class="advertising-field">
        <div class="all-advertising" v-if="all_advertising">
            <h5>Բոլոր գովազդները</h5>
            <table class="highlight">
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="item in all_advertising" :key="item.id">
                    <td><img :src="item.file" :alt="item.title" class="advertising-image responsive-img"></td>
                    <td>{{item.title}}</td>
                    <td>{{item.category}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <button class="btn red" @click="DELETE_ADVERTISING(item.id)">
                            <i class="material-icons">delete_forever</i>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <br>
        <div class="add-advertising">
            <h5 class="mt-5">Ավելացնել նոր գովազդ</h5>
            <div class="file-field input-field">
                <div class="btn">
                    <span>Նկար</span>
                    <input type="file" ref="file" @change="onSelect" :disabled="disabled">
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text">
                </div>
            </div>
            <div class="input-field">
                <label for="advertising-title">Title</label>
                <input type="text" id="advertising-title" v-model="advertising.title" :disabled="disabled">
            </div>
            <div class="input-field">
                <label for="advertising-price">Price</label>
                <input type="text" id="advertising-price" v-model="advertising.price" :disabled="disabled">
            </div>
            <div>
                <label>Categories</label>
                <select class="browser-default" v-model="advertising.category" :disabled="disabled">
                    <option value="" disabled selected>Choose advertising category</option>
                    <option v-for="category in company_categories" :key="category" :value="category">
                        {{category}}
                    </option>
                </select>
            </div>
            <div class="input-field">
                <template v-if="disabled === true">
                    <button class="waves-effect waves-light btn" @click="disabled = false">
                        <i class="material-icons">create</i>
                    </button>
                </template>
                <template v-else>
                    <button class="waves-effect waves-light btn"
                            @click="ADD_ADVERTISING(advertising),
                            disabled = true">
                        <i class="material-icons">check</i>
                    </button>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from "vuex";
    // import axios from 'axios'
    // import keys from "../../keys";

    export default {
        props: ['all_advertising'],
        data() {
            return {
                disabled: true,
                advertising: {
                    file: '',
                    title: '',
                    category: '',
                    price: ''
                }
            }
        },
        methods: {
            onSelect() {
                const file = this.$refs.file.files[0];
                let reader = new FileReader();
                reader.onloadend = () => {
                    this.advertising.file = reader.result
                };
                reader.readAsDataURL(file);
            },
            ...mapActions(['ADD_ADVERTISING', 'DELETE_ADVERTISING'])
        },
        computed: {
            ...mapState(['company_admin_settings']),
            company_categories() {
                return this.company_admin_settings.categories
            },
        },
    }
</script>

<style scoped>
    .advertising-field {
        margin-bottom: 50px;
    }

    .advertising-image {
        width: 100px;
        height: 100px;
    }
</style>