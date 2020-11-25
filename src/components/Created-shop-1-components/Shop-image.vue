<template>
    <div class="img-box">
        <img v-if="img" :src="img" alt="">
        <img v-else src="../../assets/no-img.jpg" alt="">
    </div>
</template>

<script>
    export default {
        props: ['img']
    }
</script>

<style scoped>
    .img-box {
        height: 200px;
        width: 100%;
    }
    img {
        width: 100%;
        height: 100%;
    }
</style>