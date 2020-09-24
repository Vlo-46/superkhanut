<template>
    <div class="searchBox row" id="drop_input_2">
        <div class="col s12">
            <input type="text" id="search_in_company" placeholder="Search" :style="input">
            <button class="search_btn" :style="button">Search</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['input', 'button'],
    }
</script>

<style scoped>
    .searchBox {
        display: flex;
        height: 100%;
        align-items: center;
        touch-action: none
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
</style>