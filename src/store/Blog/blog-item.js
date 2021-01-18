import axios from 'axios'
import keys from "../../keys";
import Swal from "sweetalert2";

export default {
    state: {
        items: [],
        filtered_items: [],
        filtered: false
    },
    mutations: {
        BLOG_POSTS(state, items) {
            state.items = items
        },
        ADD_BLOG(state, data) {
            const blog = state.items.find(i => {
                return Number(i.id) === Number(data.post_id)
            })
            console.log(blog)
            blog.blog_post_comments.unshift(data.blog)
        },
        BLOG_CATEGORY(state, category) {
            if (category === 'all') {
                state.filtered = false
            } else {
                const filtered_blogs = state.items.filter(i => {
                    return i.category === category
                })
                state.filtered_items = filtered_blogs
                state.filtered = true
            }
        },
        BLOG_SEARCH(state, searched_name) {
            if(searched_name.length > 0) {
                const search = state.items.filter(i => {
                    return i.title.toLowerCase().includes(searched_name.toLowerCase())
                })
                state.filtered_items = search
                state.filtered = true
            }
        }
    },
    actions: {
        GET_BLOG_POSTS(ctx) {
            axios.get(`${keys.baseURI}/api/blog/10`)
                .then(res => {
                    // console.log(res.data)
                    ctx.commit('BLOG_POSTS', res.data)
                })
                .catch(e => console.log(e))
        },
        ADD_BLOG_POST(ctx, blog) {
            axios.post(`${keys.baseURI}/api/blog/comments`, blog)
                .then(() => {
                    ctx.commit('ADD_BLOG', blog)
                    Swal.fire({
                        icon: 'success',
                        title: 'Your comment added',
                        // text: 'Your account successfully deleted',
                        // footer: '<a href>Why do I have this issue?</a>'
                    })
                    // console.log(res.data)
                })
                .catch(e => {
                    console.log(e)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                })
        },
        BLOG_FILTER_BY_CATEGORY(ctx, category) {
            ctx.commit('BLOG_CATEGORY', category)
        },
        BLOG_SEARCH_FILTER(ctx, searched_name) {
            ctx.commit('BLOG_SEARCH', searched_name)
        }
    },
    getters: {}
}