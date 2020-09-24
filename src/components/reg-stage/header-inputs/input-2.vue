<template>
    <div class="searchBox row" id="drop_input_2">
        <div class="col s12">
            <input type="text" id="search_in_company" placeholder="Search">
            <button class="search_btn" @click="OPEN_RIGHT_PANEL('button')" :style="right_panel.button">Search</button>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        methods: {
            ...mapActions(['OPEN_RIGHT_PANEL'])
        },
        computed: {
            ...mapState(['right_panel'])
        }
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