<template>
    <ul class="collapsible col s6 m6 l12">
        <li>
            <div class="collapsible-header">Filter by category <i class="material-icons">arrow_drop_down</i></div>
            <div class="collapsible-body">
                <ul>
                    <li v-for="category in categories" :key="category">
                        <a @click.prevent="$WRAPPER_FILTER_BY_CATEGORY(category)">{{category}}</a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        props: ['categories'],
        methods: {
            ...mapActions(['$WRAPPER_FILTER_BY_CATEGORY'])
        },
    }
</script>

<style scoped>
    .collapsible-body ul li a {
        color: #262626;
        padding-bottom: 5px;
        display: block;
        cursor: pointer;
    }

    .collapsible-header {
        background-color: #fafafa;
        position: relative;
    }

    .material-icons {
        position: absolute;
        right: 0;
    }
</style>