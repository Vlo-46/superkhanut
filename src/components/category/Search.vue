<template>
    <div class="category container">
        <div class="row">
            <div class="col s12 m12 l12 search_box input-field">
                <label for="search">Search</label>
                <input type="text" id="search">
                <button class="search_btn">Search</button>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .category {
        margin-top: 40px;
        margin-bottom: 30px;
    }
    .search_btn {
        background-color: #6ba229;
        border: none;
        color: #fff;
        cursor: pointer;
        width: 130px;
        height: 100%;
        border-radius: 3px;
    }
    .search_btn:hover {
        background-color: #6dad29;
        transition: 0.4s;
    }
    .search_box {
        display: flex;
        height: 50px;
    }
    #search {
        height: 100%;
    }
</style>