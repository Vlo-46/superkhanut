<template>
    <div>
        <h3>Company info</h3>
        <ul>

        </ul>
    </div>
</template>

<script>

    export default {
        beforeMount() {
            console.log(this.$route.query)
        }
    }
</script>