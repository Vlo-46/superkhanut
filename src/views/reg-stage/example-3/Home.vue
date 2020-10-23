<template>
    <div class="home-example-3">
        <!--        header-->
        <Header @click.native="testMethod(1)"/>
        <NavBar/>
        <div v-dragula="home_3_sections" bag="home_3_sections" id="dragula_home_3_components">
            <template v-for="id in FETCH_HOME_COMPONENT_IDS">
                <template v-if="id === 'slider-component'">
                    <!--                    slider-->
                    <Slider :key="id"/>
                </template>
                <template v-else-if="id === 'product-component'">
                    <!--                    products-->
                    <Products :key="id" @click.native="testMethod(2)"/>
                </template>
                <template v-else-if="id === 'banner-component'">
                    <!--                    featured products-->
                    <Carousel :key="id" @click.native="testMethod(3)"/>
                </template>
            </template>
        </div>
        <!--        footer-->
        <Footer/>
        <div class="next-page">
            <button class="btn" @click="NEXT_PAGE('shop-3')">NEXT</button>
        </div>
    </div>
</template>

<script>
    import Header from '../../../components/reg-stage/example-3/Header'
    import NavBar from '../../../components/reg-stage/example-3/NavBar'
    import Slider from '../../../components/reg-stage/example-3/Slider'
    import Products from '../../../components/reg-stage/example-3/Products'
    import Carousel from '../../../components/reg-stage/example-3/Carousel'
    import Footer from '../../../components/reg-stage/example-3/Footer'
    import {mapActions, mapGetters} from "vuex";
    import Vue from "vue";

    export default {
        data() {
            return {
                home_3_sections: []
            }
        },
        components: {
            Header,
            NavBar,
            Slider,
            Products,
            Carousel,
            Footer
        },
        methods: {
            testMethod(sectionId) {
                switch (sectionId) {
                    case 1:
                        this.HEADER_COMPONENTS('header_components');
                        this.PRODUCT_COMPONENTS('component');
                        break;
                    case 2:
                        this.HEADER_COMPONENTS('component');
                        this.PRODUCT_COMPONENTS('product_components');
                        break;
                    case 3:
                        this.HEADER_COMPONENTS('component');
                        this.PRODUCT_COMPONENTS('product_components');
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
                let wrapper = document.getElementById('dragula_home_3_components');
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