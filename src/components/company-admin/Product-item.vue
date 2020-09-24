<template>
    <tr>
        <td>
            <template v-if="disabled">
                <img :src="file" alt="" class="product-img responsive-img">
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
        </td>
        <td><input type="text" v-model="name" :disabled="disabled" :style="disabled ? style : null"/></td>
        <td><input type="text" v-model="price" :disabled="disabled" :style="disabled ? style : null"/></td>
        <td><input type="text" v-model="discount_price" :disabled="disabled" :style="disabled ? style : null"/></td>
        <td><input type="text" v-model="category" :disabled="disabled" :style="disabled ? style : null"/></td>
        <td><input type="text" v-model="tag" :disabled="disabled" :style="disabled ? style : null"/></td>
        <td><input type="text" v-model="description" :disabled="disabled" :style="disabled ? style : null"/></td>
        <td>
            <div class="switch">
                <p class="switch_text">Ավելացնել Top բաժնում</p>
                <label>
                    Off
                    <input type="checkbox" v-model="top" :disabled="disabled">
                    <span class="lever"></span>
                    On
                </label>
            </div>
            <div class="switch">
                <p class="switch_text">Ավելացնել լավագույնների բաժնում</p>
                <label>
                    Off
                    <input type="checkbox" v-model="best" :disabled="disabled">
                    <span class="lever"></span>
                    On
                </label>
            </div>
        </td>
        <td>
            <div>
                <button class="waves-effect waves-light btn-small" @click="disabled = !disabled">
                    <i class="material-icons" v-if="disabled">create</i>
                    <i class="material-icons" v-else
                       @click="EDIT_COMPANY_PRODUCT({id,product_name:name, price, discount_price, category, tag, description, top, best, file: img})">check</i>
                </button>
            </div>
            <div class="delete-field" v-if="disabled">
                <button class="waves-effect waves-light btn-small" @click="DELETE_COMPANY_PRODUCT(id)">
                    <i class="material-icons">delete</i>
                </button>
            </div>
        </td>
    </tr>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        data() {
            return {
                disabled: true,
                style: {
                    'border': 'none',
                    'color': '#000'
                },
                img: ''
            }
        },
        props: ['id', 'file', 'name', 'price', 'discount_price', 'category', 'tag', 'description', 'top', 'best'],
        methods: {
            ...mapActions(['DELETE_COMPANY_PRODUCT', 'EDIT_COMPANY_PRODUCT']),
            onSelect() {
                const file = this.$refs.file.files[0];
                let reader = new FileReader();
                reader.onloadend = () => {
                    this.img = reader.result
                };
                reader.readAsDataURL(file);
            },
        },
    }
</script>

<style scoped>
    .product-img {
        width: 200px;
        height: 150px;
        cursor: pointer;
    }

    .switch_text {
        font-size: small;
    }

    .delete-field {
        margin-top: 5px;
    }

    .delete-field button {
        background-color: red;
    }

    tr:hover {
        background-color: #eee;
    }

    .responsive-table {
        margin-top: 50px;
    }
</style>