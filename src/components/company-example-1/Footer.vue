<template>
    <footer class="container">
        <div class="row">
            <div class="col s4">
                <div class="imgBox">
                    <img src="../../assets/logo-comp.png" alt="">
                </div>
                <ul class="links">
                    <div>
                        <a href=""><i class="fab fa-instagram"></i></a>
                    </div>
                    <div>
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                    </div>
                    <div>
                        <a href=""><i class="fab fa-twitter"></i></a>
                    </div>
                    <div>
                        <a href=""><i class="fab fa-youtube"></i></a>
                    </div>
                </ul>
            </div>
            <div class="col s4">
                <div>
                    <p>Address</p>
                    <span>4710-4890 Breckinridge St, UK Burlington, VT 05401</span>
                </div>
                <div>
                    <p>Need Help?</p>
                    <span>Call: 1-800-345-6789</span>
                </div>
            </div>
            <div class="col s4 information-box">
                <p>Information</p>
                <ul>
                    <li>
                        <router-link to="/example-1">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/example-1/shop">Shop</router-link>
                    </li>
                    <li>
                        <router-link to="/example-1/about">About</router-link>
                    </li>
                    <li>
                        <router-link to="/example-1/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col 12 bottom-footer">
                <div><p>© ArmCoding 2020</p></div>
                <div><img src="../../assets/payment.png" alt=""></div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        border-top: 1px solid #ccc;
    }
    .s4 {
        padding: 30px;
    }
    .information-box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .information-box ul li {
        margin-bottom: 7px;
    }
    a {
        color: #49b14d;
    }
    a:hover {
        color: orange;
        transition: 0.5s;
    }
    .links {
        display: flex;
        justify-content: center;
    }
    .links div {
        margin: 0 10px;
    }
    i {
        font-size: 20px;
    }
    p {
        font-weight: bold;
    }
    span {
        font-size: small;
        color: #888;
    }
    .bottom-footer {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        border-top: 1px solid #ccc;
    }
</style>