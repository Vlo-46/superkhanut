<template>
    <ul :style="right_panel.categoryElements.ul">
        <h5>CATEGORIES</h5>
        <li v-for="category in categories" :key="category">
            <a href="" @click.prevent="COMPANY_FILTER_BY_CATEGORY(category)" :style="right_panel.categoryElements.a">{{category}}</a>
        </li>
    </ul>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        props: ['categories'],
        computed: {
            ...mapState(['right_panel'])
        },
        methods: {
            ...mapActions(['COMPANY_FILTER_BY_CATEGORY'])
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