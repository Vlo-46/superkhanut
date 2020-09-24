<template>
    <div class="comments col s12">
        <div class="comments-box row">
            <div class="col s12">
                <p class="title">All Comments:</p>
                <all-comments v-for="item in comment_item"
                              :key="item.id"
                              :name="item.name"
                              :date="item.data"
                              :comment="item.comment"/>
            </div>
            <div class="col s12">
                <p class="title">Your Comment:</p>
                <your-comment/>
            </div>
        </div>
    </div>
</template>

<script>
    import all_comments from './All-comments'
    import your_comment from './Your-comment'

    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                comment_item: null
            }
        },
        components: {
            'all-comments': all_comments,
            'your-comment': your_comment
        },
        computed: {...mapState(['comments'])},
        created() {
            this.comment_item = this.comments.comments
        }
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