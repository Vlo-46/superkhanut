<template>
    <div class="searchBox row" id="drop_input_1">
        <div class="col s12">
            <input type="text" id="search_in_company"
                   :style="right_panel.input"
                   placeholder="Search"
                   @click="OPEN_RIGHT_PANEL('input')">
            <button @click="OPEN_RIGHT_PANEL('button')" :style="right_panel.button">Search</button>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'


    export default {
        methods: {
            ...mapActions(['OPEN_RIGHT_PANEL'])
        },
        computed: {
            ...mapState(['right_panel'])
        },
    }
</script>


<style scoped>

    .searchBox {
        display: flex;
        height: 100%;
        align-items: center;
        touch-action: none;
        user-select: none;
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