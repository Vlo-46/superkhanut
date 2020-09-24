<template>
    <div class="input-field">
        <label for="search">Search</label>
        <input type="text" id="search">
        <button class="search_btn"><i class="material-icons">search</i></button>
    </div>
</template>

<script>

</script>

<style scoped>
    .search_btn {
        color: #666;
        border: 1px solid #ccc;
        background-color: #fafafa;
        padding: 7px 16px;
        cursor: pointer;
        border-radius: 2px;
        float: right;
    }

    .search_btn:hover {
        background-color: #ccc;
        color: #fff;
    }
</style>