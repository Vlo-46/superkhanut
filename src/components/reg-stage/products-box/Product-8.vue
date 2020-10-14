<template>
    <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="../../../assets/no-img.jpg">
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">Title<i class="material-icons right">more_vert</i></span>
            <p><a href="#">View detail</a></p>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Category<i class="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
    </div>
</template>

<style scoped>
    .card {
        height: 370px;
        max-height: 370px;
        margin: 0 0 15px 0;
    }
</style>