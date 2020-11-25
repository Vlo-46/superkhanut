<template>
    <nav>
        <div class="container row header"
             v-dragula="home_2_header_components"
             bag="home_2_header_components"
             id="dragula_home_2_header_components">
            <template v-for="id in FETCH_HEADER_COMPONENT_IDS">
                <template v-if="id === 'header-logo'">
                    <div class="col s3" :key="id" id="header-logo">
                        <ul>
                            <li>
                                <a href="" @click.prevent="" class="company-logo">
                                    <img src="../../../assets/logo-comp.png">
                                </a>
                            </li>
                        </ul>
                    </div>
                </template>
                <template v-else-if="id === 'header-input'">
                    <div class="col s6" :key="id" id="header-input">
                        <input_1 v-if="inputs.input === 'input-1'"/>
                        <input_2 v-else-if="inputs.input === 'input-2'"/>
                        <input_3 v-else-if="inputs.input === 'input-3'"/>
                        <div class="center-box" v-else>
                            <span>SEARCH INPUT</span>
                        </div>
                    </div>
                </template>
                <template v-else-if="id === 'header-support-box'">
                    <div class="col s3" :key="id" id="header-support-box">
                        <ul class="links"
                            @click="OPEN_RIGHT_PANEL('icon')">
                            <div>
                                <a href="" @click.prevent="">
                                    <i class="fab fa-instagram" :style="right_panel.icon"></i>
                                </a>
                            </div>
                            <div>
                                <a href="" @click.prevent="">
                                    <i class="fab fa-facebook-f" :style="right_panel.icon"></i>
                                </a>
                            </div>
                            <div>
                                <a href="" @click.prevent="">
                                    <i class="fab fa-twitter" :style="right_panel.icon"></i>
                                </a>
                            </div>
                            <div>
                                <a href="" @click.prevent="">
                                    <i class="fab fa-youtube" :style="right_panel.icon"></i>
                                </a>
                            </div>
                        </ul>
                    </div>
                </template>
            </template>
        </div>
    </nav>
</template>

<script>
    import input_1 from '../header-inputs/input-1'
    import input_2 from '../header-inputs/input-2'
    import input_3 from '../header-inputs/input-3'

    import 'dragula/dist/dragula.css'

    import {mapState, mapActions, mapGetters} from 'vuex'
    import Vue from "vue";

    export default {
        data() {
            return {
                home_2_header_components: []
            }
        },
        components: {
            input_1,
            input_2,
            input_3
        },
        methods: {
            ...mapActions(['OPEN_RIGHT_PANEL', 'GET_HEADER_COMPONENTS_IDS'])
        },
        computed: {
            ...mapState(['inputs', 'right_panel', 'header_components']),
            ...mapGetters(['FETCH_HEADER_COMPONENT_IDS'])
        },
        created() {
            Vue.vueDragula.eventBus.$on('drop', () => {
                // console.log(args);
                let arr = [];
                let wrapper = document.getElementById('dragula_home_2_header_components');
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
        width: 100%;
        display: block;
        height: 100%;
    }

    input {
        margin: 0;
    }

    i {
        color: #0a662e;
        display: block;
        font-size: 24px;
        height: 56px;
        line-height: 56px;
    }

    .searchBox {
        display: flex;
        height: 100%;
        align-items: center;
    }

    .searchBox div {
        display: flex;
    }

    .links {
        display: flex;
        align-items: center;
    }

    .links a:hover {
        background-color: transparent;
    }


    .center-box {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: dotted;
    }

    #header-input, #header-logo, #header-support-box {
        cursor: grab !important;
    }
</style>