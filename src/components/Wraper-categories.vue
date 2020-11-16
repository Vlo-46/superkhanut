<template>
    <div class="category-filter">
        <div class="row">
            <div class="col s4 m12 l12">
                <ul>
                    <li class="dropdown">
                        <a href="">Category 1</a>
                        <ul class="dropdown-box" style="display: none">
                        <li><a href="">drop 1</a></li>
                        <li><a href="">drop 2</a></li>
                        <li><a href="">drop 3</a></li>
                    </ul>
                    </li>
                    <li class="dropdown">
                        <a href="">Category 2</a>
                        <ul class="dropdown-box" style="display: none">
                            <li><a href="">drop 1</a></li>
                            <li><a href="">drop 2</a></li>
                            <li><a href="">drop 3</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="">Category 3</a>
                        <ul class="dropdown-box" style="display: none">
                            <li><a href="">drop 1</a></li>
                            <li><a href="">drop 2</a></li>
                            <li><a href="">drop 3</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="">Category 4</a>
                        <ul class="dropdown-box" style="display: none">
                            <li><a href="">drop 1</a></li>
                            <li><a href="">drop 2</a></li>
                            <li><a href="">drop 3</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="">Category 5</a>
                        <ul class="dropdown-box" style="display: none">
                            <li><a href="">drop 1</a></li>
                            <li><a href="">drop 2</a></li>
                            <li><a href="">drop 3</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="">Category 6</a>
                        <ul class="dropdown-box" style="display: none">
                            <li><a href="">drop 1</a></li>
                            <li><a href="">drop 2</a></li>
                            <li><a href="">drop 3</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="">Category 6</a>
                        <ul class="dropdown-box" style="display: none">
                            <li><a href="">drop 1</a></li>
                            <li><a href="">drop 2</a></li>
                            <li><a href="">drop 3</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="">Category 7</a>
                        <ul class="dropdown-box" style="display: none">
                            <li><a href="">drop 1</a></li>
                            <li><a href="">drop 2</a></li>
                            <li><a href="">drop 3</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="">Category 8</a>
                        <ul class="dropdown-box" style="display: none">
                            <li><a href="">drop 1</a></li>
                            <li><a href="">drop 2</a></li>
                            <li><a href="">drop 3</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="">Category 9</a>
                        <ul class="dropdown-box" style="display: none">
                            <li><a href="">drop 1</a></li>
                            <li><a href="">drop 2</a></li>
                            <li><a href="">drop 3</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="">Category 10</a>
                        <ul class="dropdown-box" style="display: none">
                            <li><a href="">drop 1</a></li>
                            <li><a href="">drop 2</a></li>
                            <li><a href="">drop 3</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="">Category 11</a>
                        <ul class="dropdown-box" style="display: none">
                            <li><a href="">drop 1</a></li>
                            <li><a href="">drop 2</a></li>
                            <li><a href="">drop 3</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .category-filter {
        border-bottom: 1px solid #e1e8ed;
    }

    .category-filter ul {
        display: flex;
        justify-content: center;
    }

    .category-filter ul li a {
        padding: 5px 10px;
        display: block;
        font-size: 13px;
        color: #444;
    }

    .category-filter ul li a:hover {
        background-color: #e6e6e6;
        color: #000;
    }


    .dropdown:hover .dropdown-box {
        display: block !important;
        height: auto;
        background-color: #fff;
        box-shadow: 0 0 3px 0;
        border-radius: 2px;
        z-index: 22;
        position: absolute;
        width: 200px;
    }

    .dropdown-box {
        background-color: #eceef5;
    }
</style>