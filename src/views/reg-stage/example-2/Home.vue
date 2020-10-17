<template>
    <div class="home-example-2">
        <Header @click.native="testMethod(1)"/>
        <NavBar/>
        <div v-dragula="sections" bag="sections" id="dragula_home_components">
            <Slider/>
            <tabs @click.native="testMethod(2)"/>
            <div class="clear-both" style="clear: both"></div>
            <Carousel @click.native="testMethod(2)"/>
        </div>
        <Footer/>
        <div class="next-page">
            <button class="btn" @click="NEXT_PAGE('shop')">NEXT</button>
        </div>
    </div>
</template>

<script>
    import Header from '../../../components/reg-stage/example-2/Header'
    import Slider from '../../../components/reg-stage/example-2/Slider'
    import NavBar from '../../../components/reg-stage/example-2/NavBar'
    import Carousel from '../../../components/reg-stage/example-2/Carousel'
    import tabs from '../../../components/reg-stage/example-2/Tabs'
    import Footer from '../../../components/reg-stage/example-2/Footer'

    import {mapActions} from 'vuex'
    // import {tns} from "../../../../node_modules/tiny-slider/src/tiny-slider"

    export default {
        data() {
          return {
              tab_components_dragula: [],
              slider_component: [],
              carousel_component: []
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
            ...mapActions(['HEADER_COMPONENTS', 'PRODUCT_COMPONENTS', 'NEXT_PAGE']),
            testMethod(sectionId) {
                switch (sectionId) {
                    case 1:
                        this.HEADER_COMPONENTS('header_components');
                        this.PRODUCT_COMPONENTS('component');
                        break;
                    case 2:
                        this.HEADER_COMPONENTS('component');
                        this.PRODUCT_COMPONENTS('product_components')
                }
            }
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