<template>
    <div class="row">
        <div class="col s12 m6 l4 wraper" v-for="blog in blogs" :key="blog.id">
            <div class="blog-item">
                <div class="imgBox">
                    <img :src="blog.image" alt="">
                </div>
                <div class="info-box">
                    <p class="type">{{blog.category}}</p>
                    <p class="title">{{blog.title}}</p>
                    <!--                    <div class="mini_box">-->
                    <!--                        <div><i class="material-icons">assignment</i><span>{{blog.time}}</span></div>-->
                    <!--                        <div><i class="material-icons">format_list_bulleted</i><span>{{blog.type}}</span></div>-->
                    <!--                    </div>-->
                    <!--                    <p class="description">{{blog.description}}</p>-->
                    <router-link :to="{path: '/blog/'+ blog.id, params: {id: blog.id}}" class="more">Read more
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blogs']
    }
</script>

<style scoped>
    .blog-item {
        background: #fff;
        border: 1px solid #eee;
        border-radius: 5px;
        box-shadow: 0px 10px 30px 0px rgba(50, 50, 50, 0.16);
        display: flex;
        flex-direction: column;
        /*height: 470px;*/
        position: relative;
        height: 380px;
    }

    .info-box {
        height: 60%;
        padding: 10px 15px;
    }

    .imgBox {
        height: 40%;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        cursor: pointer;
    }

    .type {
        color: #6ba229;
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 4px;
        text-transform: uppercase;
    }

    .title {
        color: #111;
        font-size: 20px;
        font-weight: 500;
    }

    span {
        color: #999;
        font-size: 14px;
        font-weight: 500;
        padding-left: 5px;
    }

    .description {
        color: #999;
        font-size: 15px;
        font-weight: 400;
        border-bottom: 1px solid #ececec;
    }

    .more {
        color: #79b530;
        border: 1px solid #79b530;
        background-color: #fff;
        cursor: pointer;
        width: 100%;
        padding: 6px;
    }

    .more:hover {
        background-color: #6ba229;
        color: #fff;
        transition: 0.5s;
    }

    i {
        color: #6ba229;
        font-size: 20px;
    }

    .mini_box {
        display: flex;
        /*justify-content: space-evenly;*/
        flex-direction: column;
        margin-bottom: 20px;
    }

    .mini_box div {
        display: flex;
        align-items: center;
    }

    .wraper {
        margin-top: 20px;
    }
</style>