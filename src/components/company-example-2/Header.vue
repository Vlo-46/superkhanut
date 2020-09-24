<template>
    <nav>
        <div class="container row header">
            <div class="col s3">
                <ul>
                    <li><a href="/example-2" class="company-logo"><img src="../../assets/logo-comp.png"></a></li>
                </ul>
            </div>
            <div class="col s1"></div>
            <div class="col s5">
                <div class="searchBox row">
                    <div class="col s12">
                        <input type="text" id="search_in_company" placeholder="Search">
                        <button class="search_btn">Search</button>
                    </div>
                </div>
            </div>
            <div class="col s3">
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
        </div>
    </nav>
</template>

<style scoped>
    .header {
        display: flex;
    }

    nav {
        background-color: #fff;
        color: #262626;
        height: auto;
        line-height: 0;
    }

    .company-logo:hover {
        background-color: transparent;
    }

    img {
        width: 100%;
        display: block;
        height: 100%;
    }

    input {
        margin: 0;
    }

    i {
        color: #0a662e;
        display: block;
        font-size: 24px;
        height: 56px;
        line-height: 56px;
    }

    .searchBox {
        display: flex;
        height: 100%;
        align-items: center;
    }

    .search_btn {
        background-color: #0a662e;
        color: #fff;
        cursor: pointer;
        border: none;
        border-radius: 0 3px 3px 0;
    }

    .search_btn:hover {
        background-color: #1e7e34;
    }

    #search_in_company {
        height: 2.3rem;
        margin: 0;
    }

    .searchBox div {
        display: flex;
    }

    .links {
        display: flex;
        align-items: center;
    }

    .links a:hover {
        background-color: transparent;
    }

</style>