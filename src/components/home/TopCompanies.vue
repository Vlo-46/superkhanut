<template>
    <div class="top-company-item">
        <div class="imgBox">
            <a href=""><img src="../../assets/no-img.jpg" alt=""></a>
        </div>
        <div class="company-name-box">
            <a href="">{{company_name}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['company_name']
    }
</script>

<style scoped>
    .top-company-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
        padding: 10px 30px;
    }

    img {
        width: 100%;
        border-radius: 20px;
        cursor: pointer;
    }

    .company-name-box a {
        font-size: 15px;
        font-weight: bold;
        color: #333;
    }
</style>