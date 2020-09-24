<template>
    <div class="contact-example-1">
        <Header/>
        <div class="container contact">
            <div class="row" v-dragula="contact_fields" bag="contact_fields" id="dragula_contact_components">
                <template v-for="id in FETCH_CONTACT_COMPONENT_IDS">
                    <template v-if="id === 'contact-send-msg-component'">
                        <contact-send-msg @click.native="testMethod(1)" :key="id"/>
                    </template>
                    <template v-else-if="id === 'contact-information-component'">
                        <contact-information @click.native="testMethod(2)" :key="id"/>
                    </template>
                </template>
            </div>
        </div>
        <Footer/>
        <div class="nextOrPrevPage">
            <button class="btn" @click="NEXT_PAGE('shop')">Prev</button>
            <button class="btn" @click="CREATE_SHOP">Next</button>
        </div>
    </div>
</template>

<script>
    // import Vue from 'vue'

    import Header from '../../../components/reg-stage/example-1/Header'
    import Footer from '../../../components/reg-stage/example-1/Footer'

    import contact_send_mgs from '../../../components/reg-stage/example-1/Contact-send-msg'
    import contact_information from '../../../components/reg-stage/example-1/Contact-information'

    import {mapActions, mapGetters} from 'vuex'
    import Vue from "vue";

    export default {
        data() {
            return {
                contact_fields: []
            }
        },
        components: {
            Header,
            Footer,
            'contact-send-msg': contact_send_mgs,
            'contact-information': contact_information
        },
        methods: {
            ...mapActions(['NEXT_PAGE', 'CONTACT_SEND_MSG_COMPONENTS', 'CONTACT_INFORMATION_COMPONENTS', "CREATE_SHOP", 'GET_CONTACT_COMPONENTS_IDS', ]),
            testMethod(sectionId) {
                switch (sectionId) {
                    case 1:
                        this.CONTACT_SEND_MSG_COMPONENTS('contact-send-msg');
                        this.CONTACT_INFORMATION_COMPONENTS('component');
                        break;
                    case 2:
                        this.CONTACT_SEND_MSG_COMPONENTS('component');
                        this.CONTACT_INFORMATION_COMPONENTS('contact-information');
                        break;
                    default:
                        break;
                }
            },
        },
        computed: {
            ...mapGetters(['FETCH_CONTACT_COMPONENT_IDS'])
        },
        created() {
            Vue.vueDragula.eventBus.$on('drop', () => {
                // console.log(args);
                let arr = [];
                let wrapper = document.getElementById('dragula_contact_components');
                for (let i = 0; i < wrapper.childNodes.length; i++) {
                    let childId = wrapper.childNodes[i].id;
                    // console.log(wrapper.childNodes[i])
                    arr.push(childId);
                }
                this.GET_CONTACT_COMPONENTS_IDS(arr)
            })
        },
    }
</script>

<style scoped>
    .contact {
        margin: 100px auto;
    }

    .nextOrPrevPage {
        position: absolute;
        bottom: 20px;
        right: 15px;
        position: fixed;
    }

    .nextOrPrevPage button {
        background-color: #6ba229;
        margin: 0 3px;
    }

</style>