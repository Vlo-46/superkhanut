<template>
    <div id="app">
        <router-view/>
        <login/>
    </div>
</template>

<script>
    import login from './components/auth/LoginModal'
    // import keys from './keys'

    export default {
        components: {
            login,
        },
        // created() {
        //     let favorite = keys.favorite;
        //
        //     localStorage.setItem(favorite, '')
        // }
    }
</script>

<style>
    body {
        font-family: -apple-system, BlinkMacSystemFont, “Segoe UI”, Roboto, Oxygen-Sans, Ubuntu, Cantarell, “Helvetica Neue”, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        background-color: #fafafa;
    }

    input[type="checkbox"]:checked + span:not(.lever):before {
        border-right: 2px solid #85b54a;
        border-bottom: 2px solid #85b54a;
    }

    input[type=text]:not(.browser-default):focus:not([readonly]), input[type=password]:not(.browser-default):focus:not([readonly]), input[type=email]:not(.browser-default):focus:not([readonly]), input[type=url]:not(.browser-default):focus:not([readonly]), input[type=time]:not(.browser-default):focus:not([readonly]), input[type=date]:not(.browser-default):focus:not([readonly]), input[type=datetime]:not(.browser-default):focus:not([readonly]), input[type=datetime-local]:not(.browser-default):focus:not([readonly]), input[type=tel]:not(.browser-default):focus:not([readonly]), input[type=number]:not(.browser-default):focus:not([readonly]), input[type=search]:not(.browser-default):focus:not([readonly]), textarea.materialize-textarea:focus:not([readonly]) {
        border-bottom: 1px solid #6ba229;
        -webkit-box-shadow: 0 1px 0 0 #6ba229;
        box-shadow: 0 1px 0 0 #6ba229;
    }

    .row {
        margin-bottom: 0;
    }

    .tns-controls, .tns-nav {
        display: none;
    }

    .noUi-connect {
        background-color: #49b14d !important;
    }

    .tns-inner {
        margin: 0 !important;
    }

    button:focus {
        outline: none;
        background-color: transparent;
    }
</style>
