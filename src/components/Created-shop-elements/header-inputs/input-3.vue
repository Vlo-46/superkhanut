<template>
    <div class="searchBox" id="drop_input_3">
        <input type="text" placeholder="Search" class="resize-s" :style="input">
        <button class="btn" :style="button">Search</button>
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
        align-items: center;
        touch-action: none
    }

    .btn {
        background-color: #7a736e;
    }

    input[type=text]:not(.browser-default):focus:not([readonly]), input[type=password]:not(.browser-default):focus:not([readonly]), input[type=email]:not(.browser-default):focus:not([readonly]), input[type=url]:not(.browser-default):focus:not([readonly]), input[type=time]:not(.browser-default):focus:not([readonly]), input[type=date]:not(.browser-default):focus:not([readonly]), input[type=datetime]:not(.browser-default):focus:not([readonly]), input[type=datetime-local]:not(.browser-default):focus:not([readonly]), input[type=tel]:not(.browser-default):focus:not([readonly]), input[type=number]:not(.browser-default):focus:not([readonly]), input[type=search]:not(.browser-default):focus:not([readonly]), textarea.materialize-textarea:focus:not([readonly]) {
        border-bottom: 1px solid #7a736e;
        -webkit-box-shadow: 0 1px 0 0 #7a736e;
        box-shadow: 0 1px 0 0 #7a736e;
    }
</style>