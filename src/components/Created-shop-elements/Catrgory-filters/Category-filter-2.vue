<template>
    <div class="categories">
        <h5>CATEGORIES</h5>
        <ul>
            <li v-for="category in categories" :key="category"><span @click="COMPANY_FILTER_BY_CATEGORY(category)">{{category}}</span></li>
        </ul>
    </div>
</template>

<script>
    import {mapActions} from  'vuex'

    export default {
        props: ['categories'],
        methods: {
            ...mapActions(['COMPANY_FILTER_BY_CATEGORY'])
        }
    }
</script>

<style scoped>
    ul {
        display: flex;
        flex-direction: column;
    }

    ul li {
        margin: 5px 2px;
    }

    li span {
        padding: 2px 5px;
        color: #838383;
        cursor: pointer;
        font-family: inherit;
        font-size: 15px;
        text-transform: capitalize;
    }

    li span:hover {
        color: #4f4e4e;
    }
</style>