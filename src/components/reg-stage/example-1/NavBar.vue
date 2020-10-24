<template>
    <nav>
        <div class="container row header-links">
            <div class="row">
                <div class="col s12">
                    <ul>
                        <li>
                            <a href="" @click.prevent="">Home</a>
                        </li>
                        <li>
                            <router-link to="" @click.prevent="">Shop</router-link>
                        </li>
                        <li>
                            <router-link to="" @click.prevent="">About</router-link>
                        </li>
                        <li>
                            <router-link to="" @click.prevent="">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        computed: {
            ...mapState(['right_panel'])
        },
    }
</script>

<style scoped>
    nav {
        background-color: #fff;
        box-shadow: 0 0 0 0;
        height: auto;
        line-height: 44px;
    }

    .header-links {
        border-top: 1px solid #0a662e;
        width: 100%;
    }

    a {
        color: #262626;
        font-size: 19px;
    }

</style>