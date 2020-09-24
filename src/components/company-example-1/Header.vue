<template>
    <nav>
        <div class="container row header">
            <div class="col s3">
                <ul>
                    <li><a href="/example-1" class="company-logo"><img src="../../assets/logo-comp.png"></a></li>
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
                <div class="support-box">
                    <div><i class="material-icons">phone</i></div>
                    <div>
                        <span>Customer Support</span>
                        <p class="phone-number">(08) 12 345 789</p>
                    </div>
                    <div><i class="material-icons">arrow_upward</i></div>
                </div>
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

    .support-box {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .support-box span {
        font-size: small;
        color: #888;
    }

    .phone-number {
        font-size: 18px;
        color: #333;
    }

    i {
        color: #6ba229;
    }

    .searchBox {
        display: flex;
        height: 100%;
        align-items: center;
    }

    .search_btn {
        background-color: #fff;
        color: #6ba229;
        border: 1px solid #6ba229;
        cursor: pointer;
        border-radius: 0 3px 3px 0;
    }

    .search_btn:hover {
        background-color: #6ba229;
        color: #fff;
    }

    #search_in_company {
        height: 2.3rem;
        margin: 0;
    }

    .searchBox div {
        display: flex;
    }

</style>