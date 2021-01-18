<template>
    <div class="header">
        <div class="content">
            <h3 v-if="about_us_header">{{about_us_header.value}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['about_us_header']
    }
</script>

<style scoped>
    .header {
        width: 100%;
        height: 250px;
        background-image: url("../../assets/armcoding-logo.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: relative;
    }
    .content {
        color: #fff;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        align-items: center;
    }
</style>