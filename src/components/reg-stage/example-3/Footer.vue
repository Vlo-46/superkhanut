<template>
    <footer>
        <div class="row" v-dragula="home_3_footer_components" bag="home_3_footer_components"
             id="dragula_home_3_footer_components">
            <template v-for="id in FETCH_FOOTER_COMPONENT_IDS">
                <template v-if="id === 'footer-logo-component'">
                    <div class="col s12 m4 l4" :key="id" id="footer-logo-component">
                        <div class="company_logo">
                            <img src="../../../assets/logo-comp.png" alt="">
                        </div>
                        <div style="padding: 0 20px;">
                    <span>
                        <small>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis delectus
                            dolores eveniet maxime nam nobis totam. Maxime nulla quas saepe
                            similique sint. Consequuntur molestias neque similique ut, velit voluptatum!
                        </small>
                    </span>
                        </div>
                    </div>
                </template>
                <template v-else-if="id === 'footer-info-component'">
                    <div class="col s12 m4 l4" :key="id" id="footer-info-component">
                        <ul>
                            <h6>COMPANY PAGES</h6>
                            <div class="hr"></div>
                            <li><a href="" @click.prevent="OPEN_RIGHT_PANEL('button')" :style="`color: ${right_panel.button.color}`">Home</a></li>
                            <li><a href="" @click.prevent="OPEN_RIGHT_PANEL('button')" :style="`color: ${right_panel.button.color}`">Shop</a></li>
                            <li><a href="" @click.prevent="OPEN_RIGHT_PANEL('button')" :style="`color: ${right_panel.button.color}`">About</a></li>
                            <li><a href="" @click.prevent="OPEN_RIGHT_PANEL('button')" :style="`color: ${right_panel.button.color}`">Contact</a></li>
                        </ul>
                    </div>
                </template>
                <template v-else-if="id === 'footer-contact-component'">
                    <div class="col s12 m4 l4" :key="id" id="footer-contact-component">
                        <ul class="footer-contact-field">
                            <h6>CONTACT US</h6>
                            <div class="hr"></div>
                            <li>
                                <a href="" :style="right_panel.span" @click.prevent="OPEN_RIGHT_PANEL('span')">
                                    <i class="material-icons">location_on</i><small>Armenia, erevan</small>
                                </a>
                            </li>
                            <li>
                                <a href="" :style="right_panel.span" @click.prevent="OPEN_RIGHT_PANEL('span')">
                                    <i class="material-icons">local_phone</i><small>+374 12 34 56</small>
                                </a>
                            </li>
                            <li>
                                <a href="" :style="right_panel.span" @click.prevent="OPEN_RIGHT_PANEL('span')">
                                    <i class="material-icons">message</i><small>example@gmail.com</small>
                                </a>
                            </li>
                            <li>
                                <a href="" :style="right_panel.span" @click.prevent="OPEN_RIGHT_PANEL('span')">
                                    <i class="material-icons">access_time</i>Mon - Sat : 0900 - 1900&nbsp;Sun : Closed
                                </a>
                            </li>
                        </ul>
                    </div>
                </template>
            </template>
        </div>
    </footer>
</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex'
    import Vue from "vue";

    export default {
        data() {
            return {
                home_3_footer_components: []
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
                let wrapper = document.getElementById('dragula_home_3_footer_components');
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
        margin-top: 100px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        cursor: grab;
    }

    img {
        width: 200px;
        height: 80px;
        display: block;
    }

    .company_logo {
        display: flex;
        justify-content: center;
    }

    .hr {
        width: 200px;
        height: 2px;
        background-color: #6ba229;
        border-radius: 20px;
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
    }

    ul li {
        margin: 8px 0;
    }

    ul li a {
        color: #666666;
        text-decoration: none;
        display: block;
    }

    .footer-contact-field li a {
        display: flex;
        align-items: center;
    }

    i {
        padding-right: 10px;
    }
</style>