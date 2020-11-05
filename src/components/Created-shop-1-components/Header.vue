<template>
    <nav id="drop_header_components wraper">
        <div class="container row header-field">
            <template v-for="id in header_ids">
                <template v-if="id === 'header-logo'">
                    <div class="col s3 header-s3" :key="id" id="logo-id">
                        <ul>
                            <li class="drag_logo" id="drag-logo-1">
                                <img :src="logo" alt="">
                            </li>
                        </ul>
                    </div>
                </template>
                <template v-else-if="id === 'header-input'">
                    <div :key="id" class="col s6 header-s6">
                        <component :is="currentInputComponent" :input="header_info.input" :button="header_info.button"/>
                    </div>
                </template>
                <template v-else-if="id === 'header-support-box'">
                    <div :key="id" class="col s3 header-3">
                        <div class="support-box" id="support-1">
                            <div>
                                <i class="material-icons" :style="footer_info.icon_style">phone</i>
                            </div>
                            <div>
                        <span :style="header_info.span">
                            {{support.title}}
                        </span>
                                <p class="phone-number" :style="header_info.span">{{support.phone}}</p>
                            </div>
                        </div>
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

    import {mapActions, mapState} from 'vuex'

    export default {
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
        // created: function () {
        //     Vue.vueDragula.eventBus.$on('drop', function (args) {
        //         console.log(args[1]['innerHTML']);
        //         console.log(document.getElementById('drag-header').outerHTML)
        //     })
        // },

    }
</script>

<style scoped>
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

</style>