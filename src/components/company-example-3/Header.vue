<template>
    <div class="header container">
        <div class="row">
            <div class="col s4">
                <div class="logo-box">
                    <a href="/example-3"><img src="../../assets/logo-comp.png"></a>
                </div>
            </div>
            <div class="col s4"></div>
            <div class="col s4">
                <div class="search-box">
                    <input type="text" placeholder="Search">
                    <button class="btn">Search</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .row {
        display: flex;
        align-items: center;
    }
    .search-box {
        display: flex;
        align-items: center;
    }
    .btn {
        background-color: #7a736e;
    }
    input[type=text]:not(.browser-default):focus:not([readonly]), input[type=password]:not(.browser-default):focus:not([readonly]), input[type=email]:not(.browser-default):focus:not([readonly]), input[type=url]:not(.browser-default):focus:not([readonly]), input[type=time]:not(.browser-default):focus:not([readonly]), input[type=date]:not(.browser-default):focus:not([readonly]), input[type=datetime]:not(.browser-default):focus:not([readonly]), input[type=datetime-local]:not(.browser-default):focus:not([readonly]), input[type=tel]:not(.browser-default):focus:not([readonly]), input[type=number]:not(.browser-default):focus:not([readonly]), input[type=search]:not(.browser-default):focus:not([readonly]), textarea.materialize-textarea:focus:not([readonly]) {
        border-bottom: 1px solid #7a736e;
        -webkit-box-shadow: 0 1px 0 0 #7a736e;
        box-shadow: 0 1px 0 0 #7a736e;
    }
</style>