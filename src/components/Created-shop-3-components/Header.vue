<template>
    <nav>
        <div class="row header">
            <div class="col s4">
                <div class="col s3">
                    <ul>
                        <li>
                            <a :href="`/${company_name}/home`" class="company-logo">
                                <img v-if="logo" :src="logo">
                                <img src="../../assets/logo-comp.png" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col s8">
                <div class="row" style="height: 100%">
                    <template v-for="id in header_ids">
                        <template v-if="id === 'header-logo'">
                            <div class="col s4" :key="id" id="header-logo">
                                <div class="header-info-field">
                                    <span>Email support</span>
                                    <p v-if="support_computed && support_computed.email">{{support.email}}</p>
                                    <p v-else>example@gmail.com</p>
                                </div>
                            </div>
                        </template>
                        <template v-else-if="id === 'header-input'">
                            <div class="col s4" :key="id" id="header-input">
                                <div class="header-info-field">
                                    <span>Working Hours</span>
                                    <p>Mon - Sat 0900 - 1900</p>
                                </div>
                            </div>
                        </template>
                        <template v-else-if="id === 'header-support-box'">
                            <div class="col s4" :key="id" id="header-support-box">
                                <div class="header-info-field">
                                    <span>Call support</span>
                                    <p v-if="support_computed && support_computed.phone">{{support.phone}}</p>
                                    <p v-else>+374 12 34 56 (example)</p>
                                </div>
                            </div>
                        </template>
                    </template>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        props: ['support', 'logo', 'company_name'],
        computed: {
            ...mapState(['header_info', 'footer_info', 'header_ids']),
            // currentInputComponent() {
            //     return this.currentInput
            // }
            support_computed() {
                return this.support
            }
        },
        methods: {
            ...mapActions(['GET_SHOP_INFO']),
        },

        async created() {
            await this.GET_SHOP_INFO()
            // let x = [];
            // this.input_elements.filter(i => {
            //     x.push(i.name)
            // });
            // const y = Object.keys(this.header_info).filter(j => {
            //     return x.includes(j)
            // });
            // this.currentInput = y.toString()
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
    }

    nav {
        background-color: #fff;
        color: #262626;
        height: auto;
        line-height: 0;
    }

    .company-logo:hover {
        background-color: transparent;
    }

    img {
        width: 200px;
        display: block;
        height: 60px;
    }

    #header-support-box, #header-logo, #header-input {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .header-info-field span {
        font-size: 14px;
        font-weight: normal;
    }

    .header-info-field p {
        color: #555555;
        font-size: 16px;
        font-weight: 600;
        padding-top: 6px;
    }

    #dragula_home_3_header_components {
        height: 100%;
    }
</style>