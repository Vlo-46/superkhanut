<template>
    <div class="confirmation-page">
        <nav>
            <div class="container">
                <ul>
                    <li><a href="/"><img src="../../assets/logo.png" class="responsive-img" alt=""></a></li>
                    <li><a href="">
                        <a href="/" class="btn">Cancel</a>
                    </a></li>
                </ul>
            </div>
        </nav>
        <div class="container confirmation">
            <div class="row">
                <div class="col s12 m12 l6">
                    <h5>Create your website on our platform</h5>
                    <div class="information">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloremque enim error eum
                        eveniet, facilis in incidunt laudantium magni quaerat quos ratione sunt suscipit. A accusamus
                        atque cumque debitis deserunt dicta distinctio dolorem doloremque doloribus earum eius eligendi
                        exercitationem facilis impedit labore magnam magni maiores necessitatibus nesciunt optio
                        possimus quae quidem, quos repellat reprehenderit rerum sapiente unde veniam veritatis
                        voluptatibus.
                    </div>
                    <div class="confirm-box">
                        <div>
                            <label @change="CHECK_TERMS">
                                <input type="checkbox"/>
                                <span>I agree to the <router-link to="/terms">terms</router-link></span>
                            </label>
                        </div>
                        <div class="input-field">
                            <router-link class="btn" v-if="agree === true" to="/registration-stage">Next</router-link>
                            <button class="btn" disabled v-else>Next</button>
                        </div>
                    </div>

                </div>
                <div class="col s12 m12 l6">
                    <div class="tutorial">
                        <h1>VIDEO HERE</h1>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
</template>

<script>
    import Footer from '../Footer'

    export default {
        components: {Footer},
        data() {
            return {
                agree: false,
            }
        },
        methods: {
            CHECK_TERMS() {
                if(this.agree === false) {
                    this.agree = true
                } else {
                    this.agree = false
                }
            },
        }
    }
</script>

<style scoped>
    nav {
        background-color: #111;
        margin-bottom: 50px;
    }

    ul {
        display: flex;
        justify-content: space-between;
    }

    .btn {
        background-color: #85b54a;
        border: none;
        border-radius: 5px;
        color: white;
        outline: none;
        text-align: center;
        transition: background-color 0.1s;
    }

    .tutorial {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .confirmation {
        margin-top: 50px;
        margin-bottom: 100px;
    }

    .information {
        padding: 20px 20px 20px 0;
        margin-bottom: 30px;
    }

    .confirm-box {
        display: flex;
        justify-content: space-between;
    }
</style>