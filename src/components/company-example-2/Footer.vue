<template>
    <footer>
        <div class="row">
            <div class="col s4">
                <div class="about-box">
                    <div><p class="title">About Us</p></div>
                    <div class="border"></div>
                    <div>
                        <p class="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores enim eum
                            maxime nemo,
                            officiis omnis perspiciatis sequi soluta tenetur veritatis!</p>
                    </div>
                </div>
            </div>
            <div class="col s4">
                <div class="contact">
                    <p class="title">Contact</p>
                    <div class="border"></div>
                    <ul>
                        <li><a href=""><i class="material-icons">call</i>0123456789</a></li>
                        <li><a href=""><i class="material-icons">email</i>example@mail.ru</a></li>
                        <li><a href=""><i class="material-icons">place</i>address</a></li>
                    </ul>
                </div>
            </div>
            <div class="col s4">
                <div class="partners">
                    <div><p class="title">Partners</p></div>
                    <div class="border"></div>
                    <div><img src="../../assets/payment.png" alt=""></div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        margin-top: 50px;
        background-color: #111;
    }

    .about-box {
        padding: 30px;
    }

    .partners {
        padding: 30px;
    }

    .contact {
        padding: 30px;
    }

    .title {
        font-size: 22px;
        color: #f1f1f1;
        border-bottom: 2px solid #0a662e;
        border-radius: 5px;
    }

    .about-text {
        color: #888888;
        font-size: small;
    }

    a {
        color: #888888;
    }

    i {
        padding-right: 5px;
    }

    img {
        width: 50%;
    }
</style>