<template>
    <div class="categories-field">
        <div class="categories">
            <p><b>Բոլոր բաժինները</b></p>
            <ol>
                <li v-for="category in categories" :key="category">
                    {{category}}
                    <!--                    <button class="btn red" @click="DELETE_CATEGORY(category)">-->
                    <!--                        <i class="material-icons">delete_forever</i>-->
                    <!--                    </button>-->
                    <i class="material-icons delete_icon" @click="DELETE_CATEGORY(category)">delete_forever</i>
                </li>
            </ol>
        </div>
        <div class="add-category">
            <h5>Ավելացնել բաժին</h5>
            <div class="input-field">
                <label for="category">Բաժնի անունը (Անգլերեն *)</label>
                <input type="text" :disabled="disabled" v-model="category" id="category">
            </div>
            <template v-if="disabled === true">
                <button class="waves-effect waves-light btn" @click="disabled = false">
                    <i class="material-icons">create</i>
                </button>
            </template>
            <template v-else>
                <button class="waves-effect waves-light btn"
                        @click="ADD_CATEGORY(category), disabled = true, category = ''">
                    <i class="material-icons">check</i>
                </button>
                <i class="material-icons">check</i>
            </template>
        </div>
    </div>
</template>

<script>
    // import keys from "../../keys";
    // import axios from "axios";
    import {mapActions} from 'vuex'

    export default {
        props: ['categories'],
        data() {
            return {
                disabled: true,
                category: ''
            }
        },
        methods: {
            ...mapActions(['ADD_CATEGORY', 'DELETE_CATEGORY'])
            // ADD_CATEGORY() {
            //     let url = keys.baseURI;
            //     let token = localStorage.getItem(keys.API_TOKEN);
            //
            //     let category = this.category;
            //
            //     // console.log(JSON.stringify({category}))
            //
            //     axios.patch(`${url}/api/store`, {category}, {
            //         headers: {
            //             'Authorization': `Bearer ${token}`
            //         }
            //     })
            //         .then(() => {
            //             this.disabled = true;
            //             this.category = ''
            //             // console.log(res.data)
            //         })
            //         .catch(e => console.log(e))
            // }
        }
    }
</script>

<style scoped>
    .categories-field {
        margin-top: 50px;
    }

    .delete_icon {
        color: red;
        cursor: pointer;
    }
</style>