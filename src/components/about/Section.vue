<template>
    <section>
        <div class="row container">
            <div class="col s12 m12 l6">
                <div class="box-1">
                    <h3>Lorem ipsum dolor.</h3>
                    <div class="hr"></div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <ul>
                        <li><i class="material-icons">check</i>&nbsp;<small>Lorem ipsum dolor.</small></li>
                        <li><i class="material-icons">check</i>&nbsp;<small>Lorem ipsum dolor.</small></li>
                        <li><i class="material-icons">check</i>&nbsp;<small>Lorem ipsum dolor.</small></li>
                    </ul>
                </div>
            </div>
            <div class="col s12 m12 l6">
                <div class="box-2">
                    <img src="../../assets/no-img.jpg" class="responsive-img" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
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
