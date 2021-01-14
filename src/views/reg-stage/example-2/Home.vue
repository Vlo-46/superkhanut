<template>
    <div class="home-example-2">
        <!--        header-->
        <Header @click.native="testMethod(1)"/>
        <NavBar/>
        <div v-dragula="home_2_sections" bag="home_2_sections" id="dragula_home_2_components">
            <template v-for="id in FETCH_HOME_COMPONENT_IDS">
                <template v-if="id === 'slider-component'">
                    <!--                    slider-->
                    <Slider :key="id"/>
                </template>
                <template v-else-if="id === 'product-component'">
                    <!--                    products-->
                    <tabs @click.native="testMethod(2)" :key="id"/>
                </template>
                <template v-else-if="id === 'banner-component'">
                    <!--                    banner-->
                    <Carousel @click.native="testMethod(3)" :key="id"/>
                </template>
            </template>
        </div>
        <!--        footer-->
        <Footer/>
        <div class="next-page">
            <button class="btn" @click="NEXT_PAGE('shop-2')"
                    v-if="product_boxs.product_box.length > 0 && inputs.input.length > 0">
                NEXT
            </button>
            <button class="btn" disabled v-else>NEXT</button>
        </div>
    </div>
</template>

<script>
    import Header from '../../../components/reg-stage/example-2/Header'
    import NavBar from '../../../components/reg-stage/example-2/NavBar'
    import Slider from '../../../components/reg-stage/example-2/Slider'
    import tabs from '../../../components/reg-stage/example-2/Tabs'
    import Carousel from '../../../components/reg-stage/example-2/Carousel'
    import Footer from '../../../components/reg-stage/example-2/Footer'

    import {mapActions, mapGetters, mapState} from 'vuex'
    import Vue from "vue";

    export default {
        data() {
            return {
                home_2_sections: [],
            }
        },
        components: {
            Header,
            Slider,
            NavBar,
            tabs,
            Carousel,
            Footer
        },
        methods: {
            ...mapActions(['HEADER_COMPONENTS', 'PRODUCT_COMPONENTS', 'NEXT_PAGE', 'GET_HOME_COMPONENTS_IDS']),
            testMethod(sectionId) {
                switch (sectionId) {
                    case 1:
                        this.HEADER_COMPONENTS('header_components');
                        this.PRODUCT_COMPONENTS('component');
                        break;
                    case 2:
                        this.HEADER_COMPONENTS('component');
                        this.PRODUCT_COMPONENTS('product_components')
                        break;
                    case 3:
                        this.HEADER_COMPONENTS('component');
                        this.PRODUCT_COMPONENTS('product_components')
                        break;
                    default:
                        break;
                }
            }
        },
        computed: {
            ...mapGetters(['FETCH_HOME_COMPONENT_IDS']),
            ...mapState(['product_boxs', 'inputs', 'banners'])
        },
        created() {
            Vue.vueDragula.eventBus.$on('drop', () => {
                // console.log(args);
                let arr = [];
                let wrapper = document.getElementById('dragula_home_2_components');
                for (let i = 0; i < wrapper.childNodes.length; i++) {
                    let childId = wrapper.childNodes[i].id;
                    arr.push(childId);
                }
                this.GET_HOME_COMPONENTS_IDS(arr)
            })
        },
    }
</script>

<style scoped>
    .next-page {
        bottom: 30px;
        right: 30px;
        position: fixed;
    }

    .next-page button {
        background-color: #6ba229;
    }
</style>