<template>
    <div class="blog">
        <NavBar/>
        <Header/>
        <div class="container blog-items row">
            <div class="col s12 l3">
                <Search/>
                <div class="row">
                    <categories/>
                    <tags/>
                </div>
            </div>
            <div class="col s12 l9" v-if="blog_navigation.section == 'list'">
                <blog-list/>
            </div>
            <div class="col s12 l9" v-else>
                <blog-grid/>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import NavBar from '../components/Navbar'
    import Footer from '../components/Footer'
    import Header from '../components/blog/Header'
    import Blog_item from '../components/blog/Blog-item'
    import Search from '../components/blog/Search'
    import categories from '../components/blog/Categories'
    import tags from '../components/blog/Tags'
    import Blog_grid from '../components/blog/Blog-grid'
    import {mapState} from "vuex";

    export default {
        components: {
            NavBar,
            Footer,
            Header,
            'blog-list': Blog_item,
            Search,
            categories,
            tags,
            'blog-grid': Blog_grid
        },
        computed: {
            ...mapState(['blog_navigation'])
        },
    }
</script>

<style scoped>
    .blog-items {
        margin-top: 100px;
    }
</style>