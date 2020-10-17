<template>
    <div class="card">
        <div class="card-image waves-effect waves-block waves-light" @click.prevent="OPEN_RIGHT_PANEL('product')">
            <img class="activator" src="../../../assets/no-img.jpg">
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4" @click.prevent="OPEN_RIGHT_PANEL('product')" :style="right_panel.product.product_name">
                Title<i class="material-icons right" @click.prevent="OPEN_RIGHT_PANEL('icon')" :style="right_panel.icon">more_vert</i>
            </span>
            <p><a href="#" @click.prevent="OPEN_RIGHT_PANEL('button')" :style="right_panel.button">View detail</a></p>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4" @click.prevent="OPEN_RIGHT_PANEL('product')" :style="right_panel.product_category">
                Category<i class="material-icons right" @click.prevent="OPEN_RIGHT_PANEL('icon')" :style="right_panel.icon">close</i>
            </span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'


    export default {
        methods: {
            ...mapActions(['OPEN_RIGHT_PANEL'])
        },
        computed: {
            ...mapState(['right_panel'])
        },
    }
</script>

<style scoped>
    .card {
        height: 370px;
        max-height: 370px;
        margin: 0 0 15px 0;
    }
</style>