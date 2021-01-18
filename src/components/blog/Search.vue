<template>
    <header>
        <div>
            <a href="javascript:void(0)"><i class="material-icons" @click="PAGESWITCH('list')">list</i></a>
            <a href="javascript:void(0)"><i class="material-icons" @click="PAGESWITCH('grid')">apps</i></a>
        </div>

        <div class="input-field">
            <i class="material-icons prefix" @click="BLOG_SEARCH_FILTER(searched_name)">search</i>
            <label for="icon_prefix">Search</label>
            <input type="text" id="icon_prefix" v-model="searched_name">
        </div>
    </header>

</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        data() {
          return {
              searched_name: ''
          }
        },
        methods: {
            ...mapActions(['PAGESWITCH', 'BLOG_SEARCH_FILTER'])
        }
    }
</script>

<style scoped>
    .material-icons {
        color: #b3b3b3;
    }

    .material-icons:hover {
        color: #333;
    }
    .prefix {
        cursor: pointer;
    }
</style>