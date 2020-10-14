<template>
    <div class="example container">
        <div class="row">
            <div class="col s12 m4 l3">
                <product_6/>
            </div>
            <div class="col s12 m4 l3">
                <product_7/>
            </div>
            <div class="col s12 m4 l3">
                <product_8/>
            </div>
            <div class="col s12 m4 l3">
                <product_9/>
            </div>
<!--            <div class="col s12 m4 l3">-->
<!--                <product_10/>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
    import product_6 from '../components/reg-stage/products-box/Product-6'
    import product_7 from '../components/reg-stage/products-box/Product-7'
    import product_8 from '../components/reg-stage/products-box/Product-8'
    import product_9 from '../components/reg-stage/products-box/Product-9'
    // import product_10 from '../components/reg-stage/products-box/Product-10'


    export default {
        components: {
            product_6,
            product_7,
            product_8,
            product_9,
            // product_10
        }
    }
</script>

<style scoped>
    .example {
        margin-top: 50px;
    }
</style>