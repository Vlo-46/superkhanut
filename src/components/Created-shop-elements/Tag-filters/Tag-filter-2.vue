<template>
    <div class="tag-filter">
        <h5>TAGS</h5>
        <ul>
            <li v-for="tag in tags" :key="tag"><span>{{tag}}</span></li>
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