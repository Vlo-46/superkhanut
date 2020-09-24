<template>
    <nav>
        <div class="container row header-links">
            <div class="row">
                <div class="col s12">
                    <ul>
                        <li>
                            <a href="/example-2">Home</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <router-link to="/example-2/shop">Shop</router-link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <router-link to="/example-2/about">About</router-link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <router-link to="/example-2/contact">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    nav {
        background-color: #fff;
        box-shadow: 0 0 0 0;
        height: auto;
        line-height: 44px;
    }

    .header-links {
        border-top: 1px solid #0a662e;
    }

    a {
        color: #262626;
        font-size: 19px;
    }

    a:hover {
        background-color: #0a662e;
        color: #fff;
        border-right: 4px;
    }
</style>