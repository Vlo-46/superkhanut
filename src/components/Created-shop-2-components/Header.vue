<template>
    <nav>
        <div class="container row header">
            <template v-for="id in header_ids">
                <template v-if="id === 'header-logo'">
                    <div class="col s3" :key="id" id="header-logo">
                        <ul>
                            <li>
                                <a href="" class="company-logo">
                                    <img :src="logo" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                </template>
                <template v-else-if="id === 'header-input'">
                    <div class="col s6" :key="id" id="header-input">
                        <component :is="currentInputComponent" :input="header_info.input" :button="header_info.button"/>
                    </div>
                </template>
                <template v-else-if="id === 'header-support-box'">
                    <div class="col s3" :key="id" id="header-support-box">
                        <ul class="links">
                            <div>
                                <a href="">
                                    <i class="fab fa-instagram" :style="footer_info.icon_style"></i>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <i class="fab fa-facebook-f" :style="footer_info.icon_style"></i>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <i class="fab fa-twitter" :style="footer_info.icon_style"></i>
                                </a>
                            </div>
                            <div>
                                <a href="">
                                    <i class="fab fa-youtube" :style="footer_info.icon_style"></i>
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
    import input_1 from '../Created-shop-elements/header-inputs/input-1'
    import input_2 from '../Created-shop-elements/header-inputs/input-2'
    import input_3 from '../Created-shop-elements/header-inputs/input-3'

    import {mapState, mapActions} from 'vuex'

    export default {
        // methods: {
        //     ...mapActions(['OPEN_RIGHT_PANEL', 'GET_HEADER_COMPONENTS_IDS'])
        // },
        // computed: {
        //     ...mapState(['inputs', 'right_panel', 'header_components']),
        //     ...mapGetters(['FETCH_HEADER_COMPONENT_IDS'])
        // },
        // created() {
        //     Vue.vueDragula.eventBus.$on('drop', () => {
        //         // console.log(args);
        //         let arr = [];
        //         let wrapper = document.getElementById('dragula_home_2_header_components');
        //         for (let i = 0; i < wrapper.childNodes.length; i++) {
        //             let childId = wrapper.childNodes[i].id;
        //             arr.push(childId);
        //         }
        //         this.GET_HEADER_COMPONENTS_IDS(arr)
        //     })
        // },
        props: ['support', 'logo'],
        data() {
            return {
                currentInput: '',
                input_elements: [
                    {name: 'input-1'},
                    {name: 'input-2'},
                    {name: 'input-3'},
                ]
            }
        },
        components: {
            'input-1': input_1,
            'input-2': input_2,
            'input-3': input_3
        },
        computed: {
            ...mapState(['header_info', 'footer_info', 'header_ids']),
            currentInputComponent() {
                return this.currentInput
            }
        },
        methods: {
            ...mapActions(['GET_SHOP_INFO'])
        },

        async created() {
            await this.GET_SHOP_INFO()
            let x = [];
            this.input_elements.filter(i => {
                x.push(i.name)
            });
            const y = Object.keys(this.header_info).filter(j => {
                return x.includes(j)
            });
            this.currentInput = y.toString()
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