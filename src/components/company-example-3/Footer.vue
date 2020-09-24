<template>
    <footer>
        <div class="row container">
            <div class="col s4">
                <div class="info-box">
                    <h5>INFORMATION</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis delectus deleniti facilis
                        itaque laudantium magnam nisi possimus quasi, tenetur veritatis?</p>
                </div>
            </div>
            <div class="col s4">
                <h5 class="center-align">NEWSLETTER</h5>
                <div>
                    <input type="text" placeholder="Your email letter">
                    <button class="btn">SUBSCRIBE</button>
                </div>
            </div>
            <div class="col s4">
                <ul>
                    <h5>QUICK MENU</h5>
                    <li><a href="/example-3">Home</a></li>
                    <li>
                        <router-link to="/example-3/shop">Shop</router-link>
                    </li>
                    <li>
                        <router-link to="/example-3/about">About</router-link>
                    </li>
                    <li>
                        <router-link to="/example-3/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        background-color: #f3f3f3;
        padding: 30px 0;
        margin-top: 80px;
    }

    .s4 {
        padding: 0 30px;
    }

    .btn {
        width: 100%;
        background-color: #7a736e;
        color: #fff;
    }

    p {
        color: #666666;
    }

    a {
        color: #666666;
    }
    a:hover {
        color: #000;
        font-weight: bold;
    }

    input[type=text]:not(.browser-default):focus:not([readonly]), input[type=password]:not(.browser-default):focus:not([readonly]), input[type=email]:not(.browser-default):focus:not([readonly]), input[type=url]:not(.browser-default):focus:not([readonly]), input[type=time]:not(.browser-default):focus:not([readonly]), input[type=date]:not(.browser-default):focus:not([readonly]), input[type=datetime]:not(.browser-default):focus:not([readonly]), input[type=datetime-local]:not(.browser-default):focus:not([readonly]), input[type=tel]:not(.browser-default):focus:not([readonly]), input[type=number]:not(.browser-default):focus:not([readonly]), input[type=search]:not(.browser-default):focus:not([readonly]), textarea.materialize-textarea:focus:not([readonly]) {
        border-bottom: 1px solid #7a736e;
        -webkit-box-shadow: 0 1px 0 0 #7a736e;
        box-shadow: 0 1px 0 0 #7a736e;
    }
    li {
        margin: 5px 0;
    }

</style>