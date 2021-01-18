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
                    <h5 v-if="agreement_title">{{agreement_title.value}}</h5>
                    <div class="information" v-if="agreement_text">{{agreement_text.value}}</div>
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
                    <div class="tutorial" v-if="agreement_video">
                        <h4>How to prepare a website</h4>
                        <iframe width="100%" height="100%" :src="agreement_video.value"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
</template>

<script>
    import Footer from '../Footer'
    import axios from "axios";
    import keys from "../../keys";

    export default {
        components: {Footer},
        data() {
            return {
                agree: false,
                info: []
            }
        },
        methods: {
            CHECK_TERMS() {
                if (this.agree === false) {
                    this.agree = true
                } else {
                    this.agree = false
                }
            },
        },
        computed: {
            agreement_video() {
                const agree_video = this.info.filter(i => {
                    return i.key === 'agreement_video'
                })[0]
                return agree_video
            },
            agreement_text() {
                const agree_text = this.info.filter(i => {
                    return i.key === 'agreement_text'
                })[0]
                return agree_text
            },
            agreement_title() {
                const agree_title = this.info.filter(i => {
                    return i.key === 'agreement_title'
                })[0]
                return agree_title
            }
        },
        created() {
            axios.get(`${keys.baseURI}/api/superstore`)
                .then(res => {
                    this.info = res.data
                })
                .catch(e => console.log(e))
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
        flex-direction: column;
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