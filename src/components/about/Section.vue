<template>
    <section>
        <div class="row container">
            <div class="col s12 m12 l6">
                <div class="box-1">
                    <h3 v-if="about_us_title">{{about_us_title.value}}</h3>
                    <div class="hr"></div>
                    <p v-if="about_us_description">{{about_us_description.value}}</p>
                    <ul>
                        <li v-if="about_us_option_1"><i class="material-icons">check</i>&nbsp;<small>{{about_us_option_1.value}}</small>
                        </li>
                        <li v-if="about_us_option_2"><i class="material-icons">check</i>&nbsp;<small>{{about_us_option_2.value}}</small>
                        </li>
                        <li v-if="about_us_option_3"><i class="material-icons">check</i>&nbsp;<small>{{about_us_option_3.value}}</small>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col s12 m12 l6">
                <div class="box-2">
                    <img v-if="about_us_image" :src="about_us_image.value" class="responsive-img" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['about_us_title', 'about_us_description', 'about_us_option_1', 'about_us_option_2', 'about_us_option_3', 'about_us_image']
    }
</script>

<style scoped>
    section {
        margin-top: 80px;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 30px;
        box-shadow: 0 0 10px;
        cursor: pointer;
    }

    h3 {
        font-size: 30px;
        font-weight: 600;
        color: #111;
    }

    p {
        font-size: 15px;
        font-weight: 400;
        color: #999;
        line-height: 200%;
    }

    li {
        display: flex;
        align-items: center;
    }

    small {
        padding-left: 5px;
    }

    i {
        color: #6ba229;
    }

    .hr {
        width: 100px;
        height: 3px;
        background-color: #6ba229;
        border-radius: 5px;
    }
</style>
