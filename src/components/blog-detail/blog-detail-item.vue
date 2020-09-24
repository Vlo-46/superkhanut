<template>
    <div class="blog-detail-item col s12">
        <div class="img-box">
            <img :src="img" alt="" class="responsive-img">
        </div>
        <div class="info-box">
            <div class="title"><p>{{title}}</p></div>
            <div class="info">
                <p><i class="material-icons">mail</i>&nbsp;<span>{{contact}}</span></p>
                <p><i class="material-icons">query_builder</i>&nbsp;<span>{{time}}</span></p>
                <p><i class="material-icons">format_list_bulleted</i>&nbsp;<span>{{type}}</span></p>
            </div>
            <div class="description">
                <p class="truncate">{{description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'type', 'time', 'contact', 'description', 'img'],
    }
</script>

<style scoped>
    img {
        width: 100%;
        height: 100%;
    }

    .title p {
        color: #111;
        font-size: 27px;
        font-weight: 500;
    }


    .info p {
        display: flex;
        align-items: center;
        padding-left: 10px;
    }

    .info p span {
        padding-left: 5px;
        color: #999;
        font-weight: 400;
    }

    .material-icons {
        color: #6ba229;
    }

    .description {
        border-left: 3px solid #6ba229;
        padding-left: 10px;
    }

    .description p {
        color: #999;
        font-size: 15px;
        font-weight: 400;
    }
</style>