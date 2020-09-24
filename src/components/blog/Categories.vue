<template>
    <div class="categories col s6 m6 l12">
        <p class="title center-align">Categories</p>
        <div class="hr"></div>
        <ul>
            <li><i class="material-icons">check</i><a href="">Category 1</a></li>
            <li><i class="material-icons">check</i><a href="">Category 2</a></li>
            <li><i class="material-icons">check</i><a href="">Category 3</a></li>
            <li><i class="material-icons">check</i><a href="">Category 4</a></li>
            <li><i class="material-icons">check</i><a href="">Category 5</a></li>
            <li><i class="material-icons">check</i><a href="">Category 6</a></li>
        </ul>
    </div>
</template>

<style scoped>
    .hr {
        width: 100%;
        height: 3px;
        background-color: #6ba229;
        border-radius: 5px;
    }

    .title {
        color: #111;
        font-size: 20px;
        font-weight: 400;
    }

    .categories {
        margin-top: 40px;
    }

    li {
        display: flex;
        align-items: center;
        margin: 10px;
    }

    i {
        color: #6ba229;
        font-size: 20px;
    }

    a {
        font-size: 15px;
        font-weight: 500;
        color: #333;
        padding-left: 5px;
    }
    a:hover {
        color: #6ba229;
        padding-left: 10px;
        transition: 0.7s;
    }

</style>