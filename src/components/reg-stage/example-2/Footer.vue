<template>
    <footer class="container-fluid" v-dragula="home_2_footer_components" :bag="home_2_footer_components"
            id="dragula_home_2_footer_components">
        <hr>
        <h5 class="center-align">CONTACT INFORMATION</h5>
        <hr>
        <template v-for="id in FETCH_FOOTER_COMPONENT_IDS">
            <template v-if="id === 'footer-logo-component'">
                <div class="col s12 m4 l4" :key="id" id="footer-logo-component">
                    <div class="footer-content">
                        <span @click.prevent="OPEN_RIGHT_PANEL('icon')"><i class="material-icons"
                                                                           :style="right_panel.icon">local_phone</i></span>
                        <span>CALL</span>
                        <p>+374 12 34 56</p>
                        <p>+374 56 45 32</p>
                    </div>
                </div>
            </template>
            <template v-else-if="id === 'footer-contact-component'">
                <div class="col s12 m4 l4" :key="id" id="footer-contact-component">
                    <div class="footer-content">
                        <span @click.prevent="OPEN_RIGHT_PANEL('icon')"><i class="material-icons"
                                                                           :style="right_panel.icon">location_on</i></span>
                        <span>FIND US</span>
                        <p>Hahnenmoos strasse 20C, 3715</p>
                        <p>Adelboden, Switzerland</p>
                    </div>
                </div>
            </template>
            <template v-else-if="id === 'footer-info-component'">
                <div class="col s12 m4 l4" :key="id" id="footer-info-component">
                    <div class="footer-content">
                        <span @click.prevent="OPEN_RIGHT_PANEL('icon')"><i class="material-icons"
                                                                           :style="right_panel.icon">email</i></span>
                        <span>EMAIL</span>
                        <p>example@gmail.com</p>
                        <p>example@mail.ru</p>
                    </div>
                </div>
            </template>
        </template>
    </footer>
</template>

<script>
    import {mapActions, mapState, mapGetters} from "vuex";
    import Vue from "vue";

    export default {
        data() {
            return {
                home_2_footer_components: []
            }
        },
        methods: {
            ...mapActions(['OPEN_RIGHT_PANEL', 'GET_FOOTER_COMPONENTS_IDS'])
        },
        computed: {
            ...mapState(['right_panel']),
            ...mapGetters(['FETCH_FOOTER_COMPONENT_IDS'])
        },
        created() {
            Vue.vueDragula.eventBus.$on('drop', () => {
                // console.log(args);
                let arr = [];
                let wrapper = document.getElementById('dragula_home_2_footer_components');
                for (let i = 0; i < wrapper.childNodes.length; i++) {
                    let childId = wrapper.childNodes[i].id;
                    // console.log(wrapper.childNodes[i])
                    arr.push(childId);
                }
                // console.log(arr)
                this.GET_FOOTER_COMPONENTS_IDS(arr)
            })
        },
    }
</script>

<style scoped>
    footer {
        margin-top: 80px;
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }

    .footer-content p {
        color: #ababab;
        margin-bottom: 0;
    }

    .footer-content span {
        font-weight: bold;
        color: #111;
    }

    i {
        color: #6ba229;
        font-size: 24px;
    }

    #footer-contact-component, #footer-info-component, #footer-logo-component {
        cursor: grab;
    }
</style>

