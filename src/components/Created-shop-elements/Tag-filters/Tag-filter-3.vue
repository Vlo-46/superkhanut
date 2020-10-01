<template>
    <div class="tag-filter">
        <h5>TAGS</h5>
        <ul>
            <li v-for="tag in tags" :key="tag">
                <button>{{tag}}</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['tags'],
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
    button:hover {
        background-color: #6ba229;
        color: #fff;
        transition: 0.4s;
    }
</style>