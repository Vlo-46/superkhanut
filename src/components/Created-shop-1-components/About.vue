<template>
    <div class="about">
        <div class="row">
            <div class="col s12 m6 l6">
                <div class="img-field">
                    <img v-if="about.about_img" :src="about.about_img" alt="">
                    <img v-else src="../../assets/no-img.jpg" alt="">
                </div>
            </div>
            <div class="col s12 m6 l6">
                <div class="about-field" v-if="about">
                    <h5 v-if="about.about_title">{{about.about_title}}</h5>
                    <div class="bottom-border" :style="`background-color: ${border_computed}`"></div>
                    <p v-if="about.about_text">
                        {{about.about_text}}
                    </p>
                    <!--                    <div class="row">-->
                    <!--                        <div class="col s12 m12 l6 information">-->
                    <!--                            <span><i class="material-icons icon_right" :style="icon_style">chevron_right</i>&nbsp;<b>Lorem ipsum dolor sit amet.</b></span>-->
                    <!--                            <span><i class="material-icons icon_right" :style="icon_style">chevron_right</i>&nbsp;<b>Lorem ipsum dolor sit amet.</b></span>-->
                    <!--                        </div>-->
                    <!--                        <div class="col s12 m12 l6 information">-->
                    <!--                            <span><i class="material-icons icon_right" :style="icon_style">chevron_right</i>&nbsp;<b>Lorem ipsum dolor sit amet.</b></span>-->
                    <!--                            <span><i class="material-icons icon_right" :style="icon_style">chevron_right</i>&nbsp;<b>Lorem ipsum dolor sit amet.</b></span>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                </div>
                <div class="about-field" v-else>
                    <h5>Fill in your company details</h5>
                    <div class="bottom-border" :style="`background-color: ${border_computed}`"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['icon_style', 'border', 'about'],
        computed: {
            border_computed() {
                return this.border
            }
        }
    }
</script>

<style scoped>
    .about {
        margin-top: 100px;
    }

    h5 {
        font-weight: bold;
    }

    .img-field {
        height: 350px;
        max-height: 350px;
    }

    img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 20px;
        -webkit-box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }

    .about-field {
        padding: 0 30px;
    }

    .about-field p {
        font-size: 15px;
        font-weight: 400;
        color: #999;
        line-height: 200%;
        margin-bottom: 15px;
    }

    .bottom-border {
        width: 100px;
        height: 3px;
        background-color: #6ba229;
        border-radius: 20px;
        margin: 10px 0 20px 0;
    }

    .information {
        margin-top: 20px;
    }

    .information span {
        font-size: small;
        display: flex;
        align-items: center;
    }

    .icon_right {
        color: #6ba229;
        padding-right: 10px;
    }

    b {
        font-size: small;
    }
</style>