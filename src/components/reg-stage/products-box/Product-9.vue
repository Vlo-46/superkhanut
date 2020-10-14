<template>
    <div class="card">
        <div class="card-image">
            <img src="../../../assets/no-img.jpg">
            <span class="card-title">Card Title</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">favorite</i></a>
        </div>
        <div class="card-content">
            <p>{{description.substr(0, 70)}}...</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
            }
        }
    }
</script>

<style scoped>
    .card {
        height: 370px;
        max-height: 370px;
        margin: 0 0 15px 0;
    }
</style>

<!--.substr(0, 79)-->