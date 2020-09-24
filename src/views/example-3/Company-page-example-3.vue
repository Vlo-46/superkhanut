<template>
    <div class="example-3">
<!--        <WrapperNav/>-->
        <Header/>
        <NavBar/>
        <div class="container">
            <Slider/>
            <HomeProducts/>
        </div>
        <Footer/>
    </div>
</template>

<script>
    // import WrapperNav from '../../components/Navbar'
    import Header from '../../components/company-example-3/Header'
    import NavBar from '../../components/company-example-3/NavBar'
    import Slider from '../../components/company-example-3/Slider'
    import HomeProducts from '../../components/company-example-3/Home-products'
    import Footer from '../../components/company-example-3/Footer'

    export default {
        components: {
            // WrapperNav,
            Header,
            NavBar,
            Slider,
            HomeProducts,
            Footer
        }
    }
</script>