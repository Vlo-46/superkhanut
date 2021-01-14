<template>
    <div class="row">
        <div class="list col s12" v-for="blog in blog_item.items" :key="blog.id">
            <div class="row">
                <div class="col s5">
                    <img :src="blog.img" alt="">
                </div>
                <div class="col s7">
                    <div>
                        <p class="type">{{blog.type}}</p>
                        <p class="title">{{blog.title}}</p>
                    </div>
                    <div class="info">
                        <p><i class="material-icons">mail</i>&nbsp;<span>{{blog.contact}}</span></p>
                        <p><i class="material-icons">query_builder</i>&nbsp;<span>{{blog.time}}</span></p>
                    </div>
                    <div>
                        <p class="description">{{blog.description}}</p>
                    </div>
                    <div class="more">
                        <router-link :to="{path: '/blog/'+ blog.id, params: {id: blog.id}}" class="more">Read more
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        computed: {
            ...mapState(['blog_item'])
        },
    }
</script>

<style scoped>
    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        cursor: pointer;
    }

    .type {
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: #6ba229;
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
        font-size: 14px;
        color: #aaa;
        line-height: 1.9;
    }

    .more a {
        color: #79b530;
        border: 1px solid #79b530;
        background-color: #fff;
        cursor: pointer;
        padding: 6px 12px;
        float: right;
    }

    .more a:hover {
        color: #fff;
        background-color: #6ba229;
        transition: 0.5s;
    }

    .more {
        display: flex;
        justify-content: flex-end;
        border-bottom: 1px solid #6ba229;
        padding: 15px;
    }

    i {
        font-size: 14px;
        color: #6ba229;
    }

    .info p {
        display: flex;
        align-items: center;
    }

</style>