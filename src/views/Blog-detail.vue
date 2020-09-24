<template>
    <div class="blog-detail">
        <NavBar/>
        <div class="row container blog-detail-box">
            <div class="col l12">
                <div class="row" v-if="blog">
                    <blog-detail-item
                            :title="blog.title"
                            :type="blog.type"
                            :contact="blog.contact"
                            :time="blog.time"
                            :description="blog.description"
                            :img="blog.img"
                    />
                    <share-links/>
                    <Comments/>
                </div>
            </div>
            <!--            <div class="col s3">-->
            <!--                <Search/>-->
            <!--                <categories/>-->
            <!--                <tags/>-->

            <!--            </div>-->
        </div>
        <Footer/>
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
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                blog: null,
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
        computed: {
            ...mapState(['blog_item'])
        },
        async mounted() {
            let item = await this.blog_item.items.find(i => {
                return i.id === Number(this.$route.params.id)
            })
            this.blog = item
        }
    }

</script>

<style scoped>
    .blog-detail-box {
        margin-top: 100px;
    }
</style>