<template>
    <div class="about-page">
        <WrapperNav/>
        <Header/>
        <NavBar/>
        <div class="about container">
            <div class="row">
                <div class="col s6">
                    <img src="../../assets/about.jpg">
                </div>
                <div class="col s6">
                    <div class="about-box">
                        <div><h3>Welcome</h3></div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aperiam
                                architecto
                                corporis cupiditate ea esse ex libero, nesciunt nobis non odio porro possimus,
                                praesentium
                                quisquam, suscipit voluptatum! Distinctio eius eos ex hic incidunt iusto quaerat quidem
                                quos
                                repudiandae voluptates. Adipisci alias aut blanditiis corporis, cumque deleniti ea
                                incidunt
                                laborum praesentium, quod reiciendis tempora veritatis voluptatibus? Amet blanditiis
                                dolores
                                ducimus molestiae, mollitia necessitatibus placeat quibusdam quisquam recusandae
                                reprehenderit sit suscipit?</p>
                        </div>
                        <div>
                            <button class="btn">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>

    </div>
</template>

<script>
    import WrapperNav from '../../components/Navbar'
    import Header from '../../components/company-example-1/Header'
    import NavBar from '../../components/company-example-1/Navbar'
    import Footer from '../../components/company-example-1/Footer'


    export default {
        components: {
            WrapperNav,
            NavBar,
            Header,
            Footer
        }
    }
</script>

<style scoped>
    .about {
        margin: 100px auto;
    }

    .s6 {
        background-color: #f2f2f2;
    }

    .about-box {
        padding: 0 30px 30px 0;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .row {
        display: flex;
    }

    button {
        background-color: #49b14d;
        color: #fff;
        border: 1px solid #49b14d;
    }

    button:hover {
        background-color: orange;
        border: 1px solid orange;
        color: #fff;
    }
</style>