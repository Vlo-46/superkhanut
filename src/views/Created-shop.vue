<template>
    <div class="createdShop">
        <wrapper-nav/>
        <component :is="currentHomeComponent"/>
    </div>
</template>

<script>
    //wrapper navBar
    import wrapperNav from '../components/Navbar'

    //home pages
    import home_shop_1 from '../views/Created-shop/Home'
    import home_example_2 from '../views/reg-stage/example-2/Home'
    import {mapActions, mapState} from "vuex";


    export default {
        components: {
            'wrapper-nav': wrapperNav,
            'example-1': home_shop_1,
            'example-2': home_example_2,
        },
        computed: {
            ...mapState(['schema']),
            currentHomeComponent() {
                return this.schema
            }
        },
        methods: {
            ...mapActions(['GET_SHOP_INFO'])
        },
        beforeMount() {
            this.GET_SHOP_INFO();
        },
    }

</script>