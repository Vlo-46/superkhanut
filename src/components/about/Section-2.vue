<template>
    <section>
        <div class="row wraper">
<!--            <div class="col s12 m12 l6 box-1">-->
<!--                &lt;!&ndash;                <div class="box-1">&ndash;&gt;-->
<!--                &lt;!&ndash;                    <img src="../../assets/armcoding-logo.jpg" alt="">&ndash;&gt;-->
<!--                &lt;!&ndash;                </div>&ndash;&gt;-->
<!--            </div>-->
            <div class="col s12 m12 l12">
                <span>Lorem ipsum dolor.</span>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                <div class="hr"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur cumque deleniti deserunt
                    dolor dolores fugiat necessitatibus nostrum sunt tenetur?</p>
                <div class="row">
                    <div class="col s12 m12 l6 info-box">
                        <div class="row">
                            <div class="col s2 m3 l4"><i class="material-icons responsive-img">filter</i></div>
                            <div class="col s10 m9 l8">
                                <a href="">Lorem ipsum.</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, velit.</p>
                                <a href="">learn more <i class="material-icons">keyboard_arrow_right</i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m12 l6 info-box">
                        <div class="row">
                            <div class="col s2 m3 l4"><i class="material-icons">filter</i></div>
                            <div class="col s10 m9 l8">
                                <a href="">Lorem ipsum.</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, velit.</p>
                                <a href="">learn more <i class="material-icons">keyboard_arrow_right</i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m12 l6 info-box">
                        <div class="row">
                            <div class="col s2 m3 l4"><i class="material-icons">filter</i></div>
                            <div class="col s10 m9 l8">
                                <a href="">Lorem ipsum.</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, velit.</p>
                                <a href="">learn more <i class="material-icons">keyboard_arrow_right</i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m12 l6 info-box">
                        <div class="row">
                            <div class="col s2 m3 l4"><i class="material-icons">filter</i></div>
                            <div class="col s10 m9 l8">
                                <a href="">Lorem ipsum.</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, velit.</p>
                                <a href="">learn more <i class="material-icons">keyboard_arrow_right</i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

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