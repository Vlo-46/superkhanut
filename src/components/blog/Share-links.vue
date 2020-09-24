<template>
    <div class="share col s12 m12 l12">
        <p class="title">Share Links</p>
        <div class="hr"></div>
        <ul>
            <div><a href=""><i class="fab fa-instagram"/></a></div>
            <div><a href=""><i class="fab fa-facebook-f"/></a></div>
            <div><a href=""><i class="fab fa-twitter"/></a></div>
        </ul>
    </div>
</template>

<style scoped>
    .share {
        margin-top: 40px;
    }

    .hr {
        width: 100px;
        height: 3px;
        background-color: #6ba229;
        border-radius: 5px;
    }

    .title {
        color: #111;
        font-size: 20px;
        font-weight: 400;
    }

    ul {
        display: flex;
        background: #f1f1f1;
        padding: 15px;
    }

    ul div {
        margin-left: 20px;
    }

    a {
        color: #6b6b6b;
    }

    i {
        font-size: 15px;
    }

    a:hover {
        color: #6ba229;
    }
</style>