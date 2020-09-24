<template>
    <div class="home-example-2">
        <Header @click.native="testMethod(1)"/>
        <NavBar/>
        <Slider/>
        <best-sales @click.native="testMethod(2)"/>
    </div>
</template>

<script>
    import Header from '../../../components/reg-stage/example-2/Header'
    import Slider from '../../../components/reg-stage/example-2/Slider'
    import NavBar from '../../../components/reg-stage/example-2/NavBar'

    import best_sales from '../../../components/reg-stage/example-2/BestSales'

    import {mapActions} from 'vuex'
    import {tns} from "../../../../node_modules/tiny-slider/src/tiny-slider"

    export default {
        components: {
            Header,
            Slider,
            NavBar,
            'best-sales': best_sales
        },
        methods: {
            ...mapActions(['HEADER_COMPONENTS', 'PRODUCT_COMPONENTS']),
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
        mounted() {
            let slider = tns({
                autoplay: true,
                slideBy: 1,
                autoplayButtonOutput: false,
                mouseDrag: true,
                autoHeight: true,
                "items": 3,
                "controls": false,
                "responsive": {
                    "350": {
                        "items": 3,
                        "controls": true,
                        "edgePadding": 30
                    },
                    "500": {
                        "items": 4
                    }
                },
                "container": ".best_sales_slider",
                // "swipeAngle": false,
                "speed": 1000
            });
            slider.play();
        }
    }
</script>