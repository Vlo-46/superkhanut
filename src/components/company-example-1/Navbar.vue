<template>
    <nav>
        <div class="row company-navbar container">
            <div class="col s12">
                <ul>
                    <li v-for="link in links" :key="link.id">
                        <router-link :to="link.path" :style="link.active ? style : null">{{link.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                links: [
                    {id: 1, path: '/example-1', name: 'Home', active: false},
                    {id: 2, path: '/example-1/shop', name: 'Shop', active: false},
                    {id: 3, path: '/example-1/about', name: 'About', active: false},
                    {id: 4, path: '/example-1/contact', name: 'Contact', active: false},
                ],
                style: {
                    'color': 'orange'
                }
            }
        },
        mounted() {
            this.links.filter(i => {
                if (this.$route.path === i.path) {
                    i.active = true
                }
            })
        }
    }
</script>

<style scoped>
    nav {
        background-color: #49b14d;
    }

    .company-navbar {
        display: flex;
    }


    ul li a {
        color: #fff;
        font-weight: bold;
        font-size: 18px;
    }

    ul li a:hover {
        background-color: transparent;
        color: orange;
    }

    .company-logo {
        height: 64px;
    }

    .s5 a:hover {
        background-color: transparent;
    }
</style>