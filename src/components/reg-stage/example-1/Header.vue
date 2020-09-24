<template>
    <nav id="drop_header_components wraper">
        <div class="container row header-field" v-dragula="components" bag="components" id="dragula_components">
            <template v-for="id in FETCH_HEADER_COMPONENT_IDS">
                <template v-if="id == 'header-logo'">
                    <div class="col s3 header-s3" :key="id" id="header-logo">
                        <ul>
                            <li class="drag_logo" id="drag-logo-1"><img src="../../../assets/logo-comp.png" alt="">
                            </li>
                        </ul>
                    </div>
                </template>
                <template v-else-if="id == 'header-input'">
                    <div class="col s6 header-s6" :key="id" id="header-input">
                        <input_1 v-if="inputs.input === 'input-1'"/>
                        <input_2 v-else-if="inputs.input === 'input-2'"/>
                        <input_3 v-else-if="inputs.input === 'input-3'"/>
                        <div class="center-box" v-else>
                            <span>SEARCH INPUT</span>
                        </div>
                    </div>
                </template>
                <template v-else-if="id == 'header-support-box'">
                    <div class="col s3 header-s3" :key="id" id="header-support-box">
                        <div class="support-box" id="support-1">
                            <div>
                                <i class="material-icons"
                                   @click="OPEN_RIGHT_PANEL('icon')"
                                   :style="right_panel.icon"
                                >phone</i>
                            </div>
                            <div>
                                    <span @click="OPEN_RIGHT_PANEL('span')"
                                          :style="right_panel.span">
                                        Customer Support
                                    </span>
                                <p class="phone-number" :style="`color:${right_panel.span.color}`">(08) 12 345 789</p>
                            </div>
                        </div>
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

    import Vue from "vue";
    import 'dragula/dist/dragula.css'

    import {mapState, mapActions, mapGetters} from 'vuex'

    export default {
        data() {
            return {
                components: [],
            }
        },
        components: {
            input_1,
            input_2,
            input_3,
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
                let wrapper = document.getElementById('dragula_components');
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
    .center-box {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: dotted;
        cursor: pointer;
    }

    nav {
        background-color: #fff;
        color: #262626;
        height: 60px;
        line-height: 0;
        display: flex;
        align-items: center;
    }

    .company-logo {
        width: 100%;
        height: auto;
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

    .support-box {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        touch-action: none
    }

    .support-box span {
        font-size: small;
        color: #888;
    }

    .phone-number {
        font-size: 18px;
        color: #333;
    }

    i {
        color: #6ba229;
    }

    #drag_input_2 {
        width: 200px;
        border: 1px solid;
    }

    .drag_logo {
        touch-action: none
    }


    #drag-logo-1 {
        position: relative;
    }

    .header-field {
        display: flex;
        align-items: center;
    }

    #header-support-box {
        cursor: pointer;
    }
</style>