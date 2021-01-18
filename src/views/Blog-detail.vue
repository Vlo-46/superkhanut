<template>
    <div class="blog-detail">
        <NavBar :website_logo="website_logo"/>
        <div class="row container blog-detail-box">
            <div class="col l12">
                <div class="row" v-if="blog_item_computed">
                    <blog-detail-item
                            :title="blog_item_computed.title"
                            :category="blog_item_computed.category"
                            :description="blog_item_computed.description"
                            :img="blog_item_computed.image"
                            :id="blog_item_computed.id"
                    />
                    <share-links/>
                    <Comments :comments="blog_item_computed.blog_post_comments"
                              :id="id"
                    />
                </div>
            </div>
        </div>
        <Footer :footer_title="footer_title" :footer_content="footer_content"/>
    </div>
</template>

<script>
    import NavBar from '../components/Navbar'
    import Footer from '../components/Footer'
    // import Search from "../components/blog/Search";
    // import categories from '../components/blog/Categories'
    // import tags from '../components/blog/Tags'
    import ShareLinks from '../components/blog/Share-links'
    import blog_detail_item from '../components/blog-detail/blog-detail-item'
    import Comments from '../components/blog-detail/Comments'
    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                id: null
            }
        },
        components: {
            NavBar,
            Footer,
            // Search,
            // categories,
            // tags,
            'share-links': ShareLinks,
            'blog-detail-item': blog_detail_item,
            Comments
        },
        methods: {
          ...mapActions(['GET_BLOG_POSTS', 'GET_SETTINGS'])
        },
        computed: {
            ...mapState(['blog_item', 'settings']),
            blog_item_computed() {
                const item = this.blog_item.items.filter(i => {
                    return Number(i.id) === Number(this.$route.params.id)
                })[0]
                return item
            },
            website_logo() {
                return this.settings.website_logo
            },
            footer_title() {
                return this.settings.footer_title
            },
            footer_content() {
                return this.settings.footer_content
            }
        },
        // async mounted() {
        //     let item = await this.blog_item.items.find(i => {
        //         return i.id === Number(this.$route.params.id)
        //     })
        //     this.blog = item
        // },
        created() {
            this.GET_BLOG_POSTS()
            this.id = this.$route.params.id
            this.GET_SETTINGS()
        }
    }

</script>

<style scoped>
    .blog-detail-box {
        margin-top: 100px;
    }
</style>