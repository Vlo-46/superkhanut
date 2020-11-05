<template>
    <nav>
        <ul>
            <li>
                <a :href="`/${company_name}/home`">Home</a>
            </li>
            <li>
                <a :href="`/${company_name}/shop`">Shop</a>
            </li>
            <li>
                <a :href="`/${company_name}/contact`">Contact</a>
            </li>
            <li>
                <a :href="`/${company_name}/about`">About</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: ['company_name']
    }
</script>

<style scoped>
    nav {
        background-color: #fafafa;
    }

    ul {
        display: flex;
        justify-content: center;
    }

    a {
        color: #262626;
    }
</style>