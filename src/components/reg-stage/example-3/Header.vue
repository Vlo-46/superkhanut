<template>
    <nav>
        <div class="row header">
            <div class="col s4">
                <div class="col s3">
                    <ul>
                        <li>
                            <a href="" @click.prevent="" class="company-logo">
                                <img src="../../../assets/logo-comp.png">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col s8">
                <div class="row" v-dragula="home_3_header_components"
                     bag="home_3_header_components"
                     id="dragula_home_3_header_components">
                    <template v-for="id in FETCH_HEADER_COMPONENT_IDS">
                        <template v-if="id === 'header-logo'">
                            <div class="col s4" :key="id" id="header-logo">
                                <div class="header-info-field">
                                    <span>Email support</span>
                                    <p>example@gmail.com</p>
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
                                    <p>+374 12 34 56</p>
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
    import Vue from "vue";
    import 'dragula/dist/dragula.css'

    import {mapState, mapActions, mapGetters} from 'vuex'

    export default {
        data() {
            return {
                home_3_header_components: [],
            }
        },
        methods: {
            ...mapActions(['OPEN_RIGHT_PANEL', 'GET_HEADER_COMPONENTS_IDS']),
        },
        computed: {
            ...mapState(['inputs', 'right_panel', 'header_components']),
            ...mapGetters(['FETCH_HEADER_COMPONENT_IDS'])
        },
        created() {
            Vue.vueDragula.eventBus.$on('drop', () => {
                // console.log(args);
                let arr = [];
                let wrapper = document.getElementById('dragula_home_3_header_components');
                for (let i = 0; i < wrapper.childNodes.length; i++) {
                    let childId = wrapper.childNodes[i].id;
                    arr.push(childId);
                }
                this.GET_HEADER_COMPONENTS_IDS(arr)
            })

        },
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