<template>
    <div class="about">
        <NavBar/>
        <Header/>
        <section-1/>
        <section-2/>

        <Footer/>
    </div>
</template>


<script>
    import NavBar from '../components/Navbar'
    import Footer from '../components/Footer'
    import Header from '../components/about/Header'
    import Section_1 from '../components/about/Section'
    import Section_2 from '../components/about/Section-2'

    export default {
        components: {
            NavBar,
            Footer,
            Header,
            'section-1': Section_1,
            'section-2': Section_2
        }
    }
</script>

<style scoped>

</style>

