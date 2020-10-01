<template>
    <ul  @click="OPEN_RIGHT_PANEL('categoryElements')" :style="right_panel.categoryElements.ul">
        <h5>CATEGORIES</h5>
        <li><a href="" @click.prevent="" :style="right_panel.categoryElements.a">Category 1</a></li>
        <li><a href="" @click.prevent="" :style="right_panel.categoryElements.a">Category 2</a></li>
        <li><a href="" @click.prevent="" :style="right_panel.categoryElements.a">Category 3</a></li>
        <li><a href="" @click.prevent="" :style="right_panel.categoryElements.a">Category 4</a></li>
    </ul>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        methods: {
            ...mapActions(['OPEN_RIGHT_PANEL'])
        },
        computed: {
            ...mapState(['right_panel'])
        }
    }
</script>

<style scoped>
    h5 {
        margin-bottom: 20px;
    }
    ul {
        /*padding: 20px;*/
        background: #f8f8f8;
        margin-bottom: 30px;
        padding: 0 10px;
    }

    ul li a {
        font-size: 15px;
        line-height: 24px;
        position: relative;
        display: block;
        padding: 5px 0;
        text-transform: capitalize;
        color: #333;
    }

    ul li a:hover {
        color: #49b14d;
        transition: 0.5s;
        text-decoration: revert;
    }
</style>