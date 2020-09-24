<template>
    <div class="advertising-box">
        <div class="row">
            <div class="col s5">
                <div class="box-1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolores dolorum eum fugit
                        quae veniam!</p>
                    <button class="btn">Detail</button>
                </div>
            </div>
            <div class="col s7">
                <div class="box-2">
                    <img src="../../assets/banner-big.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .row {
        display: flex;
    }

    .s5 {
        background-color: #49b14d;
    }

    .advertising-box {
        margin: 50px 0;
        max-height: 400px;
    }

    .box-1 {
        padding: 30px;
    }

    .box-1 p {
        color: #fff;
        font-size: 23px;
        font-weight: bold;
    }

    img {
        width: 100%;
        height: 100%;
        display: block;
    }

    .btn {
        background-color: #fff;
        color: #333;
        border-radius: 5px;
    }
    .btn:hover {
        background-color: orange;
    }
</style>