<template>
    <div class="all-comments row">
        <!--        <div class="col s2 m2 l2">-->
        <!--            <div class="imgBox">-->
        <!--                <img src="../../assets/user.png" alt="" class="responsive-img">-->
        <!--            </div>-->
        <!--        </div>-->
        <div class="col s12 m12 l12">
            <div class="comment-box">
                <div>
                    <p class="autor">{{name}} <span>{{created_at}}</span></p>
                </div>
                <div>
                    <p class="comment">{{message}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['name', 'email', 'message', 'created_at', 'updated_at'],
    }
</script>

<style scoped>
    .all-comments {
        display: flex;
    }

    img {
        width: 100%;
        height: 100px;
        border-radius: 50%;
    }

    .comment-box {
        background: #fff;
        border-radius: 5px;
        border: 1px solid #eee;
        padding: 20px;
        margin-bottom: 10px;
    }

    .autor {
        color: #111;
        font-size: 16px;
    }

    .autor span {
        font-size: 12px;
        font-weight: 500;
        padding-left: 10px;
        color: #6ba229;
    }

    .comment {
        color: #777;
        font-size: 13px;
        font-weight: 500;
    }
</style>