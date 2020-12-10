<template>
    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Footer Content</h5>
                    <p class="grey-text text-lighten-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Incidunt ipsum optio quisquam quos reiciendis, ullam!.</p>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Links</h5>
                    <ul>
                        <li><a class="grey-text text-lighten-3" href="/">Home</a></li>
                        <li><a class="grey-text text-lighten-3" href="/category">Category</a></li>
                        <li>
                            <router-link class="grey-text text-lighten-3" to="/about">About</router-link>
                        </li>
                        <li>
                            <router-link class="grey-text text-lighten-3" to="/blog">Blog</router-link>
                        </li>
                        <li>
                            <router-link class="grey-text text-lighten-3" to="/contact">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                © ArmCoding 2020
<!--                <a class="grey-text text-lighten-4 right" href="#">More Links</a>-->
            </div>
        </div>
    </footer>
</template>
<style scoped>
    footer {
        background-color: #262626;
        margin-top: 50px;
    }
</style>