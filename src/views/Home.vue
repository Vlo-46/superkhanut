<template>
    <div class="home">
        <navBar/>
        <NavWraper/>
        <tabs/>
        <footer-wraper/>
    </div>
</template>

<script>
    import navBar from '../components/Navbar'
    import tabs from '../components/home/Tabs'
    import footer from '../components/Footer'
    import NavWraper from '../components/Wraper-categories'

    export default {
        name: 'Home',
        components: {
            navBar,
            tabs,
            'footer-wraper': footer,
            NavWraper,
        },
    }
</script>

<style>
    .tabs .indicator {
        background-color: #777;
    }
</style>