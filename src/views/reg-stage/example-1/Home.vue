<template>
    <div class="home-example-1">
        <!--        header-->
        <Header @click.native="testMethod(1)"/>
        <NavBar/>
        <div v-dragula="home_1_sections" bag="home_1_sections" id="dragula_home_1_components">
            <template v-for="id in FETCH_HOME_COMPONENT_IDS">
                <template v-if="id === 'slider-component'">
                    <!--        slider-->
                    <Slider @click.native="testMethod(2)" :key="id"/>
                </template>
                <template v-else-if="id === 'banner-component'">
                    <!--        banner-->
                    <Banner @click.native="testMethod(3)" :key="id"/>
                </template>
                <template v-else-if="id === 'product-component'">
                    <!--        products-->
                    <Product @click.native="testMethod(4)" :key="id"/>
                </template>
            </template>
        </div>
        <!--        footer-->
        <Footer @click.native="testMethod(5)"/>
        <div class="next-page">
            <button class="btn" @click="NEXT_PAGE('shop')">NEXT</button>
        </div>
    </div>
</template>

<script>
    import Header from '../../../components/reg-stage/example-1/Header'
    import NavBar from '../../../components/reg-stage/example-1/NavBar'
    import Slider from '../../../components/reg-stage/example-1/Slider'
    import Banner from '../../../components/reg-stage/example-1/Banner'
    import Product from '../../../components/reg-stage/example-1/Product'
    import Footer from '../../../components/reg-stage/example-1/Footer'
    import {mapActions, mapGetters} from 'vuex'
    import Vue from "vue";

    // import FIND_PAGES_BY_COVER from '../../../utils'

    export default {
        data() {
            return {
                home_1_sections: []
            }
        },
        components: {
            Header,
            NavBar,
            Slider,
            Banner,
            Product,
            Footer
        },
        methods: {
            testMethod(sectionId) {
                switch (sectionId) {
                    case 1:
                        this.HEADER_COMPONENTS('header_components');
                        this.SLIDER_COMPONENTS('component');
                        this.BANNER_COMPONENTS('component');
                        this.PRODUCT_COMPONENTS('component');
                        this.FOOTER_COMPONENTS('component');
                        break;
                    case 2:
                        this.HEADER_COMPONENTS('component');
                        this.SLIDER_COMPONENTS('slider_components');
                        this.BANNER_COMPONENTS('component');
                        this.PRODUCT_COMPONENTS('component');
                        this.FOOTER_COMPONENTS('component');
                        break;
                    case 3:
                        this.HEADER_COMPONENTS('component');
                        this.SLIDER_COMPONENTS('component');
                        this.BANNER_COMPONENTS('banner_components');
                        this.PRODUCT_COMPONENTS('component');
                        this.FOOTER_COMPONENTS('component');
                        break;
                    case 4:
                        this.HEADER_COMPONENTS('component');
                        this.SLIDER_COMPONENTS('component');
                        this.BANNER_COMPONENTS('component');
                        this.PRODUCT_COMPONENTS('product_components');
                        this.FOOTER_COMPONENTS('component');
                        break;
                    case 5:
                        this.HEADER_COMPONENTS('component');
                        this.SLIDER_COMPONENTS('component');
                        this.BANNER_COMPONENTS('component');
                        this.PRODUCT_COMPONENTS('component');
                        this.FOOTER_COMPONENTS('footer_components');
                        break;
                    default:
                        break;
                }
            },
            ...mapActions(['HEADER_COMPONENTS', 'PRODUCT_COMPONENTS', 'SLIDER_COMPONENTS', 'BANNER_COMPONENTS', 'FOOTER_COMPONENTS', 'NEXT_PAGE', 'GET_HOME_COMPONENTS_IDS'])
        },
        computed: {
            ...mapGetters(['FETCH_HOME_COMPONENT_IDS'])
        },
        created() {
            Vue.vueDragula.eventBus.$on('drop', () => {
                // console.log(args);
                let arr = [];
                let wrapper = document.getElementById('dragula_home_1_components');
                for (let i = 0; i < wrapper.childNodes.length; i++) {
                    let childId = wrapper.childNodes[i].id;
                    // console.log(wrapper.childNodes[i])
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