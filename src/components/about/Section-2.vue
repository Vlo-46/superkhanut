<template>
    <section>
        <div class="row wraper">
            <div class="col s12 m12 l12">
                <!--                <span>Lorem ipsum dolor.</span>-->
                <h3 v-if="about_us_title_2">{{about_us_title_2.value}}</h3>
                <div class="hr"></div>
                <p v-if="about_us_description_2">{{about_us_description_2.value}}</p>
                <div class="row">
                    <div class="col s12 m12 l6 info-box">
                        <div class="row">
                            <div class="col s2 m3 l4"><i class="material-icons responsive-img">filter</i></div>
                            <div class="col s10 m9 l8">
                                <a :href="about_us_service_1_link.value" target="_blank"
                                   v-if="about_us_service_1_title">{{about_us_service_1_title.value}}</a>
                                <p v-if="about_us_service_1_description">{{about_us_service_1_description.value}}</p>
                                <a :href="about_us_service_1_link.value" target="_blank">learn more <i
                                        class="material-icons">keyboard_arrow_right</i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m12 l6 info-box">
                        <div class="row">
                            <div class="col s2 m3 l4"><i class="material-icons responsive-img">filter</i></div>
                            <div class="col s10 m9 l8">
                                <a :href="about_us_service_2_link.value" target="_blank"
                                   v-if="about_us_service_2_title">{{about_us_service_2_title.value}}</a>
                                <p v-if="about_us_service_2_description">{{about_us_service_2_description.value}}</p>
                                <a :href="about_us_service_2_link.value" target="_blank">learn more <i
                                        class="material-icons">keyboard_arrow_right</i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m12 l6 info-box">
                        <div class="row">
                            <div class="col s2 m3 l4"><i class="material-icons responsive-img">filter</i></div>
                            <div class="col s10 m9 l8">
                                <a :href="about_us_service_3_link.value" target="_blank"
                                   v-if="about_us_service_3_title">{{about_us_service_3_title.value}}</a>
                                <p v-if="about_us_service_3_description">{{about_us_service_3_description.value}}</p>
                                <a :href="about_us_service_3_link.value" target="_blank">learn more <i
                                        class="material-icons">keyboard_arrow_right</i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m12 l6 info-box">
                        <div class="row">
                            <div class="col s2 m3 l4"><i class="material-icons responsive-img">filter</i></div>
                            <div class="col s10 m9 l8">
                                <a :href="about_us_service_4_link.value" target="_blank"
                                   v-if="about_us_service_4_title">{{about_us_service_4_title.value}}</a>
                                <p v-if="about_us_service_4_description">{{about_us_service_4_description.value}}</p>
                                <a :href="about_us_service_4_link.value" target="_blank">learn more <i
                                        class="material-icons">keyboard_arrow_right</i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['about_us_title_2', 'about_us_description_2', 'about_us_service_1_title', 'about_us_service_2_title',
            'about_us_service_3_title', 'about_us_service_4_title', 'about_us_service_1_link', 'about_us_service_2_link',
            'about_us_service_3_link', 'about_us_service_4_link', 'about_us_service_1_description', 'about_us_service_2_description',
            'about_us_service_3_description', 'about_us_service_4_description']
    }
</script>

<style scoped>
    section {
        margin-top: 100px;
    }

    /*img {*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    border-radius: 30px;*/
    /*    box-shadow: 0 0 10px;*/
    /*}*/
    .box-1 {
        background-image: url("../../assets/about.jpg");
        width: 100%;
        max-height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    .hr {
        width: 100px;
        height: 3px;
        background-color: #6ba229;
        border-radius: 5px;
    }

    i {
        font-size: 60px;
        color: #6ba229;
    }

    h3 {
        font-size: 30px;
        font-weight: 600;
        color: #111;
    }

    span {
        font-size: 15px;
        font-weight: 500;
        color: #6ba229
    }

    p {
        font-size: 15px;
        font-weight: 400;
        color: #999;
        line-height: 200%;
    }

    a {
        color: #6ba229;
        display: flex;
        align-items: center;
    }

    .info-box {
        margin-bottom: 20px;
    }
</style>