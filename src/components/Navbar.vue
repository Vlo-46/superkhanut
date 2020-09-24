<template>
    <header>
        <div>
            <nav class="row">
                <ul class="s12 m12 l4">
                    <li><a href="/"><img src="../assets/logo.png" alt="" class="responsive-img"></a></li>
                </ul>
                <ul class="s12 m12 l8">
                    <li><a href="">Forums</a></li>
                    <li><a href="">Start Selling</a></li>
                    <li style="display: flex;">
                        <i class="material-icons">apps</i>
                        <a href="">Our Products</a>
                    </li>
                    <li class="profile_box">
                        <router-link to="/favorite" style="position: relative">
                            <i class="material-icons">favorite</i>
                            <!--                            <span class="favorite_count">{{favorite_count}}</span>-->
                        </router-link>
                        <router-link to="/basket"><i class="material-icons">shopping_cart</i></router-link>
                        <a href="#modal1" class="modal-trigger" v-if="!LOCALSTORAGE_TOKEN">Sign in</a>
                        <div v-else style="display: flex">
                            <router-link to="/profile">Profile</router-link>
                            <a href="" @click.prevent="LOGOUT">Logout</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
        <div>
            <nav class="category-navbar">
                <ul>
                    <li v-for="link in links" :key="link.id">
                        <a :href="link.path" :style="link.active ? active :null">{{link.name}}</a>
                    </li>
                    <li v-for="link in routerLinks" :key="link.id">
                        <router-link :to="link.path" :style="link.active ? active :null">{{link.name}}</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    import keys from "../keys";
    import {mapActions} from 'vuex'

    export default {
        data() {
            return {
                links: [
                    {id: 1, name: 'Home', path: '/', active: false},
                    {id: 2, name: 'Categories', path: '/category', active: false},
                ],
                routerLinks: [
                    {id: 3, name: 'About', path: '/about', active: false},
                    {id: 4, name: 'Blog', path: '/blog', active: false},
                    {id: 5, name: 'Contact', path: '/contact', active: false},
                ],
                active: {
                    'color': '#fff'
                },
                LOCALSTORAGE_TOKEN: '',
            }
        },
        beforeMount() {
            let API_TOKEN = keys.API_TOKEN;
            this.LOCALSTORAGE_TOKEN = localStorage.getItem(API_TOKEN);
        },
        mounted() {
            this.links.filter(i => {
                if (this.$route.path === i.path) {
                    i.active = true
                }
            });
            this.routerLinks.filter(i => {
                if (this.$route.path === i.path) {
                    i.active = true
                }
            })
        },
        methods: {
            ...mapActions(['LOGOUT'])
        },
        // computed: {
        //     favorite_count() {
        //         let arr = JSON.parse(localStorage.getItem(keys.favorite));
        //         if(arr.length > 0) {
        //             return arr.length
        //         }else {
        //             return false
        //         }
        //     }
        // }
    }
</script>


<style scoped>
    nav {
        background-color: #262626;
        display: flex;
        justify-content: space-around;
    }

    .profile_box {
        display: flex;
        background-color: #333;
        border-radius: 0 0 15px 15px;
    }

    .profile_box a:hover {
        background-color: #333;
    }

    ul li a {
        color: #a8a8a8;
        font-size: 13px;
        opacity: 0.8;
    }

    ul li a:hover {
        color: #fff;
        background-color: #262626;
        transition: 0.2s;
    }

    .material-icons {
        font-size: 18px;
        color: #a8a8a8;
        cursor: pointer;
    }

    .material-icons:hover {
        color: #fff;
    }


    .category-navbar ul li a {
        font-size: 16px;
    }

    .favorite_count {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 11px;
    }
</style>