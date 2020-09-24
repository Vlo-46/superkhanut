<template>
    <div class="navbar">
        <nav class="container">
            <ul>
                <li><a href="/example-3">Home</a></li>
                <li><router-link to="/example-3/shop">Shop</router-link></li>
                <li><router-link to="/example-3/about">About</router-link></li>
                <li><router-link to="/example-3/contact">Contact</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
    .navbar {
        background-color: #f3f3f3;
    }

    nav {
        background-color: #f3f3f3;
        box-shadow: 0 0 0 0;
    }

    a {
        color: #333;
    }
    a:hover {
        background-color: transparent;
        color: #000;
        font-weight: bold;
    }
</style>