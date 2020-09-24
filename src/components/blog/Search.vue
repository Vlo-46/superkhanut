<template>
    <header>
        <div>
            <a href="javascript:void(0)"><i class="material-icons" @click="PAGESWITCH('list')">list</i></a>
            <a href="javascript:void(0)"><i class="material-icons" @click="PAGESWITCH('grid')">apps</i></a>
        </div>

        <div class="input-field">
            <label for="search">Search</label>
            <input type="text" id="search">
        </div>
    </header>

</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        methods: {...mapActions(['PAGESWITCH'])}
    }
</script>

<style scoped>
    .material-icons {
        color: #b3b3b3;
    }

    .material-icons:hover {
        color: #333;
    }
</style>