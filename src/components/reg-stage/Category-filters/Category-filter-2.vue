<template>
    <div class="categories">
        <h5>CATEGORIES</h5>
        <ul>
            <li v-for="c in categories" :key="c.id"><span>{{c.category}}</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                categories: [
                    {id: 1, category: 'category-1'},
                    {id: 2, category: 'category-2'},
                    {id: 3, category: 'category-3'},
                    {id: 4, category: 'category-4'},
                    {id: 5, category: 'category-5'},
                ]
            }
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