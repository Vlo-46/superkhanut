<template>
    <div class="your-comment">
        <div class="input-field">
            <label for="name">Your name</label>
            <input type="text" id="name" v-model="blog.name">
        </div>
        <div class="input-field">
            <label for="comment-email">E-mail address</label>
            <input type="email" id="comment-email" v-model="blog.email">
        </div>
        <div class="input-field">
            <label for="message">Your Message</label>
            <input type="text" id="message" class="materialize-textarea" v-model="blog.message">
        </div>
        <div>
            <button @click="ADD_BLOG_POST(blog)">Add comment</button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        props: ['id'],
        data() {
          return {
              blog: {
                  name: '',
                  email: '',
                  message: '',
                  post_id: this.id
              }
          }
        },
        methods: {
            ...mapActions(['ADD_BLOG_POST'])
        }
    }
</script>

<style scoped>
    button {
        background-color: #fff;
        color: #79b530;
        border: 1px solid #79b530;
        cursor: pointer;
        padding: 8px 22px
    }

    button:hover {
        background-color: #6ba229;
        color: #fff;
    }
</style>