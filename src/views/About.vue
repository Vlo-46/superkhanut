<template>
    <div class="about">
        <NavBar :website_logo="website_logo"/>
        <Header :about_us_header="about_us_header"/>
        <section-1 :about_us_title="about_us_title"
                   :about_us_description="about_us_description"
                   :about_us_option_1="about_us_option_1"
                   :about_us_option_2="about_us_option_2"
                   :about_us_option_3="about_us_option_3"
                   :about_us_image="about_us_image"
        />
        <section-2 :about_us_title_2="about_us_title_2"
                   :about_us_description_2="about_us_description_2"
                   :about_us_service_1_title="about_us_service_1_title"
                   :about_us_service_1_link="about_us_service_1_link"
                   :about_us_service_1_description="about_us_service_1_description"
                   :about_us_service_2_title="about_us_service_2_title"
                   :about_us_service_2_link="about_us_service_2_link"
                   :about_us_service_2_description="about_us_service_2_description"
                   :about_us_service_3_title="about_us_service_3_title"
                   :about_us_service_3_link="about_us_service_3_link"
                   :about_us_service_3_description="about_us_service_3_description"
                   :about_us_service_4_title="about_us_service_4_title"
                   :about_us_service_4_link="about_us_service_4_link"
                   :about_us_service_4_description="about_us_service_4_description"
        />

        <Footer :footer_title="footer_title" :footer_content="footer_content"/>
    </div>
</template>


<script>
    import NavBar from '../components/Navbar'
    import Footer from '../components/Footer'
    import Header from '../components/about/Header'
    import Section_1 from '../components/about/Section'
    import Section_2 from '../components/about/Section-2'
    import axios from "axios";
    import keys from "../keys";

    import {mapActions, mapState} from 'vuex'

    export default {
        data() {
            return {
                info: []
            }
        },
        components: {
            NavBar,
            Footer,
            Header,
            'section-1': Section_1,
            'section-2': Section_2
        },
        methods: {
            ...mapActions(['GET_SETTINGS'])
        },
        computed: {
            ...mapState(['settings']),
            about_us_header() {
                return this.info.filter(i => {
                    return i.key === 'about_us_header'
                })[0]
            },
            about_us_title() {
                return this.info.filter(i => {
                    return i.key === 'about_us_title'
                })[0]
            },
            about_us_description() {
                return this.info.filter(i => {
                    return i.key === 'about_us_description'
                })[0]
            },
            about_us_option_1() {
                return this.info.filter(i => {
                    return i.key === 'about_us_option_1'
                })[0]
            },
            about_us_option_2() {
                return this.info.filter(i => {
                    return i.key === 'about_us_option_2'
                })[0]
            },
            about_us_option_3() {
                return this.info.filter(i => {
                    return i.key === 'about_us_option_3'
                })[0]
            },
            about_us_image() {
                return this.info.filter(i => {
                    return i.key === 'about_us_image'
                })[0]
            },
            about_us_title_2() {
                return this.info.filter(i => {
                    return i.key === 'about_us_title_2'
                })[0]
            },
            about_us_description_2() {
                return this.info.filter(i => {
                    return i.key === 'about_us_description_2'
                })[0]
            },
            about_us_service_1_title() {
                return this.info.filter(i => {
                    return i.key === 'about_us_service_1_title'
                })[0]
            },
            about_us_service_1_link() {
                return this.info.filter(i => {
                    return i.key === 'about_us_service_1_link'
                })[0]
            },
            about_us_service_1_description() {
                return this.info.filter(i => {
                    return i.key === 'about_us_service_1_description'
                })[0]
            },
            about_us_service_2_title() {
                return this.info.filter(i => {
                    return i.key === 'about_us_service_2_title'
                })[0]
            },
            about_us_service_2_link() {
                return this.info.filter(i => {
                    return i.key === 'about_us_service_2_link'
                })[0]
            },
            about_us_service_2_description() {
                return this.info.filter(i => {
                    return i.key === 'about_us_service_2_description'
                })[0]
            },
            about_us_service_3_title() {
                return this.info.filter(i => {
                    return i.key === 'about_us_service_3_title'
                })[0]
            },
            about_us_service_3_link() {
                return this.info.filter(i => {
                    return i.key === 'about_us_service_3_link'
                })[0]
            },
            about_us_service_3_description() {
                return this.info.filter(i => {
                    return i.key === 'about_us_service_3_description'
                })[0]
            },
            about_us_service_4_title() {
                return this.info.filter(i => {
                    return i.key === 'about_us_service_4_title'
                })[0]
            },
            about_us_service_4_link() {
                return this.info.filter(i => {
                    return i.key === 'about_us_service_4_link'
                })[0]
            },
            about_us_service_4_description() {
                return this.info.filter(i => {
                    return i.key === 'about_us_service_4_description'
                })[0]
            },
            website_logo() {
                return this.settings.website_logo
            },
            footer_title() {
                return this.settings.footer_title
            },
            footer_content() {
                return this.settings.footer_content
            }
        },
        created() {
            axios.get(`${keys.baseURI}/api/superstore`)
                .then(res => {
                    this.info = res.data
                })
                .catch(e => console.log(e))
            this.GET_SETTINGS()
        }
    }
</script>

<style scoped>

</style>

