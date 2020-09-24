<template>
    <ul class="tag-box">
        <h5>FILTER BY TAGS</h5>
        <li v-for="tag in tags" :key="tag">
            <label>
                <input type="checkbox"/>
                <span>{{tag}}</span>
            </label>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['tags'],
    }
</script>

<style scoped>
    .tag-box li {
        margin: 15px auto;
    }
</style>