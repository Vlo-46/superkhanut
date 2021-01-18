<template>
    <div class="comments col s12">
        <div class="comments-box row">
            <div class="col s12">
                <p class="title">Comments: <b>{{comments.length}}</b></p>
                <all-comments v-for="item in comments"
                              :key="item.id"
                              :name="item.name"
                              :email="item.email"
                              :created_at="item.created_at"
                              :updated_at="item.updated_at"
                              :message="item.message"/>
            </div>
            <div class="col s12">
                <p class="title">Your Comment:</p>
                <your-comment :id="id"/>
            </div>
        </div>
    </div>
</template>

<script>
    import all_comments from './All-comments'
    import your_comment from './Your-comment'


    export default {
        props: ['comments', 'id'],
        components: {
            'all-comments': all_comments,
            'your-comment': your_comment
        },

    }
</script>

<style scoped>
    .comments-box {
        background: #f7f7f7;
        border-radius: 5px;
        padding: 30px;
    }

    .comments {
        margin-top: 100px;
    }

    .title {
        font-size: 24px;
        font-weight: 500;
        color: #111;
    }
</style>