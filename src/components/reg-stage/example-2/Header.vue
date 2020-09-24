<template>
    <nav>
        <div class="container row header" v-dragula="header_components" bag="header_components">
            <div class="col s3">
                <ul>
                    <li><a href="" @click.prevent="" class="company-logo"><img src="../../../assets/logo-comp.png"></a></li>
                </ul>
            </div>
            <div class="col s6">
                <input_1 v-if="inputs.input === 'input-1'"/>
                <input_2 v-else-if="inputs.input === 'input-2'"/>
                <input_3 v-else-if="inputs.input === 'input-3'"/>
                <div class="center-box" v-else>
                    <span>SEARCH INPUT</span>
                </div>
            </div>
            <div class="col s3">
                <ul class="links"
                    @click="OPEN_RIGHT_PANEL('icon')">
                    <div>
                        <a href="" @click.prevent=""><i class="fab fa-instagram" :style="right_panel.icon"></i></a>
                    </div>
                    <div>
                        <a href="" @click.prevent=""><i class="fab fa-facebook-f" :style="right_panel.icon"></i></a>
                    </div>
                    <div>
                        <a href="" @click.prevent=""><i class="fab fa-twitter" :style="right_panel.icon"></i></a>
                    </div>
                    <div>
                        <a href="" @click.prevent=""><i class="fab fa-youtube" :style="right_panel.icon"></i></a>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import input_1 from '../header-inputs/input-1'
    import input_2 from '../header-inputs/input-2'
    import input_3 from '../header-inputs/input-3'

    // import Vue from "vue";
    import 'dragula/dist/dragula.css'

    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                header_components: []
            }
        },
        components: {
            input_1,
            input_2,
            input_3
        },
        methods: {
            ...mapActions(['OPEN_RIGHT_PANEL'])
        },
        computed: {
            ...mapState(['inputs', 'right_panel'])
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
</style>