<template>
    <div class="company-logo-field">
        <h5>Կազմակերպության նկար</h5>
        <template v-if="disabled">
            <img :src="logo" alt="" class="product-img responsive-img">
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
            <button class="waves-effect waves-light btn" @click="COMPANY_LOGO(file), disabled = true">
                <i class="material-icons">check</i>
            </button>
        </template>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        props: ['logo'],
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
            ...mapActions(['COMPANY_LOGO'])
        }
    }
</script>

<style scoped>
    .company-logo-field {
        margin-top: 50px;
        width: 400px;
    }
</style>