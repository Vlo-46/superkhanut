<template>
    <div class="tag-filter">
        <h5>TAGS</h5>
        <ul>
            <li v-for="t in tags" :key="t.id"><span>{{t.tag}}</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tags: [
                    {id: 1, tag: 'tag-1'},
                    {id: 2, tag: 'tag-2'},
                    {id: 3, tag: 'tag-3'},
                    {id: 4, tag: 'tag-4'},
                    {id: 5, tag: 'tag-5'},
                    {id: 6, tag: 'tag-6'},
                ]
            }
        }
    }
</script>

<style scoped>
    ul {
        display: flex;
        flex-wrap: wrap;
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