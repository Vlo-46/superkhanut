<template>
    <div class="tag-filter">
        <h5>TAGS</h5>
        <ul>
            <li v-for="t in tags" :key="t.id">
                <button>{{t.tag}}</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tags: [
                    {id: 1, tag: '#tag-1'},
                    {id: 2, tag: '#tag-2'},
                    {id: 3, tag: '#tag-3'},
                    {id: 4, tag: '#tag-4'},
                    {id: 5, tag: '#tag-5'},
                    {id: 6, tag: '#tag-6'},
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

    button {
        padding: 8px 15px;
        font-size: 13px;
        line-height: 18px;
        font-weight: 600;
        color: #3f2803;
        background-color: #f2f0ed;
        border: none;
        cursor: pointer;
    }
    /*button:hover {*/
    /*    background-color: #6ba229;*/
    /*    color: #fff;*/
    /*    transition: 0.4s;*/
    /*}*/
</style>