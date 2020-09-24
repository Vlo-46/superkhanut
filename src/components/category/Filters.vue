<template>
    <div class="row container">
        <div class="col s12 filters-box">
            <div>
                <a href="javascript:void(0)" @click="SWITCHPAGE('list')"><i class="material-icons">list</i></a>
            </div>
            <div>
                <a href="javascript:void(0)" @click="SWITCHPAGE('grid')"><i class="material-icons">apps</i></a>
            </div>
            <div><a href="#" class="waves-effect">Best match</a></div>
            <div><a href="#" class="waves-effect">Best sallers</a></div>
            <div><a href="#" class="waves-effect">Newest</a></div>
            <div><a href="#" class="waves-effect">Best rated</a></div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        methods: {...mapActions(['SWITCHPAGE'])}
    }

</script>

<style scoped>
    .row {
        margin-bottom: 30px;
    }

    .filters-box {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .filters-box div {
        margin: 0 4px;
    }

    .waves-effect {
        background: #fafafa;
        color: #333;
        padding: 8px 16px;
        cursor: pointer;
        border: none;
        border-right: 2px solid #e6e6e6;
        transition: background .2s, color .2s;
        font-weight: 700;
        font-size: 12px;
    }

    .waves-effect:hover {
        background: #f2f2f2;
    }

    .material-icons {
        color: #b3b3b3;
    }

    .material-icons:hover {
        color: #333;
    }

</style>