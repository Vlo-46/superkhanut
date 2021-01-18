<template>
    <div class="blog">
        <NavBar :website_logo="website_logo"/>
        <Header/>
        <div class="container blog-items row">
            <div class="col s12 l3">
                <Search/>
                <div class="row">
                    <categories :blogs="blogs"/>
                    <!--                    <tags/>-->
                </div>
            </div>
            <template v-if="blog_item.filtered === true">
                <div class="col s12 l9" v-if="blog_navigation.section == 'list'">
                    <blog-list :blogs="blog_item.filtered_items"/>
                </div>
                <div class="col s12 l9" v-else>
                    <blog-grid :blogs="blog_item.filtered_items"/>
                </div>
            </template>
            <template v-else>
                <div class="col s12 l9" v-if="blog_navigation.section == 'list'">
                    <blog-list :blogs="blog_item.items"/>
                </div>
                <div class="col s12 l9" v-else>
                    <blog-grid :blogs="blog_item.items"/>
                </div>
            </template>
        </div>
        <Footer :footer_title="footer_title" :footer_content="footer_content"/>
    </div>
</template>

<script>
    import NavBar from '../components/Navbar'
    import Footer from '../components/Footer'
    import Header from '../components/blog/Header'
    import Blog_item from '../components/blog/Blog-item'
    import Search from '../components/blog/Search'
    import categories from '../components/blog/Categories'
    // import tags from '../components/blog/Tags'
    import Blog_grid from '../components/blog/Blog-grid'
    import {mapState, mapActions} from "vuex";

    export default {
        data() {
          return {
              all_categories: []
          }
        },
        components: {
            NavBar,
            Footer,
            Header,
            'blog-list': Blog_item,
            Search,
            categories,
            // tags,
            'blog-grid': Blog_grid
        },
        methods: {
            ...mapActions(['GET_BLOG_POSTS', 'GET_SETTINGS'])
        },
        computed: {
            ...mapState(['blog_navigation', 'blog_item', 'settings']),
            website_logo() {
                return this.settings.website_logo
            },
            footer_title() {
                return this.settings.footer_title
            },
            footer_content() {
                return this.settings.footer_content
            },
            blogs() {
                return this.blog_item
            }

        },
        created() {
            this.GET_BLOG_POSTS()
            this.GET_SETTINGS()
        }
    }
</script>

<style scoped>
    .blog-items {
        margin-top: 100px;
    }
</style>